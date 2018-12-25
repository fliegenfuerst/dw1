function getChampionsC() {
	var div = '';
	var pathU = '';
	//common: sukamon, vademon
	div = div + "<div><label for='championC'>Champion Digimon</label></div><div>";
	div = div + "<select onchange='listClickedC(this.id)' name='Champion Digimon' id='championC' class='digimon digimonList' >";
	for (var i = 0; i < dChampion.length; i++) {
		div = div + "<option class='digimon' style='background-image: url(";
		div = div + '"./img/'+dChampion[i].name+'.gif")';
		div = div + "'>" + dChampion[i].name + "</option>";
	}
	div = div + "</select></div>";
	document.getElementById('chaLiC').innerHTML = '';
	document.getElementById('chaLiC').innerHTML = div;
	getChaC(dChampion[0].name);
}

function getChaC(cha) {
		document.getElementById("championC").style='background-image: url("./img/'+cha+'.gif")';
getRookiesC(cha);
}

function getRookiesC(champion) {
	if (isSpecialEvolution(champion)) {
		document.getElementById('chaReqC').innerHTML = getSpecialOutput(champion);
	} else {
		document.getElementById('chaReqC').innerHTML = Digimons[champion].getEvolutionStats();
	}
	var div = '';
	var pathR = '';
	//common: sukamon
	div = div + "<div><label for='rookiesC'>Rookie Digimon</label></div><div>";
	div = div + "<select onchange='listClickedC(this.id)'name='Rookie Digimon' id='rookieC' class='digimon digimonList'>";
	var ePathR;
	for(var t=0;t<dChampion.length;t++){
		if(dChampion[t].name==champion){
			ePathR=dChampion[t].sources;
		}
	}
	for (var i = 0; i < ePathR.length; i++) {
		div = div + ePathR[i].getOpt();
	}
	div = div + "</select></div>";
	document.getElementById('rooLiC').innerHTML = '';
	document.getElementById('rooLiC').innerHTML = div;
		document.getElementById("championC").style='background-image: url("./img/'+champion+'.gif")';

	
	getStartersC(ePathR[0].name);
}
function getStartersC(rookie) {
		document.getElementById("rookieC").style='background-image: url("./img/'+rookie+'.gif")';
	if (isSpecialEvolution(rookie)) {
		document.getElementById('rooReqC').innerHTML = getSpecialOutput(rookie);
	} else {
		document.getElementById('rooReqC').innerHTML = Digimons[rookie].getEvolutionStats();
	}
	var div = '';
	var pathR = '';
	//common: sukamon
	var ePathR;
	for(var t=0;t<dRookie.length;t++){
		if(dRookie[t].name==rookie){
	 pathR=dRookie[t].sources;
		}
	}
	
	div = div + "<div><label for='starterC'>Starter Digimon</label></div><div>";
	div = div + "<select onchange='listClickedC(this.id)'name='Starter Digimon' id='starterC' class='digimon digimonList' style='background-image: url(";
		div = div + '"./img/'+pathR[0].name.trim()+'.gif")';
		div = div + "'>";
			for (var i = 0; i < pathR.length; i++) {
		div = div + pathR[i].getOpt();
	}	
	div = div + "</select></div>";
	document.getElementById('staLiC').innerHTML = '';
	document.getElementById('staLiC').innerHTML = div;
}

function listClickedC(name) {
	var x = document.getElementById(name).value;
	name=name.substring(0,name.length-1);
	switch(name) {
		case 'rookie':
			getStartersC(x);
			break;
		case 'champion':
			getRookiesC(x);
			break;
	}
}
//-------------------------------------------------------------------------------------------------
function getRookiesRook() {
	var div = '';
	var pathU = '';
	//common: sukamon, vademon
	div = div + "<div><label for='rookie1'>Rookie Digimon</label></div><div>";
	div = div + "<select onchange='listClickedRook(this.id)' name='Rookie Digimon' id='rookie1' class='digimon digimonList' >";
	for (var i = 0; i < dRookie.length; i++) {
		div=div+dRookie[i].getOpt();
	}
	div = div + "</select></div>";
	document.getElementById('rooLiR').innerHTML = '';
	document.getElementById('rooLiR').innerHTML = div;
	getRoo(dRookie[0].name);
}

function getRoo(roo) {
		document.getElementById("rookie1").style='background-image: url("./img/'+roo+'.gif")';
getStartersRook(roo);
}
function getStartersRook(rookie) {
		document.getElementById("rookie1").style='background-image: url("./img/'+rookie+'.gif")';
	if (isSpecialEvolution(rookie)) {
		document.getElementById('rooReqR').innerHTML = getSpecialOutput(rookie);
	} else {
		document.getElementById('rooReqR').innerHTML = Digimons[rookie].getEvolutionStats();
	}
	var div = '';
	var pathR = '';
	//common: sukamon
	var ePathR;
	for(var t=0;t<dRookie.length;t++){
		if(dRookie[t].name==rookie){
	 pathR=dRookie[t].sources;
		}
	}
	
	div = div + "<div><label for='starter1'>Starter Digimon</label></div><div>";
	div = div + "<select onchange='listClickedRook(this.id)'name='Starter Digimon' id='starter1' class='digimon digimonList' style='background-image: url(";
		div = div + '"./img/'+pathR[0].name.trim()+'.gif")';
		div = div + "'>";

	for (var i = 0; i < pathR.length; i++) {
		div = div + pathR[i].getOpt();
	}	
	div = div + "</select></div>";
	document.getElementById('staLiR').innerHTML = '';
	document.getElementById('staLiR').innerHTML = div;
}

function listClickedRook(name) {
	var x = document.getElementById(name).value;
	name=name.substring(0,name.length-1);
	switch(name) {
		case 'rookie':
			getStartersRook(x);
			break;
	}
}