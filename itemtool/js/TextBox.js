class TextBox {
    constructor(id,container,content,width,height) {
        this.content=content;
        this.main=getDiv("textBox");
        adjustHeight(this.main,height);
        adjustWidth(this.main,width);
        this.container=getDiv("container");
        this.container.style.top="-8px";
        adjustHeight(this.container,height+16);
        adjustWidth(this.container,width+16);
        this.container.appendChild(this.content);
        this.main.appendChild(this.container);
        container.appendChild(this.main);
        this.main.id=id;
	}
    update(){
    }
    hide(){
    	this.main.classList.add("hidden");
    }
    show(){
    	this.main.classList.remove("hidden");
    }
}