
cc.Class({
    extends: cc.Component,

    properties: {

        scoreLabel: cc.Label,

         //label do hudquestion
         opcaoLabel: cc.Label,
         //hud QuestionCorrect
         questionCorrect:  cc.Node,
         questionCorrect1: cc.Node,
         //hud QuestionErase
         questionErase: cc.Node,
         //hud question
         hudQuestion: cc.Node,
 
         score:0,
        
         questionControler: 1,
 
     },
 
     
     onLoad () {
         //faz a acao do toque no botao de ok
         this.node.on('touchstart',function(){
             this.question();
         },this);
     },
     /**
      * Função que verifica em qual pergunta esta e se a opção escolhida 
      * e a correta.
      * 
      */
     question: function(){
         let options = this.opcaoLabel.string;
         let numero = parseInt(this.scoreLabel.string);//converte a string em int
         this.score = 0;
        
 
         if(this.questionControler == 1){

            if(options == 'opção A'){
                this.hudQuestion.active = false;//faz com que as propriedades da pergunta se desativem   
                this.questionCorrect.active = true;//ativa o node da resposta correta
                this.addScore(100 );//adiciona a pontuação
              }else{
                this.addScore(0); 
                this.hudQuestion.active = false;   
                this.questionErase.active = true;//ativa o node da resposta errada
                
              }
      }
     
      if(this.questionControler == 2){
            if(options == 'opção A'){
                this.hudQuestion.active = false;  
                this.questionCorrect1.active = true;
                this.addScore(100 + numero);

              }else{
                this.hudQuestion.active = false;   
                this.questionErase.active = true;

             }   
      } 

      if(this.questionControler == 3){
          if(options == 'opção C'){
              this.hudQuestion.active = false;  
              this.questionCorrect1.active = true;
              this.addScore(100 + numero);

          }else{
              this.hudQuestion.active = false;   
              this.questionErase.active = true;
 
          }   
      }
      if(this.questionControler == 4){

          if(options == 'opção D'){
              this.hudQuestion.active = false;   
              this.questionCorrect1.active = true;
              this.addScore(100 + numero);
            }else{
              this.hudQuestion.active = false;   
              this.questionErase.active = true;

            }
    }
   
      if(this.questionControler == 5){

          if(options == 'opção B'){
              this.hudQuestion.active = false;  
              this.questionCorrect1.active = true;
              this.addScore(100 + numero);

          }else{
              this.hudQuestion.active = false;   
              this.questionErase.active = true;

          }   
        } 
        
        },
        
        addScore: function(ponto){
        
            this.score+= ponto;
            this.scoreLabel.string = this.score.toString();

            cc.sys.localStorage.setItem('score', this.score);
        },

         
    // update (dt) {},
});
