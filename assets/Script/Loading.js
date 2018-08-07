

cc.Class({
    extends: cc.Component,

    properties: {
        _time: 5,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.scheduleOnce(this.loadingScene, this._time);
    },
    loadingScene: function(){
        cc.director.loadScene('MainMenu');
    },

    // update (dt) {},
});
