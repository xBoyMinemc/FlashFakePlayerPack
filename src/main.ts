import { world } from '@minecraft/server';

world.afterEvents.worldLoad.subscribe(() => import('@/main/main'));
// 2025-5-8  1.21.80 又出问题 通过延迟到 worldLoad 事件解决
// 2024-11-4 这里是为了解决一个莫名其妙的1.21.50触发的bug，当包加载的时候，加载world的部分方法会崩。而异步可以解决