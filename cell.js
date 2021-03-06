function Cell(x, y, size) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.state = setRandomState();
		
	this.display = function() {
		if(this.state) {
			fill(255); //ALIVE WHITE
		}
		else {
			fill(100); //DEAD BLACK
		}
	
		rect(x*size, y*size, size, size);
	}
	
	this.setState = function(value) {
		if(value<127.5) {
			this.state=false;
		}
		else {
			this.state=true;
		}
	}
	
	function setRandomState() {
		var r = random(1);
		if(r<0.5) {
			return false;
		}
		else {
			return true;
		}
	}
	
	this.setRandomState = function() {
		this.state = setRandomState();
	};
	
	this.isAlive = function() {
		return this.state;
	}
	
	this.updateState = function(aliveNeighbours) {
		if(this.state == false && aliveNeighbours == 3) { //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
			this.state = true;
		}
		else if(this.state && aliveNeighbours < 2) { //Any live cell with fewer than two live neighbours dies, as if caused by under-population.
			this.state = false;
		}
		else if(this.state && aliveNeighbours > 3) { //Any live cell with more than three live neighbours dies, as if by over-population.
			this.state = false;
		}		
		
		//Any live cell with two or three live neighbours lives on to the next generation.		
	}
}

