var movs=[];
for(var mo=0;mo<moves.length;mo++){
	movs[moves[mo].name]=moves[mo];
}
function GUIManager(){
	var movesLearned=[];
	var specialities=["FIRE","AIR","ICE","MECH","EARTH","BATTLE","FILTH"];
	var starterMoves={"FIRE":"Spit Fire","AIR":"Static Elect","ICE":"Tear Drop","MECH":"Metal Sprinter","EARTH":"Poison Claw","BATTLE":"Sonic Jab","FILTH":"Horizontal Kick"};
	var statNames=["hp","mp","offense","defense","speed","brains"];
	var starterMoves2={"ICE":"Winter Blast","AIR":"Electric Cloud","EARTH":"Poison Powder"};
	var enemyInfo=["worstCaseRaw","map","name","usageChance","drop","bits","hp","mp","offense","defense","speed","brains"];
	var drops=[];
	for(var s=0;s<stats.length;s++){
		drops[stats[s].name]=stats[s].drop;
	}
	var moveList=[];
	this.moveUrl="00000000000000000000000000000000000000000000000000000000";
	var curSpec="FIRE";
	moveList["FIRE"]=[];
	for(var k=0;k<moves.length;k++){
		if(moves[k].speciality!==curSpec){
			curSpec=moves[k].speciality;
			moveList[curSpec]=[];
		}
		moveList[curSpec].push({name:moves[k].name,index:k});
	}
	var sortOptions=["Map","MoveChance","HP","Offense","WorstCase","Item","DropChance","Bits"];
	this.partnerTable=idGet("partner");
	this.moveTable=idGet("moveTable");
	this.partner={};
	this.partner.name=idGet("partnerName");
	this.partner.sprite=idGet("partnerSprite");
	this.partner.model=idGet("partnerModel");
	this.partner.type=idGet("partnerType");
	this.partner.level=idGet("partnerLevel");
	this.partner.specialities=[];
	this.partner.specialities[0]=idGet("partnerSpec1");
	this.partner.specialities[1]=idGet("partnerSpec2");
	this.partner.specialities[2]=idGet("partnerSpec3");
	this.partner.hp=idGet("partnerHP");
	this.partner.def=idGet("partnerDefense");
	this.partner.props=["type","level"];
	this.partner.moveList=idGet("partnerMoves");
	this.enemyDiv=idGet("regular");
	this.moveTitle=idGet("moveTitle");
	this.moveDetailDiv=idGet("moveDetails");
	this.enemyListOptions=idGet("enemyOptions");
	this.brainList=idGet("brainList");
	this.sortType="Map";
	this.curEnemyModel=[];
	this.hideOneShot=false;
	this.setSort=function(value){
		this.sortType=value;
		this.getEnemyDiv();
	};
	this.setMovesLearned=function(url){
		if(url.length<56){
			var leftover=56-url.length;
			var addOn="";
			for(var l=0;l<leftover;l++){
				addOn+="0";
			}
			this.moveUrl=addOn+url;
		}else{
			this.moveUrl=url;
		}
		this.showMoveTable();
	};
	this.showMoveTable=function(){
	    this.moveTable.innerHTML="";
		var moveRow=null;
		var index=0;
		for(var i=0;i<7;i++){
		    moveRow=getElement("span",specialities[i],"row "+specialities[i].toLowerCase(),false);
		    moveRow.appendChild(getElement("span","title-"+specialities[i],"cell",specialities[i]));
		    for(var j=0;j<8;j++){
		        isLearned=this.moveUrl.charAt(index);
		        moveRow.appendChild(tb.getElement("span","move-"+i+"-"+j,"cell move isLearned"+isLearned,moveList[specialities[i]][j].name,toggleMove));
		        index++;
		    }
		    this.moveTable.appendChild(moveRow);
		}
	};
	this.toggleMove=function(cell){
			var i=cell.id.split("-");
			var index=(i[1]*8)+parseInt(i[2]);
			var current=cell.className.split("isLearned");
			cell.className=current[0];
			current=current[1];
			current=Number(!parseInt(current));
		    this.moveUrl=this.moveUrl.substr(0, index) + current + this.moveUrl.substr(index+1);
		    hM.setHashLearn(this.moveUrl);
		    cell.className+=" isLearned"+current;
		    this.getPartnerMoves(this.currentDigimon);
	};
	this.showPartner=function(partner){
		var sel=idGet("raisables");
		for(var i = 0, j = sel.options.length; i < j; ++i) {
	        if(sel.options[i].innerHTML === partner) {
	           sel.selectedIndex = i;
	           break;
	        }
	    }
		this.moveDetailDiv.innerHTML="";
		partner=stats.find(x => x.name===partner);
		this.currentDigimon=partner;
		for(var p=0;p<this.partner.props.length;p++){
			this.partner[this.partner.props[p]].innerText=partner[this.partner.props[p]];
		}
		for(var sp=0;sp<3;sp++){
			this.partner.specialities[sp].innerText=partner.specialities[sp];
		}
		this.partner.sprite.innerHTML="";
		this.partner.model.innerHTML="";
		this.partner.sprite.appendChild(tb.getImage("img/sprites/"+partner.name+".gif"));
		this.partner.model.appendChild(tb.getImage("img/models/"+partner.name+".gif"));
		this.getPartnerMoves(partner);
		this.showMove(this.currentDigimon.moves[0]);
	};
	this.getPartnerMoves=function(partner){
		var brainArr=[];
		this.partner.moveList.innerHTML="";
		var moveRow=getElement("span",false,"row",false);
		moveRow.appendChild(getElement("span",false,"cell","Type"));
		moveRow.appendChild(getElement("span",false,"cell","MoveName"));
		moveRow.appendChild(getElement("span",false,"cell","Fight"));
		moveRow.appendChild(getElement("span",false,"cell","Brains"));
		this.partner.moveList.appendChild(moveRow);
		var move=null;
		var starter;
		if(this.currentDigimon.moves.indexOf(starterMoves[this.currentDigimon.specialities[0]])==-1){
			starter=starterMoves2[this.currentDigimon.specialities[0]];
		}else{
			starter=starterMoves[this.currentDigimon.specialities[0]];
		}
		for(var m=0;m<partner.moves.length;m++){
			move=moves.find(x => x.name===partner.moves[m]);
			moveRow=getElement("span",false,"row partnerMove "+move.speciality.toLowerCase(),false);
			moveRow.appendChild(getElement("span",false,"cell",move.speciality));
			if(this.moveUrl.charAt(moveList[move.speciality].find(x=>x.name===move.name).index)==0){
				if(starter==move.name){
					moveRow.appendChild(tb.getInput("button",partner.moves[m],showMove,"cell isLearned1"));
				}else{
					moveRow.appendChild(tb.getInput("button",partner.moves[m],showMove,"cell"));
					brainArr.push(getBrainArrEntry(move,partner.specialities));
				}
			}else{
				moveRow.appendChild(tb.getInput("button",partner.moves[m],showMove,"cell isLearned1"));
			}
			moveRow.appendChild(getElement("span",false,"cell alignRight",getLearningChance(move,partner.specialities)));
			moveRow.appendChild(getElement("span",false,"cell alignRight",getBrainLearningChance(move,partner.specialities)));
			this.partner.moveList.appendChild(moveRow);
		}
		/*
		for(var u=1;u<this.partner.moveList.childNodes.length;u++){
			if(this.partner.moveList.childNodes[u].childNodes[1].type=="button"){
				this.partner.moveList.childNodes[u].childNodes[1].click();
				break;
			}
			if(u==this.partner.moveList.childNodes.length-1){

				this.moveTitle.innerText="";
				this.enemyDiv.innerHTML="";
				this.moveDetailDiv.innerHTML="";
			}
		}
		*/
		this.showBrainMoves(brainArr);
	};
	this.showBrainMoves=function(brainArr){
		this.brainList.innerHTML="";
		var nature=brainArr[0].nature;
		var block=false;
		if(brainArr.length>0){
			brainArr=sortSimple(brainArr,"chance").reverse();
			for(var i=0;i<brainArr.length;i++){
				if(brainArr[i].nature==1&&brainArr[i].name==starterMoves[brainArr[i].speciality]){
				}else{
					if(nature!==brainArr[i].nature){
						nature=brainArr[i].nature;
						block=false;
					}
					if(brainArr[i].chance=="0%"){
						block=true;
					}
					if(block){
						this.brainList.appendChild(getElement("div","","warning",i+". "+brainArr[i].name));
					}else{
						this.brainList.appendChild(getElement("div","","",i+". "+brainArr[i].name));
					}
				}
			}
		}
	};
	this.fillCurEnemyModel=function(move){
		var defense=this.partner.def.value;
		this.curEnemyModel=[];
		var curEnemy={};
		var curEnemies=getEnemiesByMove(move);
		for(var e=0;e<curEnemies.length;e++){
			curEnemy={};
			var drop=drops[curEnemies[e].name];
			mapE=maps.find(x=>x.internalName===curEnemies[e].map);
			curEnemy.worstCaseRaw=getWorstCaseRaw(curEnemies[e]);
			curEnemy.map=mapE.name+"<br>"+mapE.description;
			curEnemy.name=curEnemies[e].name;
			curEnemy.movechance=curEnemies[e].moves.find(x => x.name===move).chance;
			curEnemy.usageChance=curEnemy.movechance+"%";
			curEnemy.drop=drop.item+", "+drop.chance+"%";
			curEnemy.item=drop.item;
			curEnemy.dropchance=drop.chance;
			curEnemy.bits=curEnemies[e].bits;
			for(var s=0;s<6;s++){
				curEnemy[statNames[s]]=curEnemies[e].stats[statNames[s]];
			}
			curEnemy.worstcase=Math.floor(curEnemy.worstCaseRaw.value*getStatsFactor(this.partner.def,curEnemy.offense));
			if(curEnemy.worstcase==0){
				curEnemy.worstcase=1;
			}
			this.curEnemyModel.push(curEnemy);
			if(e==curEnemies.length-1){
				this.getEnemyDiv();
			}
		}
	};
	this.getEnemyDiv=function(){
		this.curEnemyModel=sortBy(this.curEnemyModel,this.sortType.toLowerCase());
		var defense=this.partner.def.value;
		var hp=this.partner.hp.value;
		this.moveTitle.innerText=this.currentMove.name;
		this.enemyDiv.innerHTML="";
		var enemyRow=getElement("span",false,"row",false);
		enemyRow.appendChild(getElement("span",false,"cell","WorstCase"));
		enemyRow.appendChild(getElement("span",false,"cell","Region"));
		enemyRow.appendChild(getElement("span",false,"cell","Name"));
		enemyRow.appendChild(getElement("span",false,"cell alignRight","Chance"));
		enemyRow.appendChild(getElement("span",false,"cell alignRight","Item"));
		enemyRow.appendChild(getElement("span",false,"cell alignRight","Bits"));
		enemyRow.appendChild(getElement("span",false,"cell alignRight","HP"));
		enemyRow.appendChild(getElement("span",false,"cell alignRight","MP"));
		enemyRow.appendChild(getElement("span",false,"cell alignRight","Off"));
		enemyRow.appendChild(getElement("span",false,"cell alignRight","Def"));
		enemyRow.appendChild(getElement("span",false,"cell alignRight","Spd"));
		enemyRow.appendChild(getElement("span",false,"cell alignRight","Brn"));
		this.enemyDiv.appendChild(enemyRow);
		/*var enemy=null;
		for(var e=0;e<curEnemies.length;e++){
			//var drop=stats.find(x => x.name==curEnemies[e].name);
			var drop=drops[curEnemies[e].name];
			enemyRow=getElement("span",false,"row",false);
			enemyRow.appendChild(getElement("span",false,"cell",getWorstCase(curEnemies[e])));
			mapE=maps.find(x=>x.internalName===curEnemies[e].map);
			enemyRow.appendChild(getElement("span",false,"cell",mapE.name+"<br>"+mapE.description));
			enemyRow.appendChild(getElement("span",false,"cell",curEnemies[e].name));
			enemyRow.appendChild(getElement("span",false,"cell",curEnemies[e].moves.find(x => x.name===move).chance));
			enemyRow.appendChild(getElement("span",false,"cell",drop.item));
			enemyRow.appendChild(getElement("span",false,"cell",drop.chance));
			enemyRow.appendChild(getElement("span",false,"cell",curEnemies[e].bits));
			for(var s=0;s<6;s++){
				enemyRow.appendChild(getElement("span",false,"cell",curEnemies[e].stats[statNames[s]]));
			}

			this.enemyDiv.appendChild(enemyRow);
		}
		*/
		for(var i=0;i<this.curEnemyModel.length;i++){
			enemyRow=getElement("span",false,"row",false);
			this.curEnemyModel[i].worstcase=Math.floor(this.curEnemyModel[i].worstCaseRaw.value*getStatsFactor(defense,this.curEnemyModel[i].offense));
			if(this.curEnemyModel[i].worstcase==0){
				this.curEnemyModel[i].worstcase=1;
			}
			enemyRow.appendChild(getElement("span",false,"cell",this.curEnemyModel[i].worstcase+", "+this.curEnemyModel[i].worstCaseRaw.move));

			for(var j=1;j<enemyInfo.length;j++){
				if(j>2){
					enemyRow.appendChild(getElement("span",false,"cell alignRight",this.curEnemyModel[i][enemyInfo[j]]));
				}else{
					enemyRow.appendChild(getElement("span",false,"cell",this.curEnemyModel[i][enemyInfo[j]]));
				}
				}
			if(!this.hideOneShot){
				if(this.curEnemyModel[i].worstcase>hp){
					enemyRow.className+=" warning";
				}
				this.enemyDiv.appendChild(enemyRow);
			}else if(this.curEnemyModel[i].worstcase<hp){
				this.enemyDiv.appendChild(enemyRow);
			}
		}
	};
	this.getMoveDetailDiv=function(){
		this.moveDetailDiv.innerHTML="";
		move=this.currentMove;
		var moveRow=getElement("span",false,"row",false);
		moveRow.appendChild(getElement("span",false,"cell","Name:"));
		moveRow.appendChild(getElement("span",false,"cell",move.name));
		this.moveDetailDiv.appendChild(moveRow);
		moveRow=getElement("span",false,"row",false);
		moveRow.appendChild(getElement("span",false,"cell","Type:"));
		moveRow.appendChild(getElement("span",false,"cell",move.speciality));
		this.moveDetailDiv.appendChild(moveRow);
		moveRow=getElement("span",false,"row",false);
		moveRow.appendChild(getElement("span",false,"cell","Power:"));
		moveRow.appendChild(getElement("span",false,"cell",move.power));
		this.moveDetailDiv.appendChild(moveRow);
		moveRow=getElement("span",false,"row",false);
		moveRow.appendChild(getElement("span",false,"cell","MP:"));
		moveRow.appendChild(getElement("span",false,"cell",move.mp*3));
		this.moveDetailDiv.appendChild(moveRow);
		moveRow=getElement("span",false,"row",false);
		moveRow.appendChild(getElement("span",false,"cell","Range:"));
		moveRow.appendChild(getElement("span",false,"cell",move.range));
		this.moveDetailDiv.appendChild(moveRow);
		if(move.effect!==undefined){
			moveRow=getElement("span",false,"row",false);
			moveRow.appendChild(getElement("span",false,"cell","Effect:"));
			moveRow.appendChild(getElement("span",false,"cell",move.effect.type+", "+move.effect.chance+"%"));
			this.moveDetailDiv.appendChild(moveRow);
		}
		moveRow=getElement("span",false,"row",false);
		moveRow.appendChild(getElement("span",false,"cell","Accuracy:"));
		moveRow.appendChild(getElement("span",false,"cell",move.accuracy));
		this.moveDetailDiv.appendChild(moveRow);
		moveRow=getElement("span",false,"row",false);
		moveRow.appendChild(getElement("span",false,"cell","Invincible Time:"));
		moveRow.appendChild(getElement("span",false,"cell",move.invincibleTime));
		this.moveDetailDiv.appendChild(moveRow);
		moveRow=getElement("span",false,"row",false);
		moveRow.appendChild(getElement("span",false,"cell","Learning Chance:"));
		moveRow.appendChild(getElement("span",false,"cell","In Battle"));
		moveRow.appendChild(getElement("span",false,"cell","Brain Training"));
		this.moveDetailDiv.appendChild(moveRow);
		moveRow=getElement("span",false,"row",false);
		moveRow.appendChild(getElement("span",false,"cell","1st Nature:"));
		moveRow.appendChild(getElement("span",false,"cell",move.learningChance[0]));
		moveRow.appendChild(getElement("span",false,"cell",tiers[move.tier-1][0]));
		this.moveDetailDiv.appendChild(moveRow);
		moveRow=getElement("span",false,"row",false);
		moveRow.appendChild(getElement("span",false,"cell","2nd Nature:"));
		moveRow.appendChild(getElement("span",false,"cell",move.learningChance[1]));
		moveRow.appendChild(getElement("span",false,"cell",tiers[move.tier-1][1]));
		this.moveDetailDiv.appendChild(moveRow);
		moveRow=getElement("span",false,"row",false);
		moveRow.appendChild(getElement("span",false,"cell","3rd Nature:"));
		moveRow.appendChild(getElement("span",false,"cell",move.learningChance[2]));
		moveRow.appendChild(getElement("span",false,"cell",tiers[move.tier-1][2]));
		this.moveDetailDiv.appendChild(moveRow);
		hM.setHash(this.currentDigimon.name,this.currentMove.name);
	};
	this.showMove=function(name){
		this.currentMove=moves.find(x => x.name===name);
		this.fillCurEnemyModel(name);
		this.getMoveDetailDiv();
	};
	this.getRaiseSelect=function(){
		var raisables=[];
		for(var i=0;i<61;i++){
			if(stats.find(x => x.name===raise[i].name).moves.length>1){
				var rai=stats.find(x => x.name===raise[i].name);
				raisables.push(raise[i].name);
			}
		}
		raisables.sort();
		this.partner.name.appendChild(tb.getSelect("raisables",raisables,showRaisable));
	};
	this.getSortSelect=function(){
		this.enemyListOptions.appendChild(tb.getSelect("sort",sortOptions,setSort));
		this.enemyListOptions.appendChild(tb.getSelect("sortDir",["HighToLow","LowToHigh"],setSortDir));
		this.enemyListOptions.appendChild(getElement("span",false,false,"hide one hit kills"));
		this.enemyListOptions.appendChild(tb.getInput("checkbox",false,toggleOneShot,false));
	};
}
function showTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function getLearningChance(move,types){
	var type=move.speciality;
	for(var i=0;i<3;i++){
		if(type==types[i]){
			return move.learningChance[i];
		}
	}
}
function getBrainLearningChance(move,types){
	var type=move.speciality;
	for(var i=0;i<3;i++){
		if(type==types[i]){
			return tiers[move.tier-1][i];
		}
	}
}
function getBrainArrEntry(move,types){
	var type=move.speciality;
	var nature,chance;
	for(var i=0;i<3;i++){
		if(type==types[i]){
			nature=i+1;
			chance=tiers[move.tier-1][i];
			break;
		}
	}
	return {name:move.name,speciality:move.speciality,nature:nature,tier:move.tier,chance:chance};
}
function sortBrain(brainArr){
	brainArr=sortSimple(brainArr,"tier");
	brainArr=sortSimple(brainArr,"nature");
	var arr=[];
	var tierOne=[];
	var rest=[];
	for(var i=0;i<brainArr.length;i++){
		if(brainArr[i].nature==1){
			arr.push(brainArr[i]);
		}else if(brainArr[i].tier==1){
			tierOne.push(brainArr[i]);
		}else{
			rest.push(brainArr[i]);
		}
	}
	return arr.concat(tierOne.concat(rest));
}
function showMove(name){
	gui.showMove(this.value);
}
function showRaisable(){
	gui.showPartner(this.value);
}
function getEnemiesByMove(moveName){
	var enemyList=[];
	for(var e=0;e<enemies.length;e++){
		for(var m=0;m<enemies[e].moves.length;m++){
			if(enemies[e].moves[m].name==moveName){
				enemyList.push(enemies[e]);
			}
		}
	}
	return enemyList;
}
function setSort(){
	gui.setSort(this.value);
}
function getWorstCase(enemy){
	var defense=this.partner.value;
	var highest={value:0,move:""};
	var current={};
	for(var em=0;em<enemy.moves.length;em++){
		current={value:getDamage(movs[enemy.moves[em].name].power,movs[enemy.moves[em].name].speciality,enemy.stats.offense,gui.currentDigimon.specialities,this.partner.def.value),move:enemy.moves[em].name};
		if(highest.value<current.value){
			highest=current;
		}
		if(em==enemy.moves.length-1){
			return highest.value+"("+highest.move+")";
		}
	}
}
function getWorstCaseRaw(enemy){
	var highest={value:0,move:""};
	var current={};
	for(var em=0;em<enemy.moves.length;em++){
if(movs[enemy.moves[em].name]!==undefined){
		current={value:getDamageRaw(movs[enemy.moves[em].name].power,movs[enemy.moves[em].name].speciality,gui.currentDigimon.specialities),move:enemy.moves[em].name};
		if(highest.value<current.value){
			highest=current;
		}
		if(em==enemy.moves.length-1){
			return highest;
		}
	}
}
return highest;
}
function toggleOneShot(){
	gui.hideOneShot=!gui.hideOneShot;
	gui.getEnemyDiv();
}
function update(){
	gui.getEnemyDiv();
}
function toggleMove(){
	gui.toggleMove(this);
}
