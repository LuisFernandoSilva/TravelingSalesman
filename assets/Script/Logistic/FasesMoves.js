

cc.Class({
    extends: cc.Component,

    properties: {
 
        hudCadEmail: cc.Node,
       

        
        

    },

    onLoad () {     
   
    },

    moveMain: function () {

       cc.director.loadScene('MainLogistic');

    },

    moveExtraQuestionFase01: function(){
        
        cc.director.loadScene('GameLogisticFase01_extra');
 
    },

    moveFase02: function(){
        
        cc.director.loadScene('GameLogisticFase02');

    },

    moveExtraQuestionFase02: function(){
        
        cc.director.loadScene('GameLogisticFase02_extra');
    },

    moveFase03:function(){
        cc.director.loadScene('GameLogisticFase03');
    },

    moveExtraQuestionFase03: function(){
        
        cc.director.loadScene('GameLogisticFase03_extra');
    },    

    moveFase04:function(){
        cc.director.loadScene('GameLogisticFase04');
    },

    moveExtraQuestionFase04: function(){
        
        cc.director.loadScene('GameLogisticFase04_extra');
    },   

    moveFase05:function(){
        cc.director.loadScene('GameLogisticFase05');
    },

    moveExtraQuestionFase05: function(){
        
        cc.director.loadScene('GameLogisticFase05_extra');
    }, 
    
    moveFase06:function(){
        cc.director.loadScene('GameLogisticFase06');
    },

    moveExtraQuestionFase06: function(){
        
        cc.director.loadScene('GameLogisticFase06_extra');
    },   



    moveCadEmail: function(){
        
        this.hudCadEmail.setPosition(-35,-75);

    },

    exitEmail: function(){
        this.hudCadEmail.setPositionX(2000);
    },
    // update (dt) {},
});
