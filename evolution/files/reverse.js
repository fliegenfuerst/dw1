function getUltimatesR() {
	var div = '';
	var pathU = '';
	//common: sukamon, vademon
	div = div + "<div><label for='ultimateR'>Ultimate Digimon</label></div><div>";
	div = div + "<select onchange='listClickedR(this.id)' name='Ultimate Digimon' id='ultimateR' class='digimon digimonList' >";
	for (var i = 0; i < dUltimate.length; i++) {
div=div+dUltimate[i].getOpt();
	}
	div = div + "</select></div>";
	document.getElementById('ultLi').innerHTML = '';
	document.getElementById('ultLi').innerHTML = div;
	getUltR(dUltimate[0]);
}

function getUltR(ult) {
	if(typeof ult === 'object'){
		ult=ult.name;
	}
	if (isSpecialEvolution(ult)) {
		document.getElementById('ultReq').innerHTML = getSpecialOutput(ult);
	} else {
		document.getElementById('ultReq').innerHTML = Digimons[ult].getEvolutionStats();
	}
		document.getElementById("ultimateR").style='background-image: url("./img/'+ult+'.gif")';
getChampionsR(ult);
}
function getChampionsR(ultimate) {
	var div = '';
	var pathR = '';
	//common: sukamon
	div = div + "<div><label for='championR'>Champion Digimon</label></div><div>";
	div = div + "<select onchange='listClickedR(this.id)'name='Champion Digimon' id='championR' class='digimon digimonList'>";
	var ePathR;
	for(var t=0;t<dUltimate.length;t++){
		if(dUltimate[t].name==ultimate){
			ePathR=dUltimate[t].sources;
		}
	}
	for (var i = 0; i < ePathR.length; i++) {
		div = div +ePathR[i].getOpt(); 
	}
	div = div + "</select></div>";
	document.getElementById('chaLi').innerHTML = '';
	document.getElementById('chaLi').innerHTML = div;

	if (isSpecialEvolution(ePathR[0].name)) {
		document.getElementById('chamReq').innerHTML = getSpecialOutput(ePathR[0].name);
	} else {
		document.getElementById('chamReq').innerHTML = Digimons[ePathR[0].name].getEvolutionStats();
	}
	getRookiesR(ePathR[0].name);
}

function getRookiesR(champion) {
	if (isSpecialEvolution(champion)) {
		document.getElementById('chamReq').innerHTML = getSpecialOutput(champion);
	} else {
		document.getElementById('chamReq').innerHTML = Digimons[champion].getEvolutionStats();
	}
	var div = '';
	var pathR = '';
	//common: sukamon
	div = div + "<div><label for='rookiesR'>Rookie Digimon</label></div><div>";
	div = div + "<select onchange='listClickedR(this.id)'name='Rookie Digimon' id='rookieR' class='digimon digimonList'>";
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
	document.getElementById('rooLi').innerHTML = '';
	document.getElementById('rooLi').innerHTML = div;
		document.getElementById("championR").style='background-image: url("./img/'+champion+'.gif")';

	if (isSpecialEvolution(ePathR[0].name)) {
		document.getElementById('rooReq').innerHTML = getSpecialOutput(ePathR[0].name);
	} else {
		document.getElementById('rooReq').innerHTML = Digimons[ePathR[0].name].getEvolutionStats();
	}
//	alert(ePathR[0].name);
	getStartersR(ePathR[0].name);
}
function getStartersR(rookie) {
	if (isSpecialEvolution(rookie)) {
		document.getElementById('rooReq').innerHTML = getSpecialOutput(rookie);
	} else {
		document.getElementById('rooReq').innerHTML = Digimons[rookie].getEvolutionStats();
	}
		document.getElementById("rookieR").style='background-image: url("./img/'+rookie+'.gif")';
	var div = '';
	var pathR = '';
	//common: sukamon
	var ePathR;
	for(var t=0;t<dRookie.length;t++){

//	alert(rookie+" "+dRookie[t].name);
//alert(dRookie[t].sources[0].name);
		if(dRookie[t].name==rookie){
	 pathR=dRookie[t].sources;
//	 alert(dRookie[t].sources[0].name);
	 break;
		}
	}

//				alert(dRookie[t].sources[0].name+"huii");

	div = div + "<div><label for='starterR'>Starter Digimon</label></div><div>";
	div = div + "<select onchange='listClickedR(this.id)'name='Starter Digimon' id='starterR' class='digimon digimonList' style='background-image: url(";
		div = div + '"./img/'+pathR[0].name.trim()+'.gif")';
		div = div + "'>";

	for (var i = 0; i < pathR.length; i++) {
		div = div + pathR[i].getOpt();
	}	
	div = div + "</select></div>";
	document.getElementById('staLi').innerHTML = '';
	document.getElementById('staLi').innerHTML = div;
}

function listClickedR(name) {
	var x = document.getElementById(name).value;
	name=name.substring(0,name.length-1);
	switch(name) {
		case 'rookie':
			getStartersR(x);
			break;
		case 'champion':
			getRookiesR(x);
			break;
		case 'ultimate':
			getUltR(x);
			break;
	}
}