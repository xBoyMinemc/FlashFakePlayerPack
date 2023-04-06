import QRCode from './QRCode/index.js'
import QRErrorCorrectLevel from './QRCode/QRErrorCorrectLevel.js'

    
const black = `1`
const white = `0`
//const black = `\x1b[48;2;0;0;0m  \x1b[49m`
//const white = `\x1b[48;2;255;255;255m  \x1b[49m`


const toCell = function (isBlack) {
    return isBlack ? black : white;
}

const repeat = function (color) {
    return {
        times: function (count) {
            return new Array(count).join(color);
        }
    };
}
const fill = function(length, value) {
    let arr = new Array(length);
    for (let i = 0; i < length; i++) {
        arr[i] = value;
    }
    return arr;
}

const error = QRErrorCorrectLevel.L

const generate = function (input, opts, cb) {
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }

    let qrcode = new QRCode(-1, this.error);
    qrcode.addData(input);
    qrcode.make();

    let output = '';
    if (opts && opts.small) {
        let BLACK = true, WHITE = false;
        let moduleCount = qrcode.getModuleCount();
        let moduleData = qrcode.modules.slice();

        let oddRow = moduleCount % 2 === 1;
        if (oddRow) {
            moduleData.push(fill(moduleCount, WHITE));
        }

        let platte= {
            WHITE_ALL: '\u2588',
            WHITE_BLACK: '\u2580',
            BLACK_WHITE: '\u2584',
            BLACK_ALL: ' ',
        };

        let borderTop = repeat(platte.BLACK_WHITE).times(moduleCount + 3);
        let borderBottom = repeat(platte.WHITE_BLACK).times(moduleCount + 3);
        output += borderTop + '#'; //无关

        for (let row = 0; row < moduleCount; row += 2) {
            output += platte.WHITE_ALL;

            for (let col = 0; col < moduleCount; col++) {
                if (moduleData[row][col] === WHITE && moduleData[row + 1][col] === WHITE) {
                    output += platte.WHITE_ALL;
                } else if (moduleData[row][col] === WHITE && moduleData[row + 1][col] === BLACK) {
                    output += platte.WHITE_BLACK;
                } else if (moduleData[row][col] === BLACK && moduleData[row + 1][col] === WHITE) {
                    output += platte.BLACK_WHITE;
                } else {
                    output += platte.BLACK_ALL;
                }
            }

            output += platte.WHITE_ALL + '#'; //
        }

        if (!oddRow) {
            output += borderBottom;
        }
    } else {
        let border = repeat(white).times(qrcode.getModuleCount() + 3);

        output += border + '#';//91
        qrcode.modules.forEach(function (row) {
            output += white;
            output += row.map(toCell).join(''); 
            output += white + '#'; //对头 小
        });
        output += border;
    }

    if (cb) cb(output);
    else console.log(output);
}

const setErrorLevel = function (error) {
    this.error = QRErrorCorrectLevel[error] || this.error;
}

export default { error, generate, setErrorLevel };
