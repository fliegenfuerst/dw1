//Special requirements:
/*
-guardromon passing for factorial town
-otamamon /shogungeko /cherrymon for misty trees
-talk to yuramon
-multiple instances (nani/ogre)
-drimogemon talk to get to meramon
-drimogemon talk to open tunnel
-list of digimon who can trigger frigimon

//special item vendors:
-Numemon/Mojyamon/Devimon/Mamemon

//important triggers

-obtain fishing rod	->seadramon, kuwagamon, kabuterimon
-talk to yuramon after seeing invisible bridge
-talk to yuramon after palmon recruit
-talk to tanemon after rainplant pick up
-talk to tanemon after getting rainplant (triggers on day 15)
-first coelamon encounter
-see digibridge being rebuilt from tropical side	-> coelamon & ninjamon

-talk to digging drimogemon to start 5 day timer
-reduce 5day timer by helping drimogemon
-talk to drimogemon in southern cave again after meramon fight



//-----------------visual
-tool tip for list of digimon that can trigger frigimon

-RED MEANS FIGHT GREEN MEANS TALK/TASK

-OPEN PATH TO MT PANORAMA_: BEAT MERAMON
-OPEN PATH TO FOOT OF MT PANORAMA_: TALK TO DRIMOGEMON AFTER BEATING MERAMON

meramon+centarumon/meramon+drimogemon/walking through great canyon, freezeland, misty trees, gear savanna

TALK TRIGGER LIST "YES YES NO"

-

see strange markings on vademon screen	USE MAP VERSIONS OF



beat meramon and talk to drimogemon ->wait 3 days

digimon to fight (in groups -> use separate borders and map image to signify the different fights


LEOMONSTONE

-obtain fishing rod	->seadramon, kuwagamon, kabuterimon



*/
//---------------------------------------------------------------------------------------------------------------------------------------



//					var str='<div><table><tr><td>HP</td><td>'+digimon.HP+'</td></tr><tr><td>MP</td><td>'+digimon.MP+'</td></tr><tr><td>OFF</td><td>'+digimon.Offense+'</td></tr><tr><td>DEF</td><td>'+digimon.Defense+'</td></tr><tr><td>SPD</td><td>'+digimon.Speed+'</td></tr><tr><td>BRN</td><td>'+digimon.Brains+'</td></tr></table></div>';


var done=[];
var recruitBin="000000000000000000000000000000000000000000000000000000000";
var recruiteables=[];
var prosperityPoints=0;
var naniCounter=0;
function getRecTrigger(trigger){
	return digimon.filter(function(obj) {
		return obj.name === trigger;
	})[0];
}
function checkRequirement(digi){
    var obj=null;
    var recTrigger=null;
    if(digi.prosperityTrigger<=prosperityPoints){
	    if(digi.recruitTriggerOr.length==0&&digi.recruitTriggerAnd.length==0){
	        return true;
	    }else{
	        recTrigger=digi.recruitTriggerAnd;
	        if (recTrigger.length > 0) { 
	            for(var r=0;r<recTrigger.length;r++){
	                obj=getRecTrigger(recTrigger[r]);
	                if(!obj.recruited){
	                    return false;
	                }
	            }
	            return true;
	        }else if(digi.recruitTriggerOr.length > 0) {
	            recTrigger=digi.recruitTriggerOr;
	            for(var r=0;r<recTrigger.length;r++){
	                obj=getRecTrigger(recTrigger[r]);
	                if(obj.recruited){
	                    return true;
	                }
	            }
	            return false;
	        }
	        else{
	        	obj=getRecTrigger(recTrigger);
	            if(obj.recruited){
	                return true;
	            }
	            else{
	            	return false;
	            }
	        }
	    }
	}
}
function getEnemyStats(digi){
	var data='<div class="stats"><table>';
	data+='<tr><td class="firstCellStats"><b>'+digi.name+'</b></td></td><td></tr>'
	data+='<tr><td>';
	data+='<table><tr><td class="firstCellStats">HP</td><td class="numberCell">'+digi.hp+'</td></tr><tr><td class="firstCellStats">MP</td><td class="numberCell">'+digi.mp+'</td></tr>';
	data+='<tr><td class="firstCellStats">OFF</td><td class="numberCell">'+digi.off+'</td></tr><tr><td class="firstCellStats">DEF</td><td class="numberCell">'+digi.def+'</td>';
	data+='</tr><tr><td class="firstCellStats">SPD</td><td class="numberCell">'+digi.spd+'</td></tr><tr><td class="firstCellStats">BRN</td><td class="numberCell">'+digi.brn+'</td></tr>';
	data+='</table></td>';
	data+='<td>';
	data+='<table class="moves">';
	data+='<tr><td class="firstCellMoves">Move</td><td class="numberCell">Probability</td></tr>';
	for(var i=0;i<digi.moves.length;i++){
		data+='<tr><td class="firstCellMoves">'+digi.moves[i].name+'</td><td class="numberCell">'+digi.moves[i].chance+'%</td></tr>';
	}
	if(digi.finisher!==""){
		data+='<tr><td class="firstCellMoves">'+digi.finisher+'</td><td class="numberCell">(finisher)</td></tr>';
	}
	data+='</table></td></tr>';
	if(digi.item!==""){
		data+='<tr><td><b>drops item:</b></td><td class="numberCell">'+digi.item+' ('+digi.dropChance+'% chance)</td></tr>';
	}
	data+='<tr><td><b>bits:</b></td><td class="numberCell">'+digi.bits+'</td></tr>';
	data+='</table></div>';
	return data;
}
function start(){
    prosperityPoints=countProsperityPoints();
	var inventory={};
	var bits=0;
    var list="";
    var changed=false;
    if(digimon[0].recruited){
		for(var i=0;i<digimon.length;i++){
	        if(digimon[i].recruited){
		        if(!checkRequirement(digimon[i])){
		        	digimon[i].recruited=false;
		        	changed=true;
		        }else{
		        	var t;
		        	for(var f=0;f<digimon[i].enemies.length;f++){
		        		t=digimon[i].enemies[f];
			        	if(t!==undefined&&t.item!==""){
							bits+=t.bits;
				        	if(inventory[t.item]==undefined){
								inventory[t.item]=1;
				        	}else{
								inventory[t.item]++;
				        	}
			        	}
		        	}
					list+='<div class="recruitment done"><input class="recruited" type="checkbox" name="checkbox" id="'+digimon[i].name+'" onclick="checkBoxClick(this);" checked>';
					list+='<div class="name">'+digimon[i].name+'</div></div>';
		        }
	        }else if(digimon[i].trigger=="None"||checkRequirement(digimon[i])){
				list+=getRecruitmentDetails(digimon[i]);
			}
		}
		if(changed){
	        start();
	    }
    }else{
    	list+=getRecruitmentDetails(digimon[0]);
    }
    prosperityPoints=countProsperityPoints();
    document.getElementById("prosperityPoints").innerHTML=prosperityPoints;
    document.getElementById("recruitmentList").innerHTML=list;
	document.getElementById("inventory").innerHTML=JSON.stringify(inventory).replace(/"/g,'').replace(/{/g,'').replace(/}/g,'').replace(/,/g,', ').replace(/:/g,': ');
	document.getElementById("bits").innerHTML="bits: "+bits;
	save();
}
function countProsperityPoints(){
	var points=0;
	var naniCounter=0;
	for(var i=0;i<digimon.length;i++){
		if(digimon[i].recruited){
			if(digimon[i].name.indexOf("Nanimon")>-1){
			    naniCounter++;
			}else{
				points+=digimon[i].prosperityPoints;
			}
		}
	}
	if(naniCounter>4){
		points++;
	}
	return points;
}
function getRecruitmentDetails(digimon){
	var list="";
	list+='<div class="recruitment">';
	list+='<div><input class="recruited" type="checkbox" name="checkbox" id="'+digimon.name+'" onclick="checkBoxClick(this);">';
	list+='<span class="name">'+digimon.name+'</span>';
	for(var f=0;f<digimon.fight;f++){
		list+='<img src="./img/battle.png" width="22">';
	}
	list+='</div>';
	list+='<div class="left"><div><table class="dataTable">';
	if(digimon.angemonTip!==""){
		list+='<tr><td class="firstCell"><b>Hint:</b></td><td>'+digimon.angemonTip+'</td></tr>';
	}
	if(digimon.trigger!=="None"){
		list+='<tr><td class="firstCell"><b>trigger:</b></td><td>'+digimon.trigger+'</td></tr>';
	}
	list+='<tr><td class="firstCell"><b>region:</b></td><td>'+digimon.region+' - '+digimon.location+'</td></tr>';
	list+='<tr><td class="firstCell"><b>requirement:</b></td><td>'+digimon.requirement+'</td></tr>';
	list+='<tr><td class="firstCell"><b>unlocks:</b></td><td>'+digimon.unlocks+'</td></tr>';
	list+='</table></div>';
	for(var e=0;e<digimon.enemies.length;e++){
		list+=getEnemyStats(digimon.enemies[e]);
	}
	list+='</div><div class="mapContainer"><div>';
	for(var i=0;i<digimon.maps.length;i++){
		list+='<img class="map" src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/' + digimon.maps[i] + '.TFS/' + digimon.maps[i] + '.TFS.0.PNG"/>';
	}
	list+='<img class="map" src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/' + digimon.recruitMap + '.TFS/' + digimon.recruitMap + '.TFS.0.PNG"/></div></div>';
//list+='<div class="mapContainer"><div><img class="map" src="https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/' + digimon.recruitMap + '.TFS/' + digimon.recruitMap + '.TFS.0.PNG"/></div></div>';

	list+='</div>';
	return list;
}
function checkBoxClick(cb) {
	var boost = 0;
	var obj = digimon.filter(function(obj) {
        return obj.name === cb.id;
    })[0];
	if (cb.checked) {
		obj.recruited=true;
		ret=true;
		start();
	}else{
		obj.recruited=false;
		ret=false;
		if(cb.id=="Agumon"){
			prosperityPoints=0;
			for(var d=0;d<digimon.length;d++){
				digimon[d].recruited=false;
			}
		}
	start();
	}
	return ret;
}
function binToRecruitables(){
	for(var i=0;i<57;i++){
	    if(recruitBin.charAt(i)=="1"){
	        digimon[i].recruited=true;
	    }else{
	        digimon[i].recruited=false;
	    }
	}
}
function recruitablesToBin(){
	recruitBin="";
	for(var i=0;i<57;i++){
	    if(digimon[i].recruited){
	        recruitBin+="1";
	    }else{
	        recruitBin+="0";
	    }
	}
}
function load(){
	checkHash();
	start();
}
function save(){
	recruitablesToBin();
	localStorage.digimon=binTo64(recruitBin);
	setHash();
}
function setHash(){
	window.location.hash="!"+binTo64(recruitBin);
}
var currentHash;
function checkHash(){
	if(window.location.hash!==currentHash){
		if(window.location.hash==""){
			setHash();
		}else{
			currentHash=window.location.hash;
			var part=window.location.hash.substr(2,window.location.hash.length);
			if(part!==""){
				var tempBin=urlToBin(part);
				if(tempBin.length==57){
					recruitBin=tempBin;
					binToRecruitables();
				}else{
					recruitBin=urlToBin(localStorage.digimon);
					binToRecruitables();
				}
				save();
				start();
			}
		}
	}
}
var chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
function binTo64(bin){
	bin=bin.substring(bin.indexOf(1),bin.length);
	var result="";
	var index=bin.length;
	var current;
	for(var index=bin.length;index>0;index-=6){	
		if(index>6){
			current=bin.substring(index-6,index);
			result=chars.charAt(parseInt(current, 2))+result;
		}else{
			current=bin.substring(0,index);
			result=chars.charAt(parseInt(current, 2))+result;
			if(result=="0000000000"){
				return "0";
			}else{
				return reduceZeros(result);
			}
		}
	}
}
function urlToBin(url){
	url=restoreZeros(url);
	var result="";
	for(var i=0;i<url.length;i++){
		result+=("000000"+chars.indexOf(url.charAt(i)).toString(2)).substr(-6);
		if(i==url.length-1){
			return ("000000000000000000000000000000000000000000000000000000000"+result).substr(-57);
		}
	}
}
function intToUrl(int){
	var digit;
	var residual = int;
	var result = '';
	while (true) {
		digit = residual % 64;
		result = chars.charAt(digit) + result;
		residual = Math.floor(residual / 64);
		if (residual == 0)
			break;
	}
	return result;
}

function urlToInt(url){
	var int=0;
	for(var h=0;h<url.length;h++){
		int+=chars.indexOf(url[h])*Math.pow(64,(url.length-h-1));
	}
	return int;
}
function reduceZeros(str){
	var outPut="";
	var count=0;
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)=="0"){
			count++;
		}else{
			if(count>0){
				outPut+=getZeros(count);
				count=0;
			}
			outPut+=str.charAt(i);
		}
		if(i==str.length-1){
			if(count>0){
				outPut+=getZeros(count);
			}
			return outPut;
		}
	}
}
function getZeros(count){
	if(count>2){
		return "~"+count;
	}else{
		if(count==1){
			return "0";
		}else{
			return "00"
		}
	}
}
function restoreZeros(str){
	var outPut="";
	if(str.indexOf("~")>-1){
		var parts=str.split("~");
		outPut+=parts[0];
		for(var i=1;i<parts.length;i++){
			var count=parts[i].substring(0,1);
			for(var j=0;j<count;j++){
				outPut+="0";
				if(j==count-1){
					outPut+=parts[i].substring(1,parts[i].length);
				}
			}
			if(i==parts.length-1){
				return outPut;
			}
		}
	}else{
		return str;
	}
}

/*
tyrannomon	KODA07.MAP
ogremon
leomon (cutscene, gym, drill tunnel)	GIAS07	GIAS09	TUNN03_2
angemon		ICSA06
nanimon		OMOC08	KODA07	LEOM01	FACT11B	OGRE03
monzaemon	OMOC08


ADJUST MOVE PERCENTAGES

check all nanimon recruits before giving 1PP

add extra maps 'if leomon || angemon || tyrannomon || monzaemon || drimogemon || meramon

add toytown gear map for monzaemon recruit

vegiemon file city top map
*/