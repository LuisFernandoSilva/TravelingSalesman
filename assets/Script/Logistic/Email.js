

cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: cc.Label,
        labelScore: cc.Label,

        userEditBox: cc.EditBox,
        emailEditBox: cc.EditBox,
        user: "",
        email: "",

    },

    onLoad () {


   },
    
    userEditBoxDidEndEditing: function(sender) {
        cc.log(sender.node.name +  this.userEditBox.string);
       
    },

    emailEditBoxDidEndEditing: function(sender) {
        cc.log(sender.node.name +  this.emailEditBox.string);
       
    },

    getScore: function(){
        let score = this.scoreLabel;
        this.labelScore.string = score.toString();

    },

    sendEmail: function(){
        this.user = this.userEditBox.string;
        this.email = this.emailEditBox.string;
    }

    // update (dt) {},
});
