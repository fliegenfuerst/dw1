class ToolBox{
	
	getImage(src){
		let img=document.createElement("img");
		img.src=src;
		return img;
	}
	getLabel(target){
		let label = document.createElement("label");
		label.for=target;
		label.innerText=target;
		return label;
	}
	static getElement(type,id,clas,innerHTML,func){//div,span
		let element = document.createElement(type);
		if(clas!==(undefined||false)){
			element.className=clas;
		}
		if(id!==(undefined||false)){
			element.id=id;
		}
		if(innerHTML!==(undefined||false)){
			element.innerHTML=innerHTML;
		}
		if(func!==(undefined||false)){
			element.onclick=func;
		}
		return element;
	}
	getInput(type,value,func,clas){
		let input = document.createElement("input");
		if(clas!==undefined){
			input.className=clas;
		}
		input.type = type;
		switch(type){
			case "email":
			case "password":
			case "text":
				input.name=value;
				input.id=value;
				input.onchange = func;
				input.onpaste = func;
				input.onkeyup = func;
			case "datetime-local":
			case "date":
			case "month":
				break;
			case "button":
				input.value = value;
				input.onclick = func;
				break;
			case "radio":
			case "checkbox":
				input.checked=value[2];
				input.onclick = func;
			case "color":
				input.name=value[0];
				input.value=value[1];
				break;
			case "number":
				input.name=value[0];
				input.min=value[1];
				input.max=value[2];
				break;
		}
		return input;
	}
	getTextArea(name,func){
		let textArea=this.getElement("TextArea",name);
		textArea.name=name;
		textArea.placeholder="enter "+name+"-text here";
		textArea.onchange = func;
		textArea.onpaste = func;
		textArea.onkeyup = func;
		textArea.cols=150;
		return textArea;
	}
	getSelect(name,options,func){
		let select=this.getElement('select',name,false,false);
		select.name=name;
		let option;
		for(let i=0;i<options.length;i++){
			select.appendChild(this.getOption(options[i].value,options[i].text));
		}
		select.onchange=func;
		return select;
	}
	getOption(value,text){
		let option=this.getElement('option',false,false,false);
		option.value=value;
		option.text=text;
		return option;
	}
	idGet(id){
		return document.getElementById(id);
	}
	classGet(clas){
		return document.getElementsByClassName(clas);
	}
	static addZeros(number,zeros){
		let ret="";
		for(let i=0;i<zeros;i++){
			ret+="0";
			if(number<parseInt(1+ret)){
				for(let j=0;j<zeros-i-1;j++){
					number="0"+number;
				}
				return number;
			}
		}
	}
	saveFile(data,name,extension){
		saveJSONFile(data,name+"."+extension);
		let a = document.createElement('a');
		a.setAttribute('href','data:application/json;charset=utf-8,'+ encodeURIComponent(str));
		a.setAttribute('download',filename);
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
	saveImageFile(source,destination){
		let a = document.createElement('a');
		//let str=JSON.stringify(text);
		a.setAttribute('href',source);
		a.setAttribute('download',destination);
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
	saveJSONFile(text,filename){
		let a = document.createElement('a');
		let str=JSON.stringify(text);
		a.setAttribute('href','data:application/json;charset=utf-8,'+ encodeURIComponent(str));
		a.setAttribute('download',filename);
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
	static test(){
		console.log("test");
	}
	

    getName() {
        return this.make + " " + this.model;
    }

    get model() {
        return this._model+"weeee";
    }

    set model(value) {// use to manipulate or filter input i.e. check if String and remove "px" and parseInt
        this._model = value;
    }
}
function idGet(id){
	if(id==""){
		return null;
	}else{
	    return document.getElementById(id);
	}
}
function scrollTop(){
	document.body.scrollTop = document.documentElement.scrollTop = 0;
	idGet("container").scrollTop = 0;
}
function showElement(el){
	el.style.display="block";
	el.style.visibility="visible";
}
function hideElement(el){
	el.style.display="hidden";
	el.style.visibility="none";
}
function getElement(type,id,clas,innerHTML){//div,span
	let element = document.createElement(type);
	if(clas!==(undefined||false)){
		element.className=clas;
	}
	if(id!==(undefined||false)){
		element.id=id;
	}
	if(innerHTML!==(undefined||false)){
		element.innerHTML=innerHTML;
	}
	return element;
}