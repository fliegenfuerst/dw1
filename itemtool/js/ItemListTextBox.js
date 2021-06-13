



const itemList=ToolBox.getElement("SPAN",false,"content",false,false);
const itemListBattle=ToolBox.getElement("SPAN",false,"content",false,false);
const itemListHealing=ToolBox.getElement("SPAN",false,"content",false,false);
const itemListFood=ToolBox.getElement("SPAN",false,"content",false,false);
const itemListEvolution=ToolBox.getElement("SPAN",false,"content",false,false);
const itemDetails=ToolBox.getElement("SPAN",false,"content itemDetails",false,false);
	let itemDiv;
	let effectDiv;
	let locationDiv;
	let locationSpan;
	let locationImg;
	let zIndex=items.length;
//for(var i=0;i<20;i++){
for(var i=0;i<items.length;i++){
	itemDiv=ToolBox.getElement("DIV",`item-${items[i].id}`,"listItem",false,false);
	itemDiv=attachDetail(itemDiv);
	itemDiv.appendChild(ToolBox.getElement("DIV",false,"shadowBottomRight listItemActive",false,false));
	itemDiv.appendChild(ToolBox.getElement("IMG",false,"itemSprite",`img/itemSprites/item_${ToolBox.addZeros(items[i].id+1,3)}.png`,false));
	itemDiv.appendChild(ToolBox.getElement("DIV",false,`itemName itemColor${items[i].color}`,items[i].name[lang],false));
	itemDiv.appendChild(ToolBox.getElement("DIV",false,`itemPrice`,items[i].price,false));
	locationDiv=ToolBox.getElement("DIV",false,"locationDiv",false,false);
	for(let j=0;j<items[i].locations.length;j++){
		locationSpan=ToolBox.getElement("SPAN",false,"locationSpan",false,false);
		locationImg=ToolBox.getElement("IMG",false,"shopSprite",`img/shops/${items[i].locations[j].name}.png`,false);
		locationImg.tipText=items[i].locations[j].text;
		locationImg=attachToolTip(locationImg,items[i].locations[j].text);
		locationSpan.appendChild(locationImg);
		locationDiv.appendChild(locationSpan);
	}
	itemDiv.style.zIndex=zIndex--;
	itemDiv.appendChild(getEffects(items[i]));
	itemDiv.appendChild(locationDiv);
	if(items[i].battle==true){
		itemListBattle.appendChild(itemDiv.cloneNode(true));
	}
	if(items[i].digivolveTo!==undefined){
		itemListEvolution.appendChild(itemDiv.cloneNode(true));
	}
	if(items[i].healHP!==undefined||items[i].healMP!==undefined||items[i].healStatus!==undefined||items[i].healInjury!==undefined||items[i].healSickness!==undefined){
		itemListHealing.appendChild(itemDiv.cloneNode(true));
	}
	if(items[i].weight!==undefined){
		itemListFood.appendChild(itemDiv.cloneNode(true));
	}
	itemList.appendChild(itemDiv);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------

function getEffectSpan(icons,text){
	let effectSpan=ToolBox.getElement("DIV",false,"effectSpan shadowIcon",false,false);
	let effectImg;
	for(let i=0;i<icons.length;i++){
		effectImg=ToolBox.getElement("IMG",false,"effectIcon",`img/icons/${icons[i]}.png`,false);
		effectImg=attachToolTip(effectImg,text);

		effectSpan.appendChild(effectImg);
	}
	return effectSpan;
}
function getDigivolveSpan(digi,text){
	let effectSpan=ToolBox.getElement("DIV",false,"effectSpan",false,false);
	let effectImg;
	effectImg=ToolBox.getElement("IMG",false,"shopSprite",`img/digimonSprites/${digi}.png`,false);
	effectImg.style.marginTop="-7px";
	effectImg=attachToolTip(effectImg,text);
	effectSpan.appendChild(effectImg);
	return effectSpan;
}
function getEffects(item){
	let effectDiv=ToolBox.getElement("DIV",false,"effectDiv",false,false);
	if(item.weight!==undefined){
		if(item.weight>0){
			effectDiv.appendChild(getEffectSpan(["weight","plus"],`Raises weight by ${items[i].weight}`));
		}else{
			effectDiv.appendChild(getEffectSpan(["weight","minus"],`Lowers weight by ${-1*items[i].weight}`));
		}
	}
	if(item.healHP!==undefined){
		effectDiv.appendChild(getEffectSpan(["hp"],`Heals ${items[i].healHP}HP`));
	}
	if(item.healMP!==undefined){
		effectDiv.appendChild(getEffectSpan(["mp"],`Heals ${items[i].healMP}MP`));
	}
	if(item.healStatus!==undefined){
		if(item.id==10){
			effectDiv.appendChild(getEffectSpan(["status"],`Heals and protects from status effects`));
		}else{
			effectDiv.appendChild(getEffectSpan(["status"],`Heals status effects`));
		}
	}
	if(item.healInjury!==undefined){
		
	}
	if(item.healSickness!==undefined){
		
	}
	if(item.lifetime!==undefined){
		
	}
	if(item.battleBuff!==undefined){
		if(item.battleBuff.stats.indexOf("offense")>-1){
		effectDiv.appendChild(getEffectSpan(["offense","arrowUp"],`Raises offense by ${items[i].battleBuff.amount} during battle`));
		}
		if(item.battleBuff.stats.indexOf("defense")>-1){
			effectDiv.appendChild(getEffectSpan(["defense","arrowUp"],`Raises defense by ${items[i].battleBuff.amount} during battle`));
		}
		if(item.battleBuff.stats.indexOf("speed")>-1){
			effectDiv.appendChild(getEffectSpan(["speed","arrowUp"],`Raises speed by ${items[i].battleBuff.amount} during battle`));
		}
	}
	if(item.buff!==undefined){
		if(item.buff.stats.indexOf("hp")>-1){
		effectDiv.appendChild(getEffectSpan(["hp","cross"],`Boosts HP training by ${items[i].buff.amount}`));
		}
		if(item.buff.stats.indexOf("mp")>-1){
			effectDiv.appendChild(getEffectSpan(["mp","cross"],`Boosts MP training by ${items[i].buff.amount}`));
		}
		if(item.buff.stats.indexOf("offense")>-1){
			effectDiv.appendChild(getEffectSpan(["offense","cross"],`Boosts offense training by ${items[i].buff.amount}`));
		}
		if(item.buff.stats.indexOf("defense")>-1){
			effectDiv.appendChild(getEffectSpan(["defense","cross"],`Boosts defense training by ${items[i].buff.amount}`));
		}
		if(item.buff.stats.indexOf("speed")>-1){
			effectDiv.appendChild(getEffectSpan(["speed","cross"],`Boosts speed training by ${items[i].buff.amount}`));
		}
		if(item.buff.stats.indexOf("brains")>-1){
			effectDiv.appendChild(getEffectSpan(["brains","cross"],`Boosts brains training by ${items[i].buff.amount}`));
		}
		}
	if(item.hp!==undefined){
		effectDiv.appendChild(getEffectSpan(["hp","plus"],`Raises HP by ${items[i].hp}`));
	}
	if(item.mp!==undefined){
		effectDiv.appendChild(getEffectSpan(["mp","plus"],`Raises MP by ${items[i].mp}`));
	}
	if(item.offense!==undefined){
		effectDiv.appendChild(getEffectSpan(["offense","plus"],`Raises offense by ${items[i].offense}`));
	}
	if(item.defense!==undefined){
		effectDiv.appendChild(getEffectSpan(["defense","plus"],`Raises defense by ${items[i].defense}`));
	}
	if(item.speed!==undefined){
		effectDiv.appendChild(getEffectSpan(["speed","plus"],`Raises speed by ${items[i].speed}`));
	}
	if(item.brains!==undefined){
		effectDiv.appendChild(getEffectSpan(["brains","plus"],`Raises brains by ${items[i].brains}`));
	}
	if(item.energy!==undefined){
		
	}
	if(item.happiness!==undefined){
		effectDiv.appendChild(getEffectSpan(["happiness"],`Raises happiness by ${items[i].happiness}`));
	}
	if(item.discipline!==undefined){
		effectDiv.appendChild(getEffectSpan(["discipline"],`Raises discipline by ${items[i].discipline}`));
	}
	if(item.tiredness!==undefined){
			effectDiv.appendChild(getEffectSpan(["tiredness"],`Lowers tiredness by ${-1*items[i].tiredness}`));
	}
	if(item.sickness!==undefined){
		effectDiv.appendChild(getEffectSpan(["sickness"],`Risks sickness at ${items[i].sickness}`));
	}
	if(item.digivolveTo!==undefined){
		effectDiv.appendChild(getDigivolveSpan(item.digivolveTo,`Digivolve to ${items[i].digivolveTo}`));
	}
	
	let zIndex=effectDiv.childNodes.length+1;
	for(let i=0;i<effectDiv.childNodes.length;i++){
		effectDiv.childNodes[i].style.zIndex=zIndex--;
	}
	return effectDiv;
		/*

	if(item.!==undefined){
		
	}
​props[13]="healInjury";			bandage?
​props[14]="healSickness";		medicine?
​props[22]="lifetime";			HEART?
​									props[23]="effect";				------------->SHOW TEXT
​props[24]="energy";				???
​props[29]="sickness";			ALSO SYRINGE?
*/
}
/*
function getLocations(locations){
let l="";
for(let j=0;j<items[i].locations.length;j++){
		l+=
`			<img class="shopSprite" src="img/shops/${locations[j].name}.png"/ onmouseover="showToolTip(this,'${locations[j].text}')" onmouseleave="hideToolTip()">`;
	}
return l;
}
*/
function attachDetail(div){
	//div.onmouseenter=showDescription;
	//div.onmouseleave=hideDescription;
	div.setAttribute("onmouseenter","showDescription(event)");
	div.setAttribute("onmouseleave","hideDescription(event)");
	return div;
}
class ItemListTextBox extends TabbedTextBox {
    constructor(id,container,width,height,) {
    	super(id,container,[{name:"all",content:itemList},{name:"battle",content:itemListBattle},{name:"healing",content:itemListHealing},{name:"food",content:itemListFood},{name:"evolution",content:itemListEvolution}],width,height);
        this.headerBar=getDiv("headerBar");
        let tempLabel;
        tempLabel=ToolBox.getElement("IMG",false,"itemListLabel",`img/labels/5px/item.png`,false);
        this.headerBar.appendChild(tempLabel);
        tempLabel=ToolBox.getElement("IMG",false,"itemListLabel",`img/labels/5px/price.png`,false);
        tempLabel.style.paddingLeft="230px";
        this.headerBar.appendChild(tempLabel);
        tempLabel=ToolBox.getElement("IMG",false,"itemListLabel",`img/labels/5px/effect.png`,false);
        tempLabel.style.paddingLeft="12px";
        this.headerBar.appendChild(tempLabel);
        tempLabel=ToolBox.getElement("IMG",false,"itemListLabel",`img/labels/5px/location.png`,false);
        tempLabel.style.paddingLeft="308px";
        this.container.style.top=0;
        this.headerBar.appendChild(tempLabel);
        this.main.insertBefore(this.headerBar, this.main.childNodes[1]);
        adjustHeight(this.container,height-12);
        this.update();
	}
}
