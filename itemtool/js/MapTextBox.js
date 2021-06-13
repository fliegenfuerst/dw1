/*<html>
<head>
<style>
img{
	image-rendering:optimizeSpeed;
	image-rendering:-moz-crisp-edges;
	image-rendering:-o-crisp-edges;
	image-rendering:-webkit-optimize-contrast;
	image-rendering:pixelated;
	image-rendering:optimize-contrast;
	-ms-interpolation-mode:nearest-neighbor;
}
table{
	border:solid;
}
.itemSpriteMap{
	height:48px;
	width:48px;
}
.itemSpawnInfo{
}
#mapTitle{
	margin-left: 216px;
}
#mapSelect{
	max-width:400px;
}
#container{
}
#canvasSpan{
	position: absolute;
	top:30;
	left:200;
	max-width:432px;
	min-width:432px;
}
#left{
	left:0;
}
#right{
	left:632px;
}
.itemBar{
	position: absolute;
	top:30;
	max-width:200px;
	min-width:200px;
}
#itemList{
}
</style>
<body>
	<div id="container">
		<div id="mapTitle"></div>
		<span id="left" class="itemBar"></span>
		<span id="canvasSpan">
			<canvas id="c" width="432" height="500"></canvas>
		</span>
		<span id="right" class="itemBar"></span>
	</div>
	<div id="itemList"> 
		<div class="listedItem" id="0">
			<div>
				<span class="listedItemName">sm. recovery</span>
				<span class="listedItemPrice">100 Bits</span>
				<span class="acquisitionMode">
					<button onclick="showDropMaps(0)">drop</button>
					<button onclick="showShopsWith(0)">shop</button>
				</span>
			</div>
			<div>
				description: <span class="listedItemDescription"></span>
			</div>
			<div>
				effects: <span class="listedItemEffects"></span>
			</div>
			<div>
				type: 
				<span class="listedItemTypes">
					<button class="listedItemType" onclick="showItems('battle')">battle</button>
					<button class="listedItemType" onclick="showItems('general')">general</button>
					<button class="listedItemType" onclick="showItems('refuseable')">refuseable</button>
				</span>
			</div>
			<div>
				is favourite food of: <span class="listedItemFavouriteFoodDigimonList"></span>
			</div>
		</div>
	</div>

<script type="text/javascript" src="js/toolbox.js"></script>
<script type="text/javascript" src="js/mapCameras.js"></script>
<script type="text/javascript" src="js/maps.js"></script>
<script type="text/javascript" src="js/chests.js"></script>
<script type="text/javascript" src="js/items.js"></script>
<script>*/
maps = maps.filter(function(value, index, arr){

    return value.items.length > 0;

});


function getEl(type,id){
	let el=document.createElement(type);
	el.id=id;
	return el;
}
var highest=0;
class MapTextBox extends ScrollableTextBox2 {
	constructor(id,container,width,height){
    	super(id,container,getSpan(`mapContainer content`),width,height);
    	let optionList=[...maps];//_.clone(maps);
		optionList.sort(function(a,b){
		    if(a.name < b.name) { return -1; }
		    if(a.name > b.name) { return 1; }
		    return 0;
		});
		new DropDown(optionList,this);
		this.mapBackground=getDiv(`mapContainerBackground`);
		this.mapCollision=getDiv(`mapContainerCollision`);
		this.canvasSpan=getSpan(``);
		this.canvasSpan.id=`canvasSpan`;
		this.imgBackground=ToolBox.getElement(`IMG`,false,`mapBackground`);
		this.mapBackground.appendChild(this.imgBackground);
		this.canvasSpan.innerHTML=`<canvas id="c" width="332" height="500"></canvas>`;
		this.img=getEl(`IMG`,`collisionIMG`);
		this.img.target=this;
		this.leftSpan=getSpan(`itemBar`);
		this.rightSpan=getSpan(`itemBar`);
		this.leftSpan.id=`leftSpan`;
		this.rightSpan.id=`rightSpan`;
		this.mapCollision.appendChild(this.leftSpan);
		this.mapCollision.appendChild(this.canvasSpan);
		this.mapCollision.appendChild(this.rightSpan);
		this.content.appendChild(this.mapBackground);
		this.content.appendChild(this.mapCollision);
		this.context=this.canvasSpan.childNodes[0].getContext(`2d`);
		this.offset=16;
		this.margin=0;
		this.chests=[];
		this.enemies=[];
		this.mapsLeft=[];
		this.mapsRight=[];
		/*for(let map of maps){//highest:462
			this.displaySelection(map.id);
		}*/
		this.displaySelection(17);
		//this.update();
		//adjustWidth(this.content,this.main.offsetWidth-this.scrollBar.offsetWidth-28);
	}
	displaySelection(id){
		this.context.clearRect(0, 0, 332, 500)
		let map=maps.find(x=>x.id==id);
		let items=[...map.items];//_.clone(map.items);
		this.imgBackground.src=`https://www.phoenix-staffel.de/digimon/DigimonWorld/Backgrounds/${map.internalName}.TFS/${map.internalName}.TFS.0.PNG`;
		this.chests=chests.filter(x=>x.Map==map.internalName);
		this.enemies=enemies.filter(x=>x.map==map.internalName);
		let chest;
		let enemy;
		this.mapsLeft=[];
		this.mapsRight=[];
		if(this.chests.length>0){
			for(let item of this.chests){
				items.push({item:item.Item,locX:Math.floor((item.locX+5000)/100),locY:Math.floor((item.locY*-1+5000)/100),type:`chest`});
			}	
		}
		if(this.enemies.length>0){
			for(let item of this.enemies){
				enemy=stats.filter(x=>x.name==item.name)[0];
				if(enemy.drop.item!==`NONE`){
					items.push({name:enemy.name,item:enemy.drop.item,chance:enemy.drop.chance,locX:Math.floor((item.position.x+5000)/100),locY:Math.floor((item.position.z*-1+5000)/100),type:`enemy`,stats:item});
				}
			}	
		}
		if(items.length>1){
			items.sort(function(a,b){return a.locX - b.locX;});
			this.mapsLeft=[...items];//_.clone(items);
			this.mapsRight=[...items];//_.clone(items);
			this.mapsRight.splice(0,Math.floor(items.length/2));
			this.mapsLeft.splice(Math.floor(items.length/2),items.length);
		}else{
			if(items[0].locX<50){
				this.mapsLeft=items;
			}else{
				this.mapsRight=items;
			}
		}
		

		this.leftSpan.innerHTML=``;
		this.rightSpan.innerHTML=``;
		this.context.clearRect(0, 0, 332, 500);
		
		this.img.onload = function () {
		    this.target.context.drawImage(this,this.target.offset,90,300,300);
			//map.items.sort(function(a,b){return a.locY - b.locY;});
			let indexRight=0;

			this.target.mapsLeft.sort(
				function(a,b){
					if(a.locY<=b.locY){
						if(a.locY==b.locY||(b.locY-a.locY)<2){
							if(a.locX<=b.locX){
								return -1;
							}else{
								return 1;
							}
						}
						return -1
					}else{
						if((a.locY-b.locY)<4){
							if(a.locX<=b.locX){
								return 1;
							}else{
								return -1;
							}
						}
						return 1;
					}
				});
			this.target.mapsRight.sort(
				function(a,b){
					if(a.locY<=b.locY){
						if(a.locY==b.locY){
							if(a.locX<=b.locX){
								return -1;
							}else{
								return 1;
							}
						}
						return -1
					}else{
						if((a.locY-b.locY)<4){
							if(a.locX<=b.locX){
								return -1;
							}else{
								return 1;
							}
						}
						return 1;
					}
				});
			this.target.drawItemLayer(this.target.mapsLeft,false);
			this.target.drawItemLayer(this.target.mapsRight,true);
		}
		this.img.src = `https://www.phoenix-staffel.de/digimon/DigimonWorld/CollisionMaps/${map.internalName}.MAP.PNG`;
	}
	drawItemLayer(arr,isRight){
		this.marginAbsolute=0;
		this.margin=0;
		for(let i=0;i<arr.length;i++){
			switch(arr[i].type){
				case `enemy`:
					this.margin+=77;
					break;
				case `chest`:
					this.margin+=44;
					break;
				default:
					this.margin+=54;
					break;
			}
		}
		if(this.margin>highest){
			highest=this.margin;
		}
		this.margin=(500-this.margin)/(arr.length+1);
		for(var i=0;i<arr.length;i++){
			this.getItemInfo(arr[i],isRight,i);
		}
	}
	getItemInfo(item,isRight,index){
		let x=item.locX*3+2;
		let y=item.locY*3+92;
		let ret=``;
		let type;
		let tempHeight=27;
		if(item.chance==0){
			return false;
		}
		this.context.beginPath();
		switch(item.type){
			case `chest`:
				type=`chest`;
				tempHeight=44;
				this.context.strokeStyle=`#00FF00`;
				break;
			case `enemy`:
				type=`enemy`;
				tempHeight=77;
				this.context.strokeStyle=`#0000FF`;
				break;
			default:
				type=`spawn`;
				tempHeight=54;
				this.context.strokeStyle=`#FF0000`;
				break;
		}
		this.marginAbsolute+=this.margin+tempHeight;

		this.context.lineWidth=2;
		this.context.moveTo(this.offset+x-8,y-8);
		this.context.lineTo(this.offset+x+8,y+8);
		this.context.moveTo(this.offset+x+8,y-8);
		this.context.lineTo(this.offset+x-8,y+8);
		this.context.moveTo(this.offset+x,y);

		let itemID;
		if(item.item.indexOf(`_`)>-1){
			itemID=1+items.find(x => x.name.eng==item.item.split(`_`)[1]).id;
		}else{
			itemID=1+items.find(x => x.name.eng==item.item).id;
		}
		ret+=`<tr class="itemSpawnInfo chest">`;

		if(item.type=="enemy"){
			ret+=`<td rowspan="3"><img class="itemSpriteMap" src="img/itemSprites/item_${ToolBox.addZeros(itemID,3)}.png"/></td><td>${item.name}</td></tr>`;
		}else{
			ret+=`<td rowspan="2"><img class="itemSpriteMap" src="img/itemSprites/item_${ToolBox.addZeros(itemID,3)}.png"/></td>`;
		}
		ret+=`<td class="itemText">${item.item}</td></tr><tr>`;
		if(item.type=="chest"){
		}else{
			ret+=`<td>${item.chance}% chance</td>`;
		}
		ret+=`</tr></table>`;
		if(isRight){
			this.context.lineTo(332,this.marginAbsolute-tempHeight/2);
			this.rightSpan.innerHTML+=`<table class="itemDetailsMap ${type}" style="float:left; margin-top:${this.margin}px;">`+ret;
		}else{
			this.context.lineTo(0,this.marginAbsolute-tempHeight/2);
			this.leftSpan.innerHTML+=`<table class="itemDetailsMap ${type}" style="float:right; margin-top:${this.margin}px;">`+ret;
		}
		this.context.stroke(); 
	}

}