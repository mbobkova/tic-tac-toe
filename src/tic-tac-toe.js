class TicTacToe {
    constructor() {
        this.player = 'x';
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.player;   
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.getFieldValue(rowIndex, columnIndex) == null) {  
            this.matrix[rowIndex][columnIndex] = this.player;  
            this.getWinner();
            if(this.player == 'x') {
                this.player = 'o';
            }
            else if(this.player == 'o') {
                this.player = 'x';    
            }                      
        } 
    }

    isFinished() {
        if(this.getWinner() != null || this.isDraw() == true) {
            return true;
        }
        else return false;
    }

    getWinner() {
        for(var i = 0; i<3; i++) {
            if(this.matrix[i][0] != null && this.matrix[i][0] == this.matrix[i][1] && this.matrix[i][0] == this.matrix[i][2]) {
                return this.getFieldValue(i,0); 
            } 
            else if(this.matrix[0][i] != null && this.matrix[0][i] == this.matrix[1][i] && this.matrix[0][i] == this.matrix[2][i]) {
                return this.getFieldValue(0,i);  
            }
        }    
        if(this.matrix[0][0] != null && this.matrix[0][0] == this.matrix[1][1] && this.matrix[0][0] == this.matrix[2][2]) {
            return this.getFieldValue(0,0);
        }
        else if(this.matrix[0][2] != null && this.matrix[0][2] == this.matrix[1][1] && this.matrix[0][2] == this.matrix[2][0]) {
            return this.getFieldValue(0,2); 
        }
        else return null; 
    }

    noMoreTurns() {
        for(var i = 0; i<3; i++){
            for(var j = 0; j<3; j++){
                if(this.matrix[i][j] == null) {
                    return false;   
                }
            }
        }
        return true;
    }

    isDraw() {
        if(this.getWinner() == null && this.noMoreTurns() == true) {
            return true;
        }
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.matrix[rowIndex][colIndex] != null) {
            return this.matrix[rowIndex][colIndex];
        }
        else return null;     
    }
}

module.exports = TicTacToe;
