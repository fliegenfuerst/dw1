var tOs2 = [], tDigimonG = [];
var toggle = false;
var lang ="eng";
document.getElementById("english").className="lang on";
var lastHash, hash, topicSub;
var tM;
tM = new TechMap();
function setLang(language){
lang=language.substring(0,3);
//document.getElementsByClassName("lang").className="lang";


	var x = document.getElementsByClassName("lang");
	var i;
	var tC=0;
	for ( i = 0; i < x.length; i++) {
		x[i].className = "lang";
	}


document.getElementById(language).className="lang on";


//displayResults();
fillTechTable();
contentChanged(window.location.hash);
//updateTech();
}

function executeFunctions() {
	loadData();
	sortArrays();
	document.getElementById("mySave").innerHTML = JSON.stringify(tM.tec);
	/*var start = new Date().getTime();
	 var end = new Date().getTime();
	 var time = end - start;
	 alert('Execution time: ' + time);
	 */
	fillTechTable();
	displayResults();
	if (!window.location.hash) {
		hash = '#digimon/Agumon-00_00_00_00_00_00_00';
		contentChanged(hash);
	}
	setInterval(function() {
		if ((window.location.hash != hash) && (lastHash != window.location.hash)) {
			hash = window.location.hash;
			contentChanged(hash);
		}
	}, 100);
}

function sortArrays() {
	tOs2.sort(alphabeticalT3);
	tOs2.sort(alphabeticalT2);
	for (var z = 0; z < tDigimonG.length; z++) {
		tDigimonG[z].moves.sort(alphabeticalT3);
		tDigimonG[z].moves.sort(alphabeticalT2);
	}
}

function displayResults() {
	document.getElementById("techDropdown").innerHTML = "";
	document.getElementById("digiDropdown").innerHTML = "";
	document.getElementById("techDropdownE").innerHTML = "";
	//populate digimon dropdown list from global array
	for (var q = 0; q < tDigimonG.length; q++) {
		var div = document.createElement("DIV");
		var attr = document.createAttribute("onclick");
		attr.value = "getDDTech('" + tDigimonG[q].name + "')";
		div.setAttributeNode(attr);
		div.className = "tech";
		div.innerHTML = "<img class='digImg' src='./img/" + tDigimonG[q].name + ".gif' height='32' width=''32'>" + tDigimonG[q].name;
		document.getElementById("digiDropdown").appendChild(div);
	}
	for (var i = 0; i < tOs2.length; i++) {
		var divT = document.createElement("DIV");
		var attrT = document.createAttribute("onclick");
		attrT.value = "getDDDigi('" + tOs2[i].nameE + "')";
		divT.setAttributeNode(attrT);
		if (tOs2[i].done) {
			divT.className = "tech on";
		} else {
			divT.className = "tech " + tOs2[i].typeE.toLowerCase();
		}
		divT.innerHTML = tOs2[i].nameG;
		document.getElementById("techDropdown").appendChild(divT);
		divT = document.createElement("DIV");
		attrT = document.createAttribute("onclick");
		attrT.value = "getDDDigi('" + tOs2[i].nameE + "')";
		divT.setAttributeNode(attrT);
		if (tOs2[i].done) {

			divT.className = "tech on";
		} else {
			divT.className = "tech " + tOs2[i].typeE.toLowerCase();
		}
		divT.innerHTML = tOs2[i].nameE;
		document.getElementById("techDropdownE").appendChild(divT);
	}
}

function getDDDigi(techN, togo) {
	var digi = false;
	if(togo==undefined){
		digi=false;
		}else{
			digi=true;
		}
	//toggle=togo;
	//alert(togo);
		if (toggle) {
			toggle = false;
			digi = true;
		} 
if(!digi){
			window.location.hash = "tech/" + techN + "" + binToHex(document.getElementById("mySave").innerHTML);
			hash = window.location.hash;
		}
		for (var r = 0; r < tOs2.length; r++) {
			if (techN.toLowerCase() == tOs2[r].nameE.toLowerCase()) {
				tOs2[r].getDigiDiv(digi);
			}
		}
	}


function getDDTech(digiN) {
	document.getElementById("demo2").innerHTML = "";
	for (var r = 0; r < tDigimonG.length; r++) {
		if (digiN.toLowerCase() == tDigimonG[r].name.toLowerCase()) {
			tDigimonG[r].getTechDiv();
			toggle = true;
			getDDDigi(tDigimonG[r].moves[0].nameE);
		}
	}
	window.location.hash = "digimon/" + digiN + "" + binToHex(document.getElementById("mySave").innerHTML);
	hash = window.location.hash;

}

function contentChanged(hashP) {
	lastHash = hashP;
	window.location.hash = hashP;
	hashP = hashP.substring(1, hashP.length);
	//manage navigation
	topicSub = hashP;

	if (topicSub.split("-")[1] !== undefined) {
		var temp2 = topicSub.split("-")[1];
	if(topicSub.split("-").length>2){
		temp2 = topicSub.split("-")[2];
	}	
		bStr = hexToBin(temp2);
		tM.tec = JSON.parse(bStr);
		updateTech();
		displayResults();
	}
	topicSub = topicSub.split("-")[0];
	topicSub = topicSub.split('/');
	//check if navigation element has childern
	switch (topicSub[0]) {
		case 'digimon':
		if(topicSub[1]=="H"){
			
			getDDTech("H-Kabuterimon");
		}else{
			
			getDDTech(topicSub[1]);
		}
			break;
		case 'tech':
			getDDDigi(topicSub[1].replace("%20", " "));
			break;
	}
}

function fillTechTable() {
	var table = document.getElementById("techTable");
	var count = 0;
	for (var r = 0, n = table.rows.length; r < n; r++) {
		switch (r) {
			case 0:
				count = 32;
				break;
			case 1:
				count = 8;
				break;
			case 2:
				count = 0;
				break;
			case 3:
				count = 16;
				break;
			case 4:
				count = 40;
				break;
			case 5:
				count = 48;
				break;
			case 6:
				count = 24;
				break;
		}
		
		for (var c = 1, m = table.rows[r].cells.length; c < m; c++) {
			table.rows[r].cells[c].innerHTML = tOs2[count + c - 1].getName();
			var attr = document.createAttribute("onclick");
			attr.value = "setTech(" + r + "," + c + "," + count + ");";
			table.rows[r].cells[c].setAttributeNode(attr);
			attr = document.createAttribute("arrayNo");
			attr.value = count + c - 1;
			table.rows[r].cells[c].setAttributeNode(attr);
		}
	}
}

function setTech(te, no, co) {
	var table = document.getElementById("techTable");
	if (tM.tec[te][no - 1] === 0) {
		tM.tec[te][no - 1] = 1;
		if (table.rows[te].cells[no].className != "myTech on") {
			table.rows[te].cells[no].className += " on";
			tOs2[co + no - 1].done = true;
		}
	} else {
		tM.tec[te][no - 1] = 0;
		if (table.rows[te].cells[no].className == "myTech on") {
			table.rows[te].cells[no].className = table.rows[te].cells[no].className.substring(0, table.rows[te].cells[no].className.length - 3);
			tOs2[co + no - 1].done = false;
		}
	}
	displayResults();
	document.getElementById("mySave").innerHTML = JSON.stringify(tM.tec);
	var test = JSON.stringify(tM.tec);
	
	document.getElementById("techCount").innerHTML="your current number of moves is: "+test.split('1').length-1;
	test = test.substring(2, test.length - 2);
	test = test.split("],[");
	var hStr = "";
	for (var z = 0; z < 7; z++) {
		test[z] = test[z].replace(/,/g, "");
		test[z] = binaryToHex(test[z]);
		hStr = hStr + test[z];
		if (z < 6) {
			hStr += "_";
		}
	}
	hash = window.location.hash.split("-")[0] + "-" + hStr;

	window.location.hash = hash;
	contentChanged(hash);
}

function TechMap() {
	this.tec = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]];
}

function loadTechMap() {
	var temp = document.getElementById("techInp").value;
	tM.tec = JSON.parse(temp);

	document.getElementById("techCount").innerHTML="your current number of moves is: "+temp.split('1').length-1;
	document.getElementById("techInp").value = "enter your saved Data then click OK";
	updateTech();
	displayResults();
	hStr = binToHex(temp);
		if(window.location.hash.split("-").length>2){
			hash = window.location.hash.split("-")[0]+"-"+window.location.hash.split("-")[1]+""+ hStr;
	}else{
	
	hash = window.location.hash.split("-")[0]+"" + hStr;
		
	}window.location.hash = hash;
}

function updateTech() {
	var x = document.getElementsByClassName("myTech");
	var i;
	var tC=0;
	for ( i = 0; i < x.length; i++) {
		x[i].className = "myTech";
	}
	for (var u = 0; u < tM.tec.length; u++) {
		for (var v = 0; v < tM.tec[u].length; v++) {
			if (tM.tec[u][v] != 0) {
				setTech2(u, v + 1);
				tC++;
			}
		}
	}
	document.getElementById("techCount").innerHTML="your current number of moves is: "+tC;
	hash = window.location.hash;
}

function setTech2(te, no) {
	var table = document.getElementById("techTable");
	tOs2[table.rows[te].cells[no].getAttributeNode("arrayNo").value].done = true;
	table.rows[te].cells[no].className += " on";
	document.getElementById("mySave").innerHTML = JSON.stringify(tM.tec);
}