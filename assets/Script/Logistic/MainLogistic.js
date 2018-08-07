

cc.Class({
    extends: cc.Component,

    properties: {
        mainGameLogistic: cc.Node,
        easyQuestionHud: cc.Node,
        fase01Hud: cc.Node,
        fase02Hud: cc.Node,
        faseExtra1: cc.Node,
        faseExtra2: cc.Node,
        hudCadEmail:cc.Node,

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
        this.fase01Hud.active = true;
        this.fase02Hud.active = false;
        this.faseExtra1.active = false;
        this.faseExtra2.active = false;


    },
    mediumquestion: function(){

        this.mainGameLogistic.setPositionX(1000);
        this.mediumQuestionHud.active = true;

    },

    hardQuestion: function(){

        this.mainGameLogistic.setPositionX(1000);
        this.hardQuestionHud.active = true;

    },

    exitCadEmail: function(){
        
        this.hudCadEmail.setPositionX(2000);
    },

    // update (dt) {},
});
