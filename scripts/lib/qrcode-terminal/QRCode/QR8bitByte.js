import QRMode from './QRMode.js'


export default class QR8bitByte {
	constructor(data){
		this.mode = QRMode.MODE_8BIT_BYTE;
		this.data = data;
	}

	getLength() {
		return this.data.length;
	}
	
	write(buffer) {
		for (var i = 0; i < this.data.length; i++) {
			// not JIS ...
			buffer.put(this.data.charCodeAt(i), 8);
		}
	}
}
