var gms = new GameManager();

var app = new Vue({

    el : "#TTT_app",
    data : gms,

    computed:{
        infoMessage: function(){
           if(this.inProgress){
               return this.currentTurn + "turn";
           }else{
                if(this.GameState == 0){
                    return  "게임오버! - 무승부";
                }else if(this.GameState == 1){
                    return  "게임오버! - o 승리";
                }else if(this.GameState == 2){
                    return  "게임오버! - x 승리";
                }
           }

        }
        
    },

    
    methods : {
        oxinput : function(event){
            gms.input([].indexOf.call(event.target.parentElement.children, event.target));
            
        },
    },

    created : function(){
        console.log("GameState " + gms.GameState);
        console.log("게임 객체 생성완료");
        
    },

});

    const app2 = new Vue({
        el: '#Intro',
        data : {
            gameIsRunning : false,
            gms
        },

        methods : {
            startGame(){
                this.gameIsRunning = true;
                gms.inProgress = true;
            }
        } 
    });
