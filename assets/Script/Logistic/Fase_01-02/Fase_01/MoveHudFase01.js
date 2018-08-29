
cc.Class({
    extends: cc.Component,

    properties: {
        hudQuestion01: cc.Node,
        hudQuestion02: cc.Node,
        hudQuestion03: cc.Node,
        hudQuestion04: cc.Node,
        hudQuestion05: cc.Node,
                    
      //hud QuestionCorrect
      questionCorrect:  cc.Node,
      questionCorrect1: cc.Node,
     //hud QuestionErase
      questionErase: cc.Node,
        //hud finalquestion
        finalQuestionFase01: cc.Node,

        moveHudFase01: cc.Node,
        questionRecovery: cc.Node,
        scoreLabel: cc.Label,

        moveControler: 1,

    },

     onLoad () {

         this.node.on('touchstart', this.moveHud, this);

     },

    moveHud:function(){

        let numero = parseInt(this.scoreLabel.string);
        this.questionCorrect.active = false;
        this.questionErase.active = false;
        this.questionCorrect1.active = false;

       
     
  

        if(this.moveControler == 1){

            this.hudQuestion02.setPosition(210,-281);
            this.hudQuestion01.setPosition(1107,-23);

           this.moveControler = 2;
 
        }else if (this.moveControler == 2){

           this.hudQuestion03.setPosition(113,-53);
           this.hudQuestion02.setPosition(1906, 40);
           this.moveControler = 3;
           
        }else if(this.moveControler == 3){

           this.hudQuestion04.setPosition(95,9);
           this.hudQuestion03.setPosition(1906, 40);
           this.moveControler = 4;

        }else if(this.moveControler == 4){

           this.hudQuestion05.setPosition(83,1);
           this.hudQuestion04.setPosition(1906, 40);
           this.moveControler = 5;
 
        }else if (this.moveControler == 5){
            
            if(numero < 400){
                this.hudQuestion05.setPosition(1906, 40);
                this.moveHudFase01.active = false;
                this.questionRecovery.setPosition(0,-80);
            }else{
                this.hudQuestion05.setPosition(1906, 40);
                this.finalQuestionFase01.setPosition(0,-80);
                this.moveHudFase01.active = false;
            }

        }

  
    },
});
