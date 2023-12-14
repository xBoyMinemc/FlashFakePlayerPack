import * as server from "@minecraft/server"
export function 盾牌耐久(Entity: server.Entity) {
    /** 获取 实体 的 背包信息 */
    const get_Container = Entity.getComponent("minecraft:equippable") as server.EntityEquippableComponent;
    /** 获取 实体 的 盾牌 */
    const get_Shield = get_Container.getEquipment(server.EquipmentSlot.Offhand);
    /** 获取 盾牌 的 附加信息 */
    const get_Lore = get_Shield ? get_Shield.getLore() : [];

    //执行功能判断
    if (get_Shield===undefined) return;

    //检测盾牌是否被使用过
    if (get_Lore.length === 0){
        //如果 盾牌未被使用过 就 初始化盾牌数据 并且返回结束
        /** 定义 盾牌 的 初始耐久信息 */
        get_Shield.setLore([JSON.stringify({ durable: 300 })]);
        get_Container.setEquipment(server.EquipmentSlot.Offhand, get_Shield);
        return;
    }

    /** 获取 盾牌 的 耐久 */
    const get_info = (JSON.parse(get_Lore[0]) as { durable: number }).durable;
    /** 定义盾牌 的 新的耐久值 */
    const new_Tag = JSON.stringify({ durable: get_info - 1 });

    //注入物品信息
    get_Shield.setLore([new_Tag]);

    //检测盾牌剩余耐久
    //如果耗尽就移除这个盾牌 并且结束
    if (get_info <= 0)
        return get_Container.setEquipment(server.EquipmentSlot.Offhand) && Entity.runCommand("playsound random.break @a[r=5] ~~~");

    get_Container.setEquipment(server.EquipmentSlot.Offhand, get_Shield);
    if (get_info <= 10)
        //检测盾牌是否耐久告急
        Entity.dimension.spawnParticle(
            "提示图标:碎盾警示",
            server.Vector.add({x:0,y:1,z:0},Entity.getHeadLocation()), //头上
            new server.MolangVariableMap()
        )
}