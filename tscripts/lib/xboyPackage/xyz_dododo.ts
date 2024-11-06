// 将1 1 1解析为x y z
// 将1.1 -20 -30.2解析为x y z
// 将~1 ~1 ~1解析为x y z，解析时假设xyz上的~分别是一个全局变量
// 解析字符串为x, y, z

const ops = {}
ops['+'] = '+'
ops['-'] = '-'

export function xyz_dododo(xyz:string[],playerLocation=[0,0,0]) : number[] {
    // 初始化x, y, z
    let new_xyz = [0,0,0]

    // 遍历分割后的数组
    xyz.forEach((part, index) => {
        // 否则直接解析为数字
        if (!part.startsWith('~')) {
            const data = Number(part);
            if (Number.isFinite(data))
                return new_xyz[index] = data;
            throw new Error(['x', 'y', 'z'][index] + ' not a number');
        }

        let data: number|string = part.slice(1) // 去掉~
        let op = ops[data[0]] // 存在风险
        // 如果以~开头，假设它是一个全局变量
        if (op === undefined) {
            op = '+'
        } else {
            data = data.slice(1) // 去掉运算符
        }

        data = Number(data)
        if(!Number.isFinite(data))
            throw new Error(['x','y','z'][index] + ' not a number')


        if(op === '+')
            data += playerLocation[index]
        if(op === '-')
            data -= playerLocation[index]

        new_xyz[index] = data
    });

    return new_xyz;
}

function xyz_dododo_test() {
    // 示例用法
    const result1 = xyz_dododo(["1", "1", "1"]);
    console.log(result1); // [ 1, 1, 1 ]

    const result2 = xyz_dododo(["1.1", "-20" ,"-30.2"]);
    console.log(result2); // [ 1.1, -20, -30.2 ]


    const result3 = xyz_dododo(["~2.2", "~+3" ,"~-4.5"]);
    console.log(result3); // [ 102.2, 203, -295.5 ]


    const result4 = xyz_dododo(["~/2.2", "~+0" ,"~-"]);
    console.log(result4);
    // throw new Error(['x','y','z'][index] + ' not a number')
    // ^
    //
    // Error: x not a number
}