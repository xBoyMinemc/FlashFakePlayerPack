import * as server from "@minecraft/server";
export function 盾牌耐久(Entity) {
    const get_Container = Entity.getComponent("minecraft:equippable");
    const get_Shield = get_Container.getEquipment(server.EquipmentSlot.Offhand);
    const get_Lore = get_Shield ? get_Shield.getLore() : [];
    if (get_Shield === undefined)
        return;
    if (get_Lore.length === 0) {
        get_Shield.setLore([JSON.stringify({ durable: 300 })]);
        get_Container.setEquipment(server.EquipmentSlot.Offhand, get_Shield);
        return;
    }
    const get_info = JSON.parse(get_Lore[0]).durable;
    const new_Tag = JSON.stringify({ durable: get_info - 1 });
    get_Shield.setLore([new_Tag]);
    if (get_info <= 0)
        return get_Container.setEquipment(server.EquipmentSlot.Offhand) && Entity.runCommand("playsound random.break @a[r=5] ~~~");
    get_Container.setEquipment(server.EquipmentSlot.Offhand, get_Shield);
    if (get_info <= 10)
        Entity.dimension.spawnParticle("提示图标:碎盾警示", server.Vector.add({ x: 0, y: 1, z: 0 }, Entity.getHeadLocation()), new server.MolangVariableMap());
}
