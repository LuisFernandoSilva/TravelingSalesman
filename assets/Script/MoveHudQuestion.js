
cc.Class({
    extends: cc.Component,

    properties: {
        hudQuestion01: cc.Node,
        hudQuestino02: cc.Node,
        //hud QuestionCorrect
        questionCorrect:  cc.Node,
       //hud QuestionErase
        questionErase: cc.Node,

        moveControler: 1,

    },

     onLoad () {
         this.node.on('touchstart', this.moveHud, this);
     },

     moveHud:function(){
         this.questionCorrect.active = false;
         this.questionErase.active = false;
         
         if(this.moveControler == 1){
             this.hudQuestino02.setPositionX(30);
             this.hudQuestion01.setPositionX(1087);
         }
     },

    // update (dt) {},
});
