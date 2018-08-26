


class TicTacToe{
	constructor(){
		this.squares = [];
		this.size = 5;
		this.handleClick = this.handleClick.bind(this);
		this.players = [
			{
				name: 'dan',
				symbol: 'X',
				color: 'pink',
				domElement: $("#player1")
			},
			{
				name: 'john',
				symbol: 'O',
				color: 'lightblue',
				domElement: $("#player2")
			}
		]
		this.currentPlayer = 0;
		this.players.map( player => {
			player.domElement.text(player.name);
			player.domElement.css('background-color', player.color);
		})
	}
	handleClick(clickedCell){
		clickedCell.markSymbol( this.getCurrentPlayerSymbol() );
		this.checkWin(clickedCell.position, this.getCurrentPlayerSymbol());
		this.togglePlayer();
	}
	checkWin(start, symbol){
		var vectors = [
			[{x: 1,y:0},{x: -1,y:0}],
			[{x: 0,y:1},{x: 0,y:-1}],
			[{x: -1,y:-1},{x: 1,y:1}],
			[{x: -1,y:1},{x: 1,y:-1}]
		];
		for(var vectorIndex=0; vectorIndex<vectors.length; vectorIndex++){
			var count1 = this.checkInDirection(start, vectors[vectorIndex][0], symbol );
			var count2 = this.checkInDirection(start, vectors[vectorIndex][1], symbol );
			if(count1+count2+1===this.size){
				alert('win');
			}
		}
		

	}

	checkInDirection( start, vector, symbol){
		var next = { x: start.x + vector.x, y: start.y+vector.y};
		if(this.getItemAtPosition(next)!==symbol){
			return 0;
		}
		return this.checkInDirection(next, vector, symbol) + 1;

	}
	getItemAtPosition(position){
		if(position.x<0 || position.x>=this.size || position.y<0 || position.y>=this.size){
			return false;
		}
		return this.squares[position.y][position.x].getSymbol();
	}

	renderGameBoard(){
		var sizePerSquare = 100 / this.size;
		var squareDomElements = [];
		for(var row = 0; row < this.size; row++){
			this.squares.push([]);
			for(var col = 0; col < this.size; col++){
				var square = new Square(this.handleClick, sizePerSquare, {x:col, y: row});
				this.squares[row][col]=square;
				var domElement = square.render();
				squareDomElements.push(domElement)
			}
		}
		
		$(".squareContainer").append(squareDomElements);

	}
	render(){

	}
	getCurrentPlayerSymbol(){
		return this.players[this.currentPlayer].symbol;
	}
	togglePlayer(){
		this.players[this.currentPlayer].domElement.removeClass('highlighted');
		this.currentPlayer = 1 - this.currentPlayer;
		this.players[this.currentPlayer].domElement.addClass('highlighted');

	}
}











