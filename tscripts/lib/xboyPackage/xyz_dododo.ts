const ops = {}
ops['+'] = '+'
ops['-'] = '-'

/**
 * @example
 * console.log(xyz_dododo('1 2 3')); // [ 1, 2, 3 ]
 *
 * console.log(xyz_dododo('~30 5 4', [1, 0, 0])) // [ 31, 5, 4 ]
 *
 * console.log(xyz_dododo('~-30 5 4', [1, 25, 0])) // [ 29, 5, 4 ]
 */
export function xyz_dododo(xyz:(`${number}`|`~${number}`/*|`~+${number}`|`~-${number}`*/)[],playerLocation=[0,0,0]) : number[] {
    // 遍历分割后的数组
    return xyz.map((part, index) => {
        // 否则直接解析为数字
        if (!part.startsWith('~')) {
            const data = Number(part);
            if (Number.isFinite(data))
                return data;
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

        if (op === '+')
            return playerLocation[index] + data;
        if (op === '-')
            return playerLocation[index] - data;

        return data;
    });
}

/*
function xyz_dododo_test() {
    // 示例用法
    const result1 = xyz_dododo(["1", "1", "1"]);
    console.log(result1); // [ 1, 1, 1 ]

    const result2 = xyz_dododo(["1.1", "-20" ,"-30.2"]);
    console.log(result2); // [ 1.1, -20, -30.2 ]


    const result3 = xyz_dododo(["~2.2", "~+3" ,"~-4.5"]);
    console.log(result3); // [ 102.2, 203, -295.5 ]

    // @ts-expect-error
    const result4 = xyz_dododo(["~/2.2", "~+0" ,"~-"]);
    console.log(result4);
    // throw new Error(['x','y','z'][index] + ' not a number')
    // ^
    //
    // Error: x not a number
}
*/