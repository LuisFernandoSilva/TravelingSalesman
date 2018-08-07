
cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel:cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let dataScore = cc.sys.localStorage.getItem('score');
        this.scoreLabel.string = dataScore.toString();
    },

    start () {

    },

    // update (dt) {},
});
