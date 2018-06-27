

cc.Class({
    extends: cc.Component,

    properties: {
        caminho:{
            default: null,
            type: cc.EditBox
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
  
        btn_verifica:{
            default: null,
            type: cc.Node
        },         

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        

        this.node.on('touchend', function(event){
            if(event.target.name == 'point_01')
            {
                this.caminho.string = "opção A";
                this.opcao_a.node.setColor(cc.Color.BLUE);
                this.opcao_b.node.setColor(cc.Color.BLACK);
                this.opcao_c.node.setColor(cc.Color.BLACK);
                this.opcao_d.node.setColor(cc.Color.BLACK);

            }
            if(event.target.name == 'point_02')
            {
                this.caminho.string = "opção B";
                this.opcao_a.node.setColor(cc.Color.BLACK);
                this.opcao_b.node.setColor(cc.Color.BLUE);
                this.opcao_c.node.setColor(cc.Color.BLACK);
                this.opcao_d.node.setColor(cc.Color.BLACK);
            }
            if(event.target.name == 'point_03')
            {
                this.caminho.string = "opção C";
                this.opcao_a.node.setColor(cc.Color.BLACK);
                this.opcao_b.node.setColor(cc.Color.BLACK);
                this.opcao_c.node.setColor(cc.Color.BLUE);
                this.opcao_d.node.setColor(cc.Color.BLACK);
            }
            if(event.target.name == 'point_04')
            {
                this.caminho.string = "opção D";
                this.opcao_a.node.setColor(cc.Color.BLACK);
                this.opcao_b.node.setColor(cc.Color.BLACK);
                this.opcao_c.node.setColor(cc.Color.BLACK);
                this.opcao_d.node.setColor(cc.Color.BLUE);
            }



        }, this);


    },


    // update (dt) {},
});
