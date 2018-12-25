function toolbox(){
	this.getElement=function(type,id,clas,innerHTML,func){//div,span
		var element = document.createElement(type);
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
	};
	this.getImage=function(src){
		var img=document.createElement("img");
		img.src=src;
		return img;
	};
	this.getLabel=function(target){
		var label = document.createElement("label");
		label.for=target;
		label.innerText=target;
		return label;
	};
	this.getInput=function(type,value,func,clas){
		var input = document.createElement("input");
		if(clas!==undefined){
			input.className=clas;
		}
		input.type = type;
		switch(type){
			case "email":
			case "password":
			case "text":
				//input.id=value;
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
	};
	this.getTextArea=function(name,func){
		var textArea=this.getElement("TextArea",name);
		textArea.name=name;
		textArea.placeholder="enter "+name+"-text here";
		textArea.onchange = func;
		textArea.onpaste = func;
		textArea.onkeyup = func;
		textArea.cols=150;
		return textArea;
	};
	this.getSelect=function(name,options,func){
		var select=this.getElement('select',name,false,false);
		select.name=name;
		var option;
		for(var i=0;i<options.length;i++){
			select.appendChild(this.getOption(options[i],options[i]));
		}
		select.onchange=func;
		return select;
	};
	this.getOption=function(value,text){
		var option=this.getElement('option',false,false,false);
		option.value=value;
		option.text=text;
		return option;
	}
	this.idGet=function(id){
		return document.getElementById(id);
	};
	this.classGet=function(clas){
		return document.getElementsByClassName(clas);
	};
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
	var element = document.createElement(type);
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