

cc.Class({
    extends: cc.Component,

    properties: {
        easyQuestionNode: cc.Node,
        mediumquestionNode: cc.Node,
        hardQuestionNode: cc.Node,
        finalQuestion: cc.Node,
        mainLogisticGame: cc.Node,
    },

    onLoad () {

        this.node.on("touchend",this.moveMain, this);
    },

    moveMain: function () {


        this.easyQuestionNode.active = false;

        this.mediumquestionNode.active = false;
        this.hardQuestionNode.active = false; 

        this.finalQuestion.active = false;
        this.mainLogisticGame.setPosition(-8,4);

    },

    // update (dt) {},
});
