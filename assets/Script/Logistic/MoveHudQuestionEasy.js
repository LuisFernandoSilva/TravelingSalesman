
cc.Class({
    extends: cc.Component,

    properties: {
        hudQuestion01: cc.Node,
        hudQuestion02: cc.Node,
        hudQuestion03: cc.Node,
        hudQuestion04: cc.Node,
        hudQuestion05: cc.Node,
        hudQuestion06: cc.Node,
        hudQuestion07: cc.Node,
        hudQuestion08: cc.Node,
        hudQuestion09: cc.Node,     
        hudQuestion10: cc.Node,                    
        //hud QuestionCorrect
        questionCorrect:  cc.Node,
        questionCorrect1: cc.Node,
       //hud QuestionErase
        questionErase: cc.Node,
        //hud finalquestion
        finalQuestion: cc.Node,

        moveControler: 1,

    },

     onLoad () {
         //this.hudQuestion01.setPositionX(-38);
         this.node.on('touchstart', this.moveHud, this);
 
     },

    moveHud:function(){

        this.questionCorrect.active = false;
        this.questionErase.active = false;
        this.questionCorrect1.active = false;
        this.finalQuestion.active = false;        
        
        if(this.moveControler == 1){

           this.hudQuestion02.setPosition(153,-290);
           this.hudQuestion01.setPositionX(1087);
           this.moveControler = 2;
 
        }else if (this.moveControler == 2){

           this.hudQuestion03.setPosition(60,-58);
           this.hudQuestion02.setPositionX(1906);
           this.moveControler = 3;
           
        }else if(this.moveControler == 3){

           this.hudQuestion04.setPosition(32,3);
           this.hudQuestion03.setPositionX(1087);
           this.moveControler = 4;

        }else if(this.moveControler == 4){

           this.hudQuestion05.setPosition(7,-3);
           this.hudQuestion04.setPositionX(1087);
           this.moveControler = 5;
 
        }else if (this.moveControler == 5){

           this.hudQuestion06.setPosition(-45, 28);
           this.hudQuestion05.setPositionX(1906);
           this.moveControler = 6;

        }else if(this.moveControler == 6){

           this.hudQuestion07.setPosition(-51,31);
           this.hudQuestion06.setPositionX(1087);
           this.moveControler = 7;

        }else if(this.moveControler == 7){

           this.hudQuestion08.setPosition(-62,37);
           this.hudQuestion07.setPositionX(1087);
           this.moveControler = 8;

        }else if (this.moveControler == 8){

           this.hudQuestion09.setPosition(-50,-35);
           this.hudQuestion08.setPositionX(1906);
           this.moveControler = 9;

        }else if(this.moveControler == 9){

           this.hudQuestion10.setPosition(-49,15);
           this.hudQuestion09.setPositionX(1087);
           this.moveControler = 10;

        }else if(this.moveControler == 10){

            this.hudQuestion10.setPositionX(1906);
            this.finalQuestion.active = true;

        }

  
    },

    // update (dt) {},
});
