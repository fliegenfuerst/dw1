class GUI{
	constructor(){
		
	}
	getRegisteredDigiTable(digi, index){
		let table = document.createElement("TABLE");
		let row = document.createElement("TR");
		let col = document.createElement("TD");
		col.colspan="2";
		col.innerText = `registered digimon no. ${index}`
		table.appendChild(row);
		row.appendChild(col);
		table.appendChild(this.getDigiStatsRow("name", digi.name));
		table.appendChild(this.getDigiStatsRow("id", digiStatsNames[digi.id]));
		table.appendChild(this.getDigiStatsRow("hp", digi.hp));
		table.appendChild(this.getDigiStatsRow("mp", digi.mp));
		table.appendChild(this.getDigiStatsRow("off", digi.off));
		table.appendChild(this.getDigiStatsRow("def", digi.def));
		table.appendChild(this.getDigiStatsRow("spd", digi.spd));
		table.appendChild(this.getDigiStatsRow("brn", digi.brn));
		table.appendChild(this.getMoveStatRow(digi.move1Id , 1, digi.id));
		table.appendChild(this.getMoveStatRow(digi.move2Id , 2, digi.id));
		table.appendChild(this.getMoveStatRow(digi.move3Id , 3, digi.id));
		//table.appendChild(this.getDigiStatsRow("", digi.);
		return table;
	}
	getMoveStatRow(moveId, index, digiId){
		let name = "";
		if(moveId == 255){
			name = "empty";
		}else{
			//name = moveNames[moveId];
			name = digimonStats[digiId].moves[moveId-0x2E];
		}
		return this.getDigiStatsRow("move " + index, name);
	}
	getDigiStatsRow(statName, value){
		let row = document.createElement("TR");
		let col = document.createElement("TD");
		col.innerText = statName;
		row.appendChild(col);
		col = document.createElement("TD");
		col.innerText = value;
		row.appendChild(col);
		return row;
	}
}