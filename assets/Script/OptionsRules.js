

cc.Class({
    extends: cc.Component,

    properties: {
        respostaLabel:{
            default: null,
            type: cc.Label
        },
        opcao_a: {
            default: null,
            type: cc.Label
        },
        opcao_b: {
            default: null,
            type: cc.Label
        },
        opcao_c: {
            default: null,
            type: cc.Label
        },
        opcao_d: {
            default: null,
            type: cc.Label
        },   
  

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        

        this.node.on('touchend', function(event){
            if(event.target.name == 'point_01')
            {
                this.respostaLabel.string = "opção A";
                this.opcao_a.node.setColor(cc.Color.BLUE);
                this.opcao_b.node.setColor(cc.Color.BLACK);
                this.opcao_c.node.setColor(cc.Color.BLACK);
                this.opcao_d.node.setColor(cc.Color.BLACK);

            }
            if(event.target.name == 'point_02')
            {
                this.respostaLabel.string = "opção B";
                this.opcao_a.node.setColor(cc.Color.BLACK);
                this.opcao_b.node.setColor(cc.Color.BLUE);
                this.opcao_c.node.setColor(cc.Color.BLACK);
                this.opcao_d.node.setColor(cc.Color.BLACK);
            }
            if(event.target.name == 'point_03')
            {
                this.respostaLabel.string = "opção C";
                this.opcao_a.node.setColor(cc.Color.BLACK);
                this.opcao_b.node.setColor(cc.Color.BLACK);
                this.opcao_c.node.setColor(cc.Color.BLUE);
                this.opcao_d.node.setColor(cc.Color.BLACK);
            }
            if(event.target.name == 'point_04')
            {
                this.respostaLabel.string = "opção D";
                this.opcao_a.node.setColor(cc.Color.BLACK);
                this.opcao_b.node.setColor(cc.Color.BLACK);
                this.opcao_c.node.setColor(cc.Color.BLACK);
                this.opcao_d.node.setColor(cc.Color.BLUE);
            }



        }, this);


    },


    // update (dt) {},
});
