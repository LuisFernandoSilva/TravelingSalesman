

cc.Class({
    extends: cc.Component,

    properties: {

    },

  

    onLoad () {
        this.node.on('touchend', function(event){
            cc.director.loadScene('Loading');});
    },

    start () {

    },

    // update (dt) {},
});
