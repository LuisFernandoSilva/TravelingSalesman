

cc.Class({
    extends: cc.Component,

    properties: {
        hudQuestion01: cc.Node,
        hudQuestion02: cc.Node,
        hudQuestion03: cc.Node,
                    
        //hud QuestionCorrect
        questionCorrect1: cc.Node,
       //hud QuestionErase
        questionErase: cc.Node,
        //hud finalquestion
        finalQuestionFase02: cc.Node,

        moveHudExtraFase02: cc.Node,
        questionRecovery: cc.Node,
        scoreExtraLabel: cc.Label,

        moveControler: 1,

    },

     onLoad () {

         this.node.on('touchstart', this.moveHud, this);

     },

    moveHud:function(){

        let numero = parseInt(this.scoreExtraLabel.string);

        this.questionErase.active = false;
        this.questionCorrect1.active = false;
        
  


        if(this.moveControler == 1){

            this.hudQuestion02.setPosition(57,-54);
            this.hudQuestion01.setPosition(1107,-23);

           this.moveControler = 2;
 
        }else if (this.moveControler == 2){

            this.hudQuestion03.setPosition(26,10);
            this.hudQuestion02.setPosition(1906, 40);
            this.moveControler = 3;
            
         }else if (this.moveControler == 3){

            if(numero < 200){

                this.hudQuestion03.setPosition(1906, 40);
                this.moveHudExtraFase02.active = false;
                this.questionRecovery.setPosition(0,-80);
                

            }else{
                this.hudQuestion03.setPosition(1906, 40);
                this.moveHudExtraFase02.active = false;
                this.finalQuestionFase02.setPosition(0,-80);
   
           }
           
        }
    },

    // update (dt) {},
});
