class TabbedTextBox extends ScrollableTextBox {
    constructor(id,container,content,width,height) {
    	super(id,container,content[0].content,width,height);
		this.tabLabelBar=getDiv("tabLabelBar");
		let tempTabLabel;
		let tempTabLabelText;
    	tempTabLabel=getSpan("tabLabel labelActive");
		tempTabLabelText=getDiv("tabLabelText");
		tempTabLabelText.innerText=content[0].name;
		tempTabLabel.appendChild(tempTabLabelText);
		this.tabLabelBar.appendChild(tempTabLabel);
		if(content.length>1){
        	this.selectedTab=0;
			this.contents=content;
	    	tempTabLabel.id="tabLabel-"+0;
	    	tempTabLabel.onclick=this.tabClicked;
			tempTabLabel.classList.add("clickable");
	    	this.contents[0].currentPercentage=0;
	    	for(let i=1;i<content.length;i++){
	    		this.contents[i].currentPercentage=0;
	    		tempTabLabel=getSpan("tabLabel labelInActive clickable");
	    		tempTabLabel.id="tabLabel-"+i;
	    		tempTabLabel.onclick=this.tabClicked;
				tempTabLabelText=getDiv("tabLabelText");
				tempTabLabelText.innerText=content[i].name;
				tempTabLabel.appendChild(tempTabLabelText);
				this.tabLabelBar.appendChild(tempTabLabel);
	    	}
		}
        this.main.insertBefore(this.tabLabelBar, this.main.firstChild);
        this.main.style.marginTop="32px";
	}
	tabClicked(){
		textBoxes[this.parentNode.parentNode.id].handleTabClick(parseInt(this.id.split("-")[1]));
	}
	handleTabClick(id){
		if(id!==this.selectedTab){
			this.tabLabelBar.childNodes[id].classList.remove("labelInActive");
			this.tabLabelBar.childNodes[id].classList.add("labelActive");
			this.tabLabelBar.childNodes[this.selectedTab].classList.remove("labelActive");
			this.tabLabelBar.childNodes[this.selectedTab].classList.add("labelInActive");
			this.contents[this.selectedTab].currentPercentage=this.currentPercentage;
			this.replaceContent(this.contents[id]);
			this.selectedTab=id;
		}
	}
	replaceContent(content){
		content.content.onmousedown=content.content.ontouchstart=this.doScroll;
		this.container.replaceChild(content.content, this.content);
		this.content=content.content;
		this.currentPercentage=content.currentPercentage;
		this.scrollToPercentage();
		adjustWidth(content.content,this.main.offsetWidth-this.scrollBar.offsetWidth-28);
        this.update();
	}
}