## 新功能

- 自动食用: 支持食物、药水，通过命令或 GUI 开关，不支持与自动丢三叉戟同时使用 (https://github.com/xBoyMinemc/FlashFakePlayerPack/pull/107 https://github.com/xBoyMinemc/FlashFakePlayerPack/pull/114 https://github.com/xBoyMinemc/FlashFakePlayerPack/issues/104)

## 优化

- `假人帮助` 命令: 增加了清晰度 (https://github.com/xBoyMinemc/FlashFakePlayerPack/pull/108)
- 初始化提示: 进入世界时增加了如何获取帮助信息的提示，并将该部分提示从行为包描述中移除 (https://github.com/xBoyMinemc/FlashFakePlayerPack/pull/108)
- 模块未加载提示: `@minecraft/server-gametest` 未加载时，增加提示 (https://github.com/xBoyMinemc/FlashFakePlayerPack/commit/58968c7b4327c6e280310f16587a7a09139c6750)

## 代码质量

- 清理了 Backpack2Barrel 和 command 模块中的注释代码，修复类型问题，提高可维护性 (https://github.com/xBoyMinemc/FlashFakePlayerPack/commit/d7936ae206fc5c66d28b1b5156924ef0edb95466)