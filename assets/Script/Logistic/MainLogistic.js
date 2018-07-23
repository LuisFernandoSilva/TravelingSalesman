

cc.Class({
    extends: cc.Component,

    properties: {
        mainGameLogistic: cc.Node,
        easyQuestionHud: cc.Node,
        mediumQuestionHud: cc.Node,
        hardQuestionHud: cc.Node,  
        screenGame: cc. Node,              


    },

    onLoad () {
        
    },
    
    gameScreen: function(){
        this.screenGame.active = true;
    },

    easyQuestion: function() {

        this.mainGameLogistic.setPositionX(1000);
        this.easyQuestionHud.active = true;


    },
    mediumquestion: function(){

        this.mainGameLogistic.setPositionX(1000);
        this.mediumQuestionHud.active = true;

    },

    hardQuestion: function(){

        this.mainGameLogistic.setPositionX(1000);
        this.hardQuestionHud.active = true;

    }

    // update (dt) {},
});
