import { BlockTypes, EquipmentSlot, ItemStack, Player, StructureSaveMode, system, Vector3, world } from "@minecraft/server";
import { simulatedPlayers, testWorldDimension, testWorldLocation } from "../main";
// 将假人背包与经验值保存到世界结构中

// 寻址工具 十进制序号转三维地址，以16x16x16区块为单位。优先使用最小的区块的坐标。总容量 32x32x32。每个区块16x16x16。
// 我不到啊。我写注释，AI生成了函数，我看能用就用了。
/**
 * 将十进制序号转换为三维地址
 * @param index 十进制序号 (0-32767)
 * @returns Vector3 三维坐标
 */
function indexToVector3(index: number): Vector3 {
    // 总容量32x32x32 = 32768个位置
    // 以16x16x16区块为单位，每个区块4096个位置
    // 总共8个区块，排列为2x2x2

    if (index < 0 || index >= 32768) {
        throw new Error(`索引超出范围: ${index}, 有效范围: 0-32767`);
    }

    // 每个区块的容量
    const CHUNK_SIZE = 16;
    const CHUNK_VOLUME = CHUNK_SIZE * CHUNK_SIZE * CHUNK_SIZE; // 4096

    // 确定在哪个区块
    const chunkIndex = Math.floor(index / CHUNK_VOLUME);

    // 将区块索引转换为区块坐标 (2x2x2布局)
    const chunkX = chunkIndex % 2;
    const chunkY = Math.floor(chunkIndex / 4) % 2;
    const chunkZ = Math.floor(chunkIndex / 2) % 2;

    // 区块内的位置索引
    const localIndex = index % CHUNK_VOLUME;

    // 将区块内索引转换为区块内坐标
    const localX = localIndex % CHUNK_SIZE;
    const localY = Math.floor(localIndex / (CHUNK_SIZE * CHUNK_SIZE)) % CHUNK_SIZE;
    const localZ = Math.floor(localIndex / CHUNK_SIZE) % CHUNK_SIZE;

    // 计算最终的世界坐标
    const worldX = chunkX * CHUNK_SIZE + localX;
    const worldY = chunkY * CHUNK_SIZE + localY;
    const worldZ = chunkZ * CHUNK_SIZE + localZ;

    return { x: worldX, y: worldY, z: worldZ };
}

/**
 * 将三维地址转换为十进制序号
 * @param position Vector3 三维坐标
 * @returns number 十进制序号
 */
function vector3ToIndex(position: Vector3): number {
    const CHUNK_SIZE = 16;
    const CHUNK_VOLUME = CHUNK_SIZE * CHUNK_SIZE * CHUNK_SIZE;

    // 确定区块坐标
    const chunkX = Math.floor(position.x / CHUNK_SIZE);
    const chunkY = Math.floor(position.y / CHUNK_SIZE);
    const chunkZ = Math.floor(position.z / CHUNK_SIZE);

    // 验证区块坐标有效性
    if (chunkX < 0 || chunkX >= 2 || chunkY < 0 || chunkY >= 2 || chunkZ < 0 || chunkZ >= 2) {
        throw new Error(`坐标超出范围: (${position.x}, ${position.y}, ${position.z})`);
    }

    // 计算区块索引
    const chunkIndex = chunkY * 4 + chunkZ * 2 + chunkX;

    // 计算区块内坐标
    const localX = position.x % CHUNK_SIZE;
    const localY = position.y % CHUNK_SIZE;
    const localZ = position.z % CHUNK_SIZE;

    // 计算区块内索引
    const localIndex = localY * CHUNK_SIZE * CHUNK_SIZE + localZ * CHUNK_SIZE + localX;

    // 计算最终索引
    return chunkIndex * CHUNK_VOLUME + localIndex;
}

// 两个三维地址相加
function addVector3(a: Vector3, b: Vector3): Vector3 {
    return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z }
}

const size = { x: 32, y: 32, z: 32 }
const VoidBarrel = BlockTypes.get("minecraft:barrel")
let initSucceed = false
let structure_location = null
function init() {
    if (!testWorldLocation) return
    structure_location = { x: testWorldLocation.x, y: 320 - 64, z: testWorldLocation.z }
    let structure = world.structureManager.get("flashfakeplayerpack:backpack2barrel")
    if (!structure) {
        const structure_old = world.structureManager.get("flashfakeplayerpack:backpack2barrel_old")
        if (structure_old) {
            structure_old.saveAs("flashfakeplayerpack:backpack2barrel", StructureSaveMode.World)
        }

    }
    structure = world.structureManager.get("flashfakeplayerpack:backpack2barrel")
    if (!structure)
        structure = world.structureManager.createEmpty("flashfakeplayerpack:backpack2barrel", size, StructureSaveMode.Memory)
    world.structureManager.place(structure, testWorldDimension, structure_location)

    initSucceed = true
}
async function saveAllFakePlayerBackpack() {

    // 从simulatedPlayers对象过滤出PID数字
    // 异步保存所有假人的背包等信息
    await Promise.all(Object.values(simulatedPlayers).filter(v => typeof v === "number").map(async PID => {
        // @ts-ignore
        const _SimulatedPlayer = <Player>simulatedPlayers[PID]
        // world.sendMessage("saveAllFakePlayerBackpack"+PID)

        if (!_SimulatedPlayer) return
        if (!_SimulatedPlayer.isValid) return
        const index = Number(PID) * 3
        if (index < 0) return
        // world.sendMessage("saveAllFakePlayerBackpack"+PID)
        let void_count = 0

        const location0 = addVector3(structure_location, indexToVector3(index + 0))
        const block_backpack = testWorldDimension.getBlock(location0)
        if (block_backpack.type.id !== VoidBarrel.id) {
            block_backpack.setType(VoidBarrel)
            void_count++
        }
        const inv_backpack = block_backpack.getComponent("minecraft:inventory")
        const con_backpack = inv_backpack.container

        const location1 = addVector3(structure_location, indexToVector3(index + 1))
        const block_hotbar_armor = testWorldDimension.getBlock(location1)
        if (block_hotbar_armor.type.id !== VoidBarrel.id) {
            block_hotbar_armor.setType(VoidBarrel)
            void_count++
        }
        const inv_hotbar_armor = block_hotbar_armor.getComponent("minecraft:inventory")
        const con_hotbar_armor = inv_hotbar_armor.container

        const inv_simulatedPlayer = _SimulatedPlayer.getComponent("minecraft:inventory")
        const con_simulatedPlayer = inv_simulatedPlayer.container

        // 读取保存的信息，还原
        if (void_count <= 0 && _SimulatedPlayer.hasTag("Backpack2Barrel_init")) {


            for (let i = 0; i < 9; i++) {
                con_simulatedPlayer.setItem(i, con_hotbar_armor.getItem(i))
            }
            for (let i = 9; i < 36; i++) {
                con_simulatedPlayer.setItem(i - 9, con_backpack.getItem(i - 9))
            }


            const equippable_simulatedPlayer = _SimulatedPlayer.getComponent("minecraft:equippable")

            equippable_simulatedPlayer.setEquipment(EquipmentSlot.Head, con_hotbar_armor.getItem(9))
            equippable_simulatedPlayer.setEquipment(EquipmentSlot.Chest, con_hotbar_armor.getItem(10))
            equippable_simulatedPlayer.setEquipment(EquipmentSlot.Legs, con_hotbar_armor.getItem(11))
            equippable_simulatedPlayer.setEquipment(EquipmentSlot.Feet, con_hotbar_armor.getItem(12))
            equippable_simulatedPlayer.setEquipment(EquipmentSlot.Offhand, con_hotbar_armor.getItem(13))

            _SimulatedPlayer.addExperience(Number(con_hotbar_armor.getItem(14).nameTag))
            _SimulatedPlayer.nameTag = con_hotbar_armor.getItem(15).nameTag
            con_hotbar_armor.getItem(15).getLore().forEach(tag => {
                _SimulatedPlayer.addTag(tag)
            })

            _SimulatedPlayer.removeTag("Backpack2Barrel_init")
            world.sendMessage(`${_SimulatedPlayer.name} 背包还原成功`)
            return
        }

        for (let i = 0; i < 9; i++) {
            con_hotbar_armor.setItem(i, con_simulatedPlayer.getItem(i))
        }
        for (let i = 9; i < 36; i++) {
            con_backpack.setItem(i - 9, con_simulatedPlayer.getItem(i - 9))
        }

        // minecraft:equippable
        const equippable_simulatedPlayer = _SimulatedPlayer.getComponent("minecraft:equippable")

        con_hotbar_armor.setItem(9, equippable_simulatedPlayer.getEquipment(EquipmentSlot.Head))
        con_hotbar_armor.setItem(10, equippable_simulatedPlayer.getEquipment(EquipmentSlot.Chest))
        con_hotbar_armor.setItem(11, equippable_simulatedPlayer.getEquipment(EquipmentSlot.Legs))
        con_hotbar_armor.setItem(12, equippable_simulatedPlayer.getEquipment(EquipmentSlot.Feet))
        con_hotbar_armor.setItem(13, equippable_simulatedPlayer.getEquipment(EquipmentSlot.Offhand))

        const experience_bottle = new ItemStack("minecraft:experience_bottle")
        experience_bottle.nameTag = _SimulatedPlayer.getTotalXp().toString()
        experience_bottle.setLore([`${_SimulatedPlayer.getTotalXp()}`])
        con_hotbar_armor.setItem(14, experience_bottle)

        const name_tag = new ItemStack("minecraft:name_tag")
        name_tag.nameTag = _SimulatedPlayer.nameTag
        name_tag.setLore(_SimulatedPlayer.getTags())
        con_hotbar_armor.setItem(15, name_tag)

    }))

    world.structureManager.delete("flashfakeplayerpack:backpack2barrel_old")
    const structure = world.structureManager.get("flashfakeplayerpack:backpack2barrel")
    structure.saveAs("flashfakeplayerpack:backpack2barrel_old", StructureSaveMode.World)
    world.structureManager.delete(structure)
    // 保存到结构中
    const structure_new = world.structureManager.createFromWorld("flashfakeplayerpack:backpack2barrel", testWorldDimension, structure_location, addVector3(structure_location, size), { saveMode: StructureSaveMode.World })

}



system.runInterval(async () => {
    if (!initSucceed) return init()
    await saveAllFakePlayerBackpack()
})

