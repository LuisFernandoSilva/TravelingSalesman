

cc.Class({
    extends: cc.Component,

    properties: {
        bgMusic: cc.AudioClip,

    },

    onload: function(){
        var audioUrl = this.bgMusic;
        cc.audioEngine.playEffect(audioUrl, true, 0.1);

    },

    mainMenu: function(){
        cc.director.loadScene('MainMenu');
    },

    mainLogistic: function(){
        cc.director.loadScene('MainLogistic');
    },

    gameLogistic:function(){
        cc.director.loadScene('GameLogisticFase01');
    },
    
    mainAds: function(){

        cc.director.loadScene('inBuilder');
    },
    mainAdmin: function(){

        cc.director.loadScene('inBuilder');;
    },
    mainContabil: function(){

        cc.director.loadScene('inBuilder');
    },
    mainComex: function(){

        cc.director.loadScene('inBuilder');
    },
    mainMarketing: function(){

        cc.director.loadScene('inBuilder');
    },



     update (dt) {



     },
});
