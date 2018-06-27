

cc.Class({
    extends: cc.Component,

    properties: {
        radioButton: {default: [],type: cc.Toggle},
        userEditBox:{default: null, type:cc.EditBox},
        buttonOK:{default: null, type: cc.Node},
        userLabel:{default:null, type: cc.Label},
        hudQuestion1:{default: null, type: cc.Node},
        hudCadaster:{default:null, type:cc.Node},
        userMale:{default: null, type: cc.Node},
        userFemale:{default: null, type:cc.Node},
        userDefault:{default: null, type:cc.Node},
        userLabel:{default:null, type:cc.Label},


    },

  

    onLoad () {
        this.node.on('touchend', function(){
            this.hudQuestion1.setPositionX(-1000);
            this.hudCadaster.setPosition(32,-70);

        },this);
        this.hudQuestion1.setPositionX(-3);
        this.hudCadaster.setPositionY(466)
    },
    singleLineEditBoxDidEndEditing: function(sender) {
        cc.log(sender.node.name +  this.userEditBox.string);
    },    
    radioButtonClicked: function(toggle) {
        var index = this.radioButton.indexOf(toggle);
       
        switch(index) {
          case 0:
            this.buttonOK.on('touchend',function(){
                this.hudQuestion1.setPosition(-1,-3);
                this.hudCadaster.setPosition(230,466);
                
                this.userLabel.string = this.userEditBox.string;
                this.userMale.setPosition(-104,-2);
                this.userDefault.setPosition(-105,47);
            },this); 
 

            break;

          case 1:
            this.buttonOK.on('touchend',function(){
                this.hudQuestion1.setPosition(-1,-3);
                this.hudCadaster.setPosition(230,466);
                
                this.userEditBox.string = this.userLabel.string;
                this.userFemale.setPosition(-104,-2);
                this.userDefault.setPosition(-65,45);
            },this);   
   
            break;

          default:
            this.buttonOK.on('touchend',function(){
                this.hudQuestion1.setPosition(-1,-3);
                this.hudCadaster.setPosition(230,466);
                
                this.userLabel = "user default";
                this.userDefault.setPosition(-104,-2);
    
            },this);
              break;
        }
      
    },  

    // update (dt) {},
});
