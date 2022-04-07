class MemoryCardModel{
	constructor(memcardData){
		this.readBuffer = new Uint8Array(memcardData);
		this.viewer = new DataView(memcardData);
	}
	readByte(offset){
		return this.viewer.getUint8(offset);//this.readBuffer[offset];
	}
	readShort(offset){
		return this.viewer.getUint16(offset, true);
	}
	readString(offset, length){
		let name = "";
    	let character;
    	for(let i = -1; i < length; i += 2) {
    		character = this.readByte(offset+i);
    		if(character == 64) {
    			name += " ";
    		}else if(character != 0){
    			if(character > 128) {
        			name += String.fromCharCode(character - 32);
    			}else {
    				name += String.fromCharCode(character - 31);
    			}
    		}
    	}
    	return name;
	}
	calculateChecksum(){
		let checksum = 0;
		for(let i = 0x2200; i < 0x26FC; i++){
			checksum += this.readBuffer[i];
		}
		for(let i = 0x2700; i < 0x30FF; i++){
			checksum += this.readBuffer[i];
		}
		return checksum.toString(16).padStart(8,'0').match(/../g).reverse().join``;
	}
	getRegisteredDigimonData(){
		let offset = 0x2700;
		let temp = this.readShort(offset);
		let digi = {};
		let digis = [];
		if(temp == 0){
			return [];
		}else{
			while(temp != 0){
				digi = {}
				digi.hp = temp;
				digi.mp = this.readShort(offset + 0x2);
				digi.off = this.readShort(offset + 0x4);
				digi.def = this.readShort(offset + 0x6);
				digi.spd = this.readShort(offset + 0x8);
				digi.brn = this.readShort(offset + 0xA);
				digi.name = this.readString(offset + 0xE, 14);
				digi.id = this.readByte(offset + 0x1C);
				console.log("id: " + digi.id);
				digi.move1Id = this.readByte(offset + 0x1D) & 0xFF;
				digi.move2Id = this.readByte(offset + 0x1E);
				digi.move3Id = this.readByte(offset + 0x1F);
				digis.push(digi);
				offset += 0x40;
				temp = this.readShort(offset);
				console.log(temp);
				console.log(offset);
			}
		}
		return digis;
	}
}