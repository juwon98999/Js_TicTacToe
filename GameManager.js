var ClickCount = 0;

class GameManager{
    constructor(){
        this.inProgress = false;
        this.winner = null;
        this.GameState = null;
        this.currentTurn = GameManager.o;
        this.GameMap = new Array(9).fill().map( s => new maptile() );
    }

    input(i){
        if(this.inProgress && !this.GameMap[i].value){
            this.GameMap[i].value = this.currentTurn;

            ClickCount +=1;
            this.Update();
            // if(ClickCount == this.GameMap.length){ // 한줄 빙고시 바로 종료되는게 싫을 경우 사용
                
            // }
            this.currentTurn = (this.currentTurn === GameManager.o) ? GameManager.x : GameManager.o;
        }
    }

    Update(){
        console.log(ClickCount);
        const winningCombinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            winningCombinations.forEach((wc) =>{
                const [a, b, c] = wc;
                const sqA = this.GameMap[a];
                const sqB = this.GameMap[b];
                const sqC = this.GameMap[c];
                
                if(sqA.value =="o" && sqB.value =="o" && sqC.value =="o"){
                    this.GameState = 1;
                    this.inProgress = false;
                    this.winner = sqA.value;
                }else if(sqA.value =="x" && sqB.value =="x" && sqC.value =="x"){
                    this.GameState = 2;
                    this.inProgress = false;
                    this.winner = sqA.value;
                }
            });

            if (ClickCount === this.GameMap.length){
                this.GameState = 0;
                this.inProgress = false;
            }

    }
}

GameManager.o = 'o';
GameManager.x = 'x';