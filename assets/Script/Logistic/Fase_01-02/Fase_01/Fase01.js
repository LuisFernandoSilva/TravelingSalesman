
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
                console.log("Fase 01, questao 01 resposta certa "+options);  
                this.hudQuestion.active = false;//faz com que as propriedades da pergunta se desativem   
                this.questionCorrect.active = true;//ativa o node da resposta correta
                this.addScore(100 );//adiciona a pontuação
              }else{
                console.log("Fase 01, questao 01 resposta errada "+options);    
                this.addScore(0); 
                this.hudQuestion.active = false;   
                this.questionErase.active = true;//ativa o node da resposta errada
                
              }
      }
     
      if(this.questionControler == 2){


            if(options == 'opção A'){

                console.log("Fase 01, questao 02 resposta certa "+options);      
                this.hudQuestion.active = false;  
                this.questionCorrect1.active = true;
                this.addScore(100 + numero);

              }else{
                console.log("Fase 01, questao 02 resposta errada "+options);     
                this.hudQuestion.active = false;   
                this.questionErase.active = true;

             }   
      } 

      if(this.questionControler == 3){


          if(options == 'opção C'){
            console.log("Fase 01, questao 03 resposta certa "+options);    
              this.hudQuestion.active = false;  
              this.questionCorrect1.active = true;
              this.addScore(100 + numero);

          }else{
            console.log("Fase 01, questao 01 resposta errada "+options);   
              this.hudQuestion.active = false;   
              this.questionErase.active = true;
 
          }   
      }
      if(this.questionControler == 4){
 

          if(options == 'opção D'){
            console.log("Fase 01, questao 04 resposta certa "+options);   
              this.hudQuestion.active = false;   
              this.questionCorrect1.active = true;
              this.addScore(100 + numero);
            }else{
              console.log("Fase 01, questao 04 resposta errada "+options);   
              this.hudQuestion.active = false;   
              this.questionErase.active = true;

            }
    }
   
      if(this.questionControler == 5){


          if(options == 'opção B'){
            console.log("Fase 01, questao 05 resposta certa "+options);   
              this.hudQuestion.active = false;  
              this.questionCorrect1.active = true;
              this.addScore(100 + numero);

          }else{
            console.log("Fase 01, questao 05 resposta errada "+options);   
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
