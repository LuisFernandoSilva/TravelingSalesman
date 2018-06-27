cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel:{default: null,type: cc.Label},
        lifeLabel:{default: null,type: cc.Label},
        opcaoEditBox:{default: null,type: cc.EditBox},
        respostaCorrect: {default: null,type: cc.Node},
        incorrectQuestion:{default: null,type: cc.Node},
        question01:{default: null,type: cc.Node},
        score:0,
        life:5,


    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.question01.setPositionX(-3);
        this.respostaCorrect.setPositionY(-500);
        this.incorrectQuestion.setPositionY(-566);
        this.node.on('touchend',function(event){
            this.question();
     
        },this);
    },

    question: function(){
       let options = this.opcaoEditBox.string;
      
       if(options == 'opção A'){
        this.question01.setPositionX(-1000);    
        this.respostaCorrect.setPositionY(8);
        this.addScore(100);
        }else{
            this.question01.setPositionX(-1000);
            this.incorrectQuestion.setPosition(-10,-52);
            this.lostLife(1);
        }

    },

    addScore(ponto){
        this.score += ponto;
        this.scoreLabel.string = this.score;
    },
    lostLife(ponto){
        this.life -= ponto;
        this.lifeLabel.string = this.life;
    },
 


    // update (dt) {},
});
