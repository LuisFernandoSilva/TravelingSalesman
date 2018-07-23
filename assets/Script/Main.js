

cc.Class({
    extends: cc.Component,

    properties: {
        mainGameLogistic: cc.Node,
        bgLogistic: cc.Node,
        mainGameADS: cc.Node,
        mainGameAdmin: cc.Node,
        mainGameContabil: cc.Node,
        mainGameComex: cc.Node,
        mainGameMarketing: cc.Node,

        hudGameMain: cc.Node,
        bgMain: cc.Node,
        screenGame: cc.Node,

    },

    main: function(){
        this.mainGameLogistic.active = false;
        this.mainGameADS.active = false;
        this.mainGameAdmin.active = false;
        this.mainGameContabil.active = false;
        this.mainGameComex.active = false;
        this.mainGameMarketing.active = false;

    },
    returnMain: function(){
        this.screenGame.active = false;
        this.hudGameMain.active = true;
        this.bgMain.active = true;
        this.mainGameLogistic.active = false;
        this.bgLogistic.active = false;

    },
    mainLogistic: function(){

        this.hudGameMain.active = false;
        this.bgMain.active = false;       
        this.bgLogistic.active = true;
        this.mainGameLogistic.active = true;

    },
    mainAds: function(){

        this.mainGameADS.active = true;
    },
    mainAdmin: function(){

        this.mainGameAdmin.active = true;
    },
    mainContabil: function(){

        this.mainGameContabil.active = true;
    },
    mainComex: function(){

        this.mainGameComex.active = true;
    },
    mainMarketing: function(){

        this.mainGameMarketing.active = true;
    },

    // update (dt) {},
});
