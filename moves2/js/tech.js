function DigimonW2(name, hp, info, region, spawnType) {
	this.name = name;
	this.hp = hp;
	this.info = info;
	this.region = region;
	this.spawnType = spawnType;
	this.techs = [];
	this.bits = "";
	this.item = "";
	this.note = "";
}

function DigimonT(name, tech) {
	this.name = name;
	this.techs = [];
	if (tech !== "") {
		this.techs.push(tech);
	}
	this.radius = "";
	this.typus = "";
	this.level = "";
	this.speciality_1 = "";
	this.speciality_2 = "";
	this.speciality_3 = "";
	this.drop_item = "";
	this.drop_chance = "";
	this.finisher = "";
	this.moves = [];
	this.getJSObj = function() {
		//	alert("reached");
		var jStr = "";
		jStr = jStr + "tempDigi=new DigimonT('" + this.name + "','');";
		jStr = jStr + "tempDigi.moves=[";
		var teSr = "";
		//		alert(this.moves[0].nameE);
		for (var j = 0; j < this.moves.length; j++) {
			teSr = teSr + "'" + this.moves[j].nameE + "'";
			if (j < this.moves.length - 1) {
				teSr = teSr + ",";
			}
		}
		teSr = teSr + "];";
		jStr = jStr + teSr;
		jStr = jStr + "tempDigi.setValues('" + this.radius + "','" + this.typus + "','" + this.level + "','" + this.speciality_1 + "','" + this.speciality_2 + "','" + this.speciality_3 + "','" + this.drop_item + "','" + this.drop_chance + "','" + this.finisher + "');";
		jStr = jStr + "tDigimonG.push(tempDigi);";
		return (jStr);
	};
	this.setValues = function(rad, typ, lev, sp1, sp2, sp3, item, iProb, fin) {
		this.radius = rad;
		this.typus = typ;
		this.level = lev;
		this.speciality_1 = sp1;
		this.speciality_2 = sp2;
		this.speciality_3 = sp3;
		this.drop_item = item;
		this.drop_chance = iProb;
		this.finisher = fin;

	};
	this.getTechDiv = function() {
		//display details for a selected technique of a selected digimon
		var tempDiv = "", div, table, attr;

		div = document.createElement("TABLE");
		attr = document.createAttribute("id");
		table = document.createElement("TBODY");
		attr.value = this.name;
		div.setAttributeNode(attr);
		div.className="digiData";
		tempDiv = tempDiv + "<tr><td class='dName'>" + this.name + "</td>";
		tempDiv = tempDiv + "<td><img style='float:right;' class='digImg' src='./img/"+this.name+".gif'";
		tempDiv = tempDiv + ' height="48" width="48">';
		tempDiv = tempDiv + "</td></tr>";
		tempDiv = tempDiv + "<tr><td><table style='width:100%;'><tr><td>Typus:</td><td>" + this.typus + "</td></tr><tr><td>Level:</td><td>" + this.level + "</td></tr><tr><td>Radius:</td><td>" + this.radius + "</td></tr></table></td>";
		tempDiv = tempDiv + "<td><table><tr><td>Nature 1:</td><td class='"+this.speciality_1.toLowerCase()+"'>" + this.speciality_1 + "</td></tr><tr><td>Nature 2:</td><td class='"+this.speciality_2.toLowerCase()+"'>" + this.speciality_2 + "</td></tr><tr><td>Nature 3:</td><td class='"+this.speciality_3.toLowerCase()+"'>" + this.speciality_3 + "</td></tr><tr></table></td></tr>";
		tempDiv = tempDiv + "<tr><td><table><tr><td>Finisher:</td></tr><tr><td>" + this.finisher + "</td></tr></table></td></tr>";
switch(lang){
	case "ger":
		tempDiv = tempDiv + "<tr><td>Techniken:</td><td>Wahrscheinlichk.:</td></tr>";
	
	break;
	case "eng":
		tempDiv = tempDiv + "<tr><td>Moveset:</td><td>Probability:</td></tr>";	
	break;
}
		//     tempDiv = tempDiv + "<tr><td>" + this.moves.length + "</td><td>" + this.techs.length + "</td></tr>";
		for (var t = 0; t < this.moves.length; t++) {
			//alert(this.speciality_1.toLowerCase()+" "+this.moves[t].typeE.toLowerCase());
			if(this.moves[t].done){
				tempDiv = tempDiv + '<tr><td class="tech on" onclick="getDDDigi('+this.moves[t].getNameE()+ ',true)">' + this.moves[t].getName() + '</td>';
			}else{
			tempDiv = tempDiv + '<tr><td class="tech '+this.moves[t].typeE.toLowerCase()+'" onclick="getDDDigi(';
				tempDiv = tempDiv + this.moves[t].getNameE();
				tempDiv = tempDiv + ',true)">' + this.moves[t].getName() + '</td>';
				
			}
			if (this.speciality_1.toLowerCase() == this.moves[t].typeE.toLowerCase()) {
				tempDiv = tempDiv + "<td>" + this.moves[t].ch1 + "% chance</td>";
			} else if (this.speciality_2.toLowerCase() == this.moves[t].typeE.toLowerCase()) {
				tempDiv = tempDiv + "<td>" + this.moves[t].ch2 + "% chance</td>";
			} else if (this.speciality_3.toLowerCase() == this.moves[t].typeE.toLowerCase()) {
				tempDiv = tempDiv + "<td>" + this.moves[t].ch3 + "% chance</td>";
			}
			tempDiv = tempDiv + "</tr>";
			if (t == this.moves.length - 1) {
				table.innerHTML = tempDiv;
				document.getElementById("demo").innerHTML = "";
				div.appendChild(table);
				document.getElementById("demo").appendChild(div);
			}
		}
	};
}

function Tech(typeG, typeNumber, nameE, strength, mp, rangeG, effectG) {
	this.done=false;
	this.typeG = typeG;
	this.typeE = "";
	this.typeNumber = typeNumber;
	this.nameE = nameE;
	this.nameE2 = "";
	this.nameG = "";
	this.strength = strength;
	this.mp = mp;
	this.rangeG = rangeG;
	this.rangeE = "";
	this.effectG = effectG;
	this.effectE = "";
	this.comment = "";
	this.tip = "";
	this.digimon = [];
	this.digimonW = [];
	this.ch1 = "";
	this.ch2 = "";
	this.ch3 = "";
	this.getNameE=function(){
		return "'"+this.nameE+"'";
	}
	this.getName=function(){
		switch(lang){
			case "eng":
			return this.nameE;
			break;
			case "ger":
			return this.nameG;
			break;
		}
	}
		this.getType=function(){
		switch(lang){
			case "eng":
			return "Type: "+this.typeE;
			break;
			case "ger":
			return "Typ: "+this.typeG;
			break;
		}
	}
			this.getEffect=function(){
		switch(lang){
			case "eng":
			return "Effect: "+this.effectE;
			break;
			case "ger":
			return "Efffekt: "+this.effectG;
			break;
		}
	}
			this.getRange=function(){
		switch(lang){
			case "eng":
			return "Range: "+this.rangeE;
			break;
			case "ger":
			return "Reichweite: "+this.rangeG;
			break;
		}
	}
				this.getStrength=function(){
		switch(lang){
			case "eng":
			return "Power: "+this.strength;
			break;
			case "ger":
			return "Stärke: "+this.strength;
			break;
		}
	}
	
	this.getJSObj = function() {
		//	alert("reached");
		var jStr = "";
		//				"tempTech=new TechGerman2('" + this.typeG + "','" + this.typeNumber + "','" + this.nameE + "','" + this.strength + "','" + this.mp + "','" + this.rangeG + "','" + this.effectG + "');";
		jStr = jStr + "tempTech=new TechGerman2('" + this.typeG + "','" + this.typeNumber + "','" + this.nameE + "','" + this.strength + "','" + this.mp + "','" + this.rangeG + "','" + this.effectG + "');";
		jStr = jStr + "tempTech.digimon=[";
		var teSr = "";

		//		alert(this.moves[0].nameE);
		for (var g = 0; g < this.digimon.length; g++) {
			teSr = teSr + "'" + this.digimon[g] + "'";
			if (g < this.digimon.length - 1) {
				teSr = teSr + ",";
			}
		}
		teSr = teSr + "];";
		jStr = jStr + teSr;

		teSr = "";
		for (var j = 0; j < this.digimonW.length; j++) {
			teSr = teSr + "digiW=new DigimonW2(";
			teSr = teSr + "'" + this.digimonW[j].name + "','" + this.digimonW[j].hp + "','";
			if (this.digimonW[j].info !== '') {
				teSr = teSr + this.digimonW[j].info + "','";
			} else {
				teSr = teSr + "','";
			}
			teSr = teSr + this.digimonW[j].region + "','" + this.digimonW[j].spawnType + "');";

			if (this.digimonW[j].bits !== '') {
				teSr = teSr + "digiW.bits='";
				teSr = teSr + this.digimonW[j].bits;
				teSr = teSr + "';";
			}
			if (this.digimonW[j].item !== '') {
				teSr = teSr + "digiW.item='";
				teSr = teSr + this.digimonW[j].item;
				teSr = teSr + "';";
			}
			if (this.digimonW[j].note !== '') {
				teSr = teSr + "digiW.note='";
				teSr = teSr + this.digimonW[j].note;
				teSr = teSr + "';";
			}/*
			 if (this.digimonW[j].info !== '') {
			 teSr = teSr + "digiW.info='";
			 teSr = teSr + this.digimonW[j].info;
			 teSr = teSr + "';";
			 }*/
			teSr = teSr + "tempTech.digimonW.push(digiW);";
		}
		jStr = jStr + teSr;

		jStr = jStr + "tempTech.setValues('" + this.typeE + "','" + this.nameE + "','" + this.nameG + "','" + this.rangeE + "','" + this.effectE + "','" + this.ch1 + "','" + this.ch2 + "','" + this.ch3 + "');";
		jStr = jStr + "tempTech.comment='" + this.comment + "';";
		jStr = jStr + "tempTech.tip='" + this.tip + "';";
		jStr = jStr + "tOs2.push(tempTech);";
		return (jStr);
	};
	this.setValues = function(typE, namE, namG, ranE, effE, ch1, ch2, ch3) {
		this.typeE = typE;
		this.nameE2 = namE;
		this.nameG = namG;
		this.rangeE = ranE;
		this.effectE = effE;
		this.ch1 = ch1;
		this.ch2 = ch2;
		this.ch3 = ch3;
	};
	this.getDigiDiv = function(digi) {
		//load digimon, wild digimon and tech info from technique dropdown
		var tempDiv = "", div, table, attr;
		div = document.createElement("DIV");
		attr = document.createAttribute("id");
		table = document.createElement("TBODY");
		attr.value = this.nameE;
		div.setAttributeNode(attr);
		tempDiv = tempDiv + "<div class='techInfo'>";
		tempDiv = tempDiv + "<div>Name: " + this.getName() + "</div>";
		tempDiv = tempDiv + "<div>" + this.getType() + "</div>";
		tempDiv = tempDiv + "<div>" + this.getStrength() + "</div>";
		tempDiv = tempDiv + "<div>MP: " + this.mp + "</div>";
		tempDiv = tempDiv + "<div>" + this.getRange() + "</div>";
		tempDiv = tempDiv + "<div>" + this.getEffect() + "</div>";
		switch(lang){
			case "ger":
		
		tempDiv = tempDiv + "<div>Lernwahrscheinlichkeit: </div>";
		tempDiv = tempDiv + "<div>Natur 1: " + this.ch1 + "% </div>";
		tempDiv = tempDiv + "<div>Natur 2: " + this.ch2 + "% </div>";
		tempDiv = tempDiv + "<div>Natur 3: " + this.ch3 + "%</div>";
		break;
		case "eng":
				tempDiv = tempDiv + "<div>Learning Probability: </div>";
		tempDiv = tempDiv + "<div>Nature 1: " + this.ch1 + "% </div>";
		tempDiv = tempDiv + "<div>Nature 2: " + this.ch2 + "% </div>";
		tempDiv = tempDiv + "<div>Nature 3: " + this.ch3 + "%</div>";
		break;
		}
		
		tempDiv = tempDiv + "<div>Comment: " + this.comment + "</div>";
		tempDiv = tempDiv + "<div>Tip: " + this.tip + "</div>";
		tempDiv = tempDiv + "</div><hr style='color: #000000'><div class='wildDigis'>";
		
	
		try {
			if (!digi) {
				var tempDiv2 = "";
				for (var a = 0; a < this.digimon.length; a++) {
					tempDiv2 = tempDiv2 + "<div class='tech' onclick='getDDTech";
					tempDiv2 = tempDiv2 + '("'+this.digimon[a]+'")';
					tempDiv2 = tempDiv2 + "'><img class='digImg' src='./img/"+this.digimon[a]+".gif' height='32' width=''32'>" + this.digimon[a] + "</div>";
				}
				document.getElementById("demo").innerHTML = tempDiv2;
			}

			for (var t = 0; t < this.digimonW.length; t++) {
				tempDiv = tempDiv + "<div>" + this.digimonW[t].name + " (" + this.digimonW[t].region + "/";
				tempDiv = tempDiv + this.digimonW[t].spawnType;
				if (this.digimonW[t].info !== "") {
					if (this.digimonW[t].info !== undefined) {
						tempDiv = tempDiv + " - " + this.digimonW[t].info;
					}
				}
				if (this.digimonW[t].hp !== ("" || undefined)) {
					tempDiv = tempDiv + ", HP: " + this.digimonW[t].hp;
				}
				if (this.digimonW[t].bits !== ("" || undefined)) {
					tempDiv = tempDiv + ", Bits: " + this.digimonW[t].bits + "";
				}
				if (this.digimonW[t].item !== ("" || undefined)) {
					tempDiv = tempDiv + ", Item: " + this.digimonW[t].item + "";
				}
				if (this.digimonW[t].note !== ("")) {
					if (this.digimonW[t].note !== undefined) {
						tempDiv = tempDiv + ", Note: " + this.digimonW[t].note + ")";
					} else {
						tempDiv = tempDiv + ")";
					}
				} else {
					tempDiv = tempDiv + ")";
				}
				tempDiv = tempDiv + "</div>";
				if (t == this.digimonW.length - 1) {
					tempDiv = tempDiv + "</div>";
					div.innerHTML = tempDiv;
					document.getElementById("demo2").innerHTML = "";
					//div.appendChild(table);
					document.getElementById("demo2").innerHTML=div.innerHTML;
					
				}
			}
		} catch (err) {
		}
	};
}