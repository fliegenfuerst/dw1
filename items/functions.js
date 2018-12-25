var items = [];
var maps = [];
var digiItems = [];
var digiMaps = [];
var type = null;
var value = null;
var hash = "";
function showBattleItemDropDown() {
	hash = "";
	window.location.hash = "";
	document.getElementById("mapView").className = "hidden";
	document.getElementById("itemView").className = "hidden";
	document.getElementById("mapDropdown").className = "hidden";
	document.getElementById("itemDropdown").className = "hidden";
	document.getElementById("digiMapDropdown").className = "hidden";
	document.getElementById("digiItemDropdown").className = "";

}
function showBattleMapDropDown() {
	hash = "";
	window.location.hash = "";
	document.getElementById("mapView").className = "hidden";
	document.getElementById("itemView").className = "hidden";
	document.getElementById("mapDropdown").className = "hidden";
	document.getElementById("itemDropdown").className = "hidden";
	document.getElementById("digiMapDropdown").className = "";
	document.getElementById("digiItemDropdown").className = "hidden";

}

function showItemDropDown() {
	hash = "";
	window.location.hash = "";
	document.getElementById("mapView").className = "hidden";
	document.getElementById("itemView").className = "hidden";
	document.getElementById("mapDropdown").className = "hidden";
	document.getElementById("digiMapDropdown").className = "hidden";
	document.getElementById("digiItemDropdown").className = "hidden";
	document.getElementById("itemDropdown").className = "";

}

function showMapDropDown() {
	hash = "";
	window.location.hash = "";
	document.getElementById("mapView").className = "hidden";
	document.getElementById("itemView").className = "hidden";
	document.getElementById("itemDropdown").className = "hidden";
	document.getElementById("digiMapDropdown").className = "hidden";
	document.getElementById("digiItemDropdown").className = "hidden";
	document.getElementById("mapDropdown").className = "";

}

function showMap(mapName) {
	window.location.hash = "map/" + mapName;
	document.getElementById("mapDropdown").className = "hidden";
	document.getElementById("itemView").className = "hidden";
	document.getElementById("mapView").className = "";

	var tempMap = maps[mapName].meta;

	document.getElementById("mapName").innerHTML = tempMap.Name + "<br>" + tempMap.Description;
	var list = "<tr><td>itemName</td><td>probability</td><td>location:</td></tr>";

	var obj = null;
	//			<div class="item" onclick="loadMap()">
	for (var i = 0; i < maps[mapName].length; i++) {

		list += '<tr><td>';
		list += maps[mapName][i].item + "</td><td>" + maps[mapName][i].chance + "</td><td>" + maps[mapName][i].LocationX + "x," + maps[mapName][i].LocationY + "y</td>";
		list += '</tr>';

	}
	document.getElementById("mapList").innerHTML = list;

	var obj = digiData.filter(function(obj) {
		return obj.map === mapName;
	});
	//alert(obj[0]);
	if (obj[0] !== undefined) {

		list = "<tr><td>Digimon</td><td>Item</td><td>Probability</td><td>HP</td><td>MP</td><td>OFF</td><td>DEF</td><td>SPD</td><td>BRN</td><td>Bits</td></tr>";

		for (var j = 0; j < obj.length; j++) {

			list += '<tr><td>';
			list += obj[j].name + "</td><td>" + obj[j].item + "</td><td>" + obj[j].chance + "%</td><td>" + obj[j].hp + "</td><td>" + obj[j].mp + "</td><td>" + obj[j].off + "</td><td>" + obj[j].def + "</td><td>" + obj[j].spd + "</td><td>" + obj[j].brn + "</td><td>" + obj[j].bits + "</td>";

		}
		document.getElementById("mapListDigi").innerHTML = list;

	} else {
		document.getElementById("mapListDigi").innerHTML = "";

	}
	document.getElementById("map").innerHTML = '<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/' + mapName + '.TFS/' + mapName + '.TFS.0.PNG"/>';

}

function showItemMap(mapName) {
	document.getElementById("itemMap").innerHTML = '<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/' + mapName + '.TFS/' + mapName + '.TFS.0.PNG"/>';
}

function showItem(itemName) {
	window.location.hash = "item/" + itemName;
	document.getElementById("itemDropdown").className = "hidden";
	var tempItem = items[itemName];
	document.getElementById("itemView").className = "";
	document.getElementById("mapView").className = "hidden";

	document.getElementById("itemName").innerHTML = itemName;
	var list = "<tr><td>Region</td><td>Description</td><td>Location</td><td>Probability</td></tr>";
	var obj = null;
	//			<div class="item" onclick="loadMap()">
	for (var i = 0; i < items[itemName].length; i++) {
		/*obj = metaData.filter(function ( obj ) {
		 return obj.InternalName === items[itemName][i].map;
		 })[0];*/
		obj = maps[items[itemName][i].map].meta;
		list += '<tr class="button" onclick="showItemMap(';
		list += "'" + items[itemName][i].map + "'";
		list += ')"><td>';
		list += obj.Name + "</td><td>" + obj.Description + "</td><td>" + items[itemName][i].LocationX + "x," + items[itemName][i].LocationY + "y</td><td>"+items[itemName][i].chance + "</td>";
		list += '</tr>';

	}
	document.getElementById("itemMap").innerHTML = '<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/' + items[itemName][0].map + '.TFS/' + items[itemName][0].map + '.TFS.0.PNG"/>';

	//alert('<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/'+items[itemName][i].map+'.TFS/'+items[itemName][i].map+'.TFS.0.PNG"/>');

	document.getElementById("itemList").innerHTML = list;
	//document.getElementById("itemMap").innerHTML='<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/'+data[q].map+'.TFS/'+data[q].map+'.TFS.0.PNG"/>';

}
function showDigiItem(itemName) {
	window.location.hash = "item/" + itemName;
	document.getElementById("digiItemDropdown").className = "hidden";
	var tempItem = items[itemName];
	document.getElementById("itemView").className = "";
	document.getElementById("mapView").className = "hidden";

	document.getElementById("itemName").innerHTML = itemName;
	var list = "<tr><td>Region</td><td>Description</td><td>Digimon</td><td>Probability</td><td>HP</td><td>MP</td><td>OFF</td><td>DEF</td><td>SPD</td><td>BRN</td><td>Bits</td></tr>";
	var obj = null;
	//			<div class="item" onclick="loadMap()">
	for (var i = 0; i < digiItems[itemName].length; i++) {
		obj = digiMaps[digiItems[itemName][i].map].meta;
		/*obj = metaData.filter(function ( obj ) {
		 return obj.InternalName === items[itemName][i].map;
		 })[0];*/
		//obj = digiMaps[digiItems[itemName][i].map].meta;
		list += '<tr class="button" onclick="showItemMap(';
		list += "'" + digiItems[itemName][i].map + "'";
		list += ')"><td>';
		list += obj.Name + "</td><td>" + obj.Description + "</td><td>"+digiItems[itemName][i].name + "</td><td>" + digiItems[itemName][i].chance + "%</td><td>" + digiItems[itemName][i].hp + "</td><td>" + digiItems[itemName][i].mp + "</td><td>" + digiItems[itemName][i].off + "</td><td>" + digiItems[itemName][i].def + "</td><td>" + digiItems[itemName][i].spd + "</td><td>" + digiItems[itemName][i].brn + "</td><td>" + digiItems[itemName][i].bits + "</td>";
		list += '</tr>';
		
		
		
		
		

	}
	document.getElementById("itemMap").innerHTML = '<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/' + digiItems[itemName][0].map + '.TFS/' + digiItems[itemName][0].map + '.TFS.0.PNG"/>';

	//alert('<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/'+items[itemName][i].map+'.TFS/'+items[itemName][i].map+'.TFS.0.PNG"/>');

	document.getElementById("itemList").innerHTML = list;
	//document.getElementById("itemMap").innerHTML='<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/'+data[q].map+'.TFS/'+data[q].map+'.TFS.0.PNG"/>';

}
function alphabeticalI(a, b) {
	var A = a.item.toLowerCase();
	var B = b.item.toLowerCase();
	if (A < B) {
		return -1;
	} else if (A > B) {
		return 1;
	} else {
		return 0;
	}
}

function byMap(a, b) {
	var A = a.map.toLowerCase();
	var B = b.map.toLowerCase();
	if (A < B) {
		return -1;
	} else if (A > B) {
		return 1;
	} else {
		return 0;
	}
}

function byName(a, b) {
	var A = a.Name.toLowerCase();
	var B = b.Name.toLowerCase();
	if (A < B) {
		return -1;
	} else if (A > B) {
		return 1;
	} else {
		return 0;
	}
}

function byChance(a, b) {
	var A = parseInt(a.chance.substr(0, a.chance.length - 1));
	var B = parseInt(b.chance.substr(0, b.chance.length - 1));
	if (A > B) {
		return -1;
	} else if (A < B) {
		return 1;
	} else {
		return 0;
	}
}

function loadData() {
	data.sort(byChance);
	data.sort(alphabeticalI);

	var tempName = "";
	var div = null;
	var attr = null;
	for (var q = 0; q < data.length; q++) {
		if (tempName !== data[q].item) {
			tempName = data[q].item;
			div = document.createElement("DIV");
			attr = document.createAttribute("onclick");
			attr.value = "showItem('" + data[q].item + "')";
			div.setAttributeNode(attr);
			div.innerHTML = data[q].item;
			div.className = "button";
			//+'<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/'+data[q].map+'.TFS/'+data[q].map+'.TFS.0.PNG"/>';

			document.getElementById("itemDropdown").appendChild(div);
			items[tempName] = [];
			items[tempName].push(data[q]);
		} else {//current item is the same as the last
			items[tempName].push(data[q]);
		}
	}

	data.sort(byMap);
	tempName = "";
	div = null;
	attr = null;
	var preview = null;
	for (var q = 0; q < data.length; q++) {
		if (tempName !== data[q].map) {
			tempName = data[q].map;

			var obj = metaData.filter(function ( obj ) {
			return obj.InternalName === tempName;
			})[0];
			maps[tempName] = [];
			maps[tempName].meta = obj;
			maps[tempName].push(data[q]);
			div = document.createElement("DIV");
			attr = document.createAttribute("onclick");
			attr.value = "showMap('" + data[q].map + "')";
			div.setAttributeNode(attr);

			div.className = "button tooltip";
			div.innerHTML = '<div class="map">' + obj.Name + ' - ' + obj.Description + '</div><br>';
			//+'<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/'+data[q].map+'.TFS/'+data[q].map+'.TFS.0.PNG"/>';

			preview = document.createElement("DIV");
			preview.className = "tooltiptext";
			preview.innerHTML = '<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/' + data[q].map + '.TFS/' + data[q].map + '.TFS.0.PNG"/>';
			div.appendChild(preview);

			document.getElementById("mapDropdown").appendChild(div);
		} else {//current item is the same as the last
			maps[tempName].push(data[q]);
		}
	}
	digiData.sort(byChance);
	digiData.sort(alphabeticalI);
	//fill digimon item list
	tempName = "";
	div = null;
	attr = null;
	for (var q = 0; q < digiData.length; q++) {
		if (tempName !== digiData[q].item) {
			tempName = digiData[q].item;
			div = document.createElement("DIV");
			attr = document.createAttribute("onclick");
			attr.value = "showDigiItem('" + digiData[q].item + "')";
			div.setAttributeNode(attr);
			div.innerHTML = digiData[q].item;
			div.className = "button";
			//+'<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/'+data[q].map+'.TFS/'+data[q].map+'.TFS.0.PNG"/>';

			document.getElementById("digiItemDropdown").appendChild(div);
			digiItems[tempName] = [];
			digiItems[tempName].push(digiData[q]);
		} else {//current item is the same as the last
			digiItems[tempName].push(digiData[q]);
		}
	}
	
//		document.getElementById("digiItemDropdown").appendChild(div);
	
	digiData.sort(byMap);
	//fill digimon map list
	
	tempName = "";
	div = null;
	attr = null;
	preview = null;
	for (var q = 0; q < digiData.length; q++) {
		if (tempName !== digiData[q].map) {
			tempName = digiData[q].map;

			var obj = metaData.filter(function ( obj ) {
			return obj.InternalName === tempName;
			})[0];
			digiMaps[tempName] = [];
			digiMaps[tempName].meta = obj;
			digiMaps[tempName].push(digiData[q]);
			div = document.createElement("DIV");
			attr = document.createAttribute("onclick");
			attr.value = "showMap('" + digiData[q].map + "')";
			div.setAttributeNode(attr);

			div.className = "button tooltip";
			div.innerHTML = '<div class="map">' + obj.Name + ' - ' + obj.Description + '</div><br>';
			//+'<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/'+digiData[q].map+'.TFS/'+digiData[q].map+'.TFS.0.PNG"/>';

			preview = document.createElement("DIV");
			preview.className = "tooltiptext";
			preview.innerHTML = '<img src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/' + digiData[q].map + '.TFS/' + digiData[q].map + '.TFS.0.PNG"/>';
			div.appendChild(preview);
document.getElementById("digiMapDropdown").appendChild(div);
		} else {//current item is the same as the last
			digiMaps[tempName].push(digiData[q]);
		}
	}	
		


		showItemDropDown();
	//getMapDropDown();
	//alert(items["Digimushrm"].length);
	//checkHash();
}

function start() {
	loadData();
}/*
	setInterval(function() {

		if ((window.location.hash != hash)) {
			hash = window.location.hash;
			checkHash();
		}
	}, 100);
}

function checkHash() {
	if (!window.location.hash) {
		//alert(window.location.hash);
		//showItemDropDown();
	} else {
		hash = window.location.hash.substr(1, window.location.hash.length);
		type = window.location.hash.split("/");
		value = type[1];
		type = type[0].substr(1, type[0].length);
		switch(type) {
			case "map":
				//showMap(value);
				break;
			case "item":
				//showItem(value);
				break;
		}
	}
}*/