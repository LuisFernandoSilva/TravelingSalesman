

cc.Class({
    extends: cc.Component,

    properties: {
           //labels do hudGame
           scoreLabel: cc.Label,
           lifeLabel: cc.Label,
           //label do hudquestion
           opcaoLabel: cc.Label,
           //hud QuestionCorrect
   
           questionCorrect1: cc.Node,
           //hud QuestionErase
           questionErase: cc.Node,
           //hud question
           hudQuestion: cc.Node,
 
           score:0,
           life:5,

    },

    onLoad () {
        this.node.on("touchend", this.addScore, this);
    },

    addScore: function () {

        let options = this.opcaoLabel.string;
        let pontos = this.scoreLabel.string;
        let teste = parseInt(pontos);
        console.log("teste: "+teste);

        if(options == 'opção B'){
            this.hudQuestion.active = false;  
            this.questionCorrect1.active = true;
            this.score = 100 + teste;

            this.scoreLabel.string = this.score;

        }else{
            this.hudQuestion.active = false;   
            this.questionErase.active = true;
            //this.lostLife(1);
         }
    },

    // update (dt) {},
});
