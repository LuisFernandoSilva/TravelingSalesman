
cc.Class({
    extends: cc.Component,

    properties: {
        hudQuestion06: cc.Node,
        hudQuestion07: cc.Node,
        hudQuestion08: cc.Node,
        hudQuestion09: cc.Node,     
        hudQuestion10: cc.Node,                    
        //hud QuestionCorrect
  
        questionCorrect1: cc.Node,
       //hud QuestionErase
        questionErase: cc.Node,
        //hud finalquestion
        finalQuestionFase02: cc.Node,
        moveHudFase02: cc.Node,
        questionRecoveryFase2: cc.Node,
        scoreLabel: cc.Label,
        score: 0,
        moveControler: 1,

    },

     onLoad () {

         this.node.on('touchstart', this.moveHud, this);
 
     },

    moveHud:function(){

        let numero = parseInt(this.scoreLabel.string);

       
        this.questionErase.active = false;
        this.questionCorrect1.active = false;
    
        
        
        if(this.moveControler == 6){

           this.hudQuestion07.setPosition(-32,41);
           this.hudQuestion06.setPositionX(1087);
           this.moveControler = 7;

        }else if(this.moveControler == 7){

           this.hudQuestion08.setPosition(-43,44);
           this.hudQuestion07.setPositionX(1087);
           this.moveControler = 8;

        }else if (this.moveControler == 8){

           this.hudQuestion09.setPosition(-27,-27);
           this.hudQuestion08.setPositionX(1906);
           this.moveControler = 9;

        }else if(this.moveControler == 9){

           this.hudQuestion10.setPosition(-35,24);
           this.hudQuestion09.setPositionX(1087);
           this.moveControler = 10;

        }else if(this.moveControler == 10){
        
            if(numero < 700){
                
                this.hudQuestion10.setPositionX(1906);
                this.moveHudFase02.active = false;
                this.questionRecoveryFase2.setPosition(0,-80);
            }else{
                this.hudQuestion10.setPositionX(1906);
                this.finalQuestionFase02.setPosition(0,-80);
                this.moveHudFase02.active = false;;
            } 

        }

  
    },

    // update (dt) {},
});
