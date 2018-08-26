


class Square{
	constructor(callback, size, position){
		this.position = position;
		this.clickCallback = callback;
		this.size = size;
		this.domElement = null;
		this.handleClick = this.handleClick.bind(this);
	}
	getSymbol(){
		return this.domElement.text();
	}
	markSymbol(symbol){
		this.domElement.text(symbol)
	}
	handleClick(){
		this.clickCallback(this);
	}
	render(){
		this.domElement = $("<div>").addClass('square');
		this.domElement.css({
			width: this.size+'%',
			height: this.size+'%'
		})
		this.domElement.click(this.handleClick);
		return this.domElement;
	}
}