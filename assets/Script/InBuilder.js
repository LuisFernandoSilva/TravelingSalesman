

cc.Class({
    extends: cc.Component,

    properties: {

    },

  

    logisticGame: function(){
        cc.director.loadScene('MainLogistic');
    },

    inBuilder: function(){
        cc.director.loadScene('inBuilder');
    },

    return: function(){
        cc.director.loadScene('MainMenu');
    },
    

    // update (dt) {},
});
