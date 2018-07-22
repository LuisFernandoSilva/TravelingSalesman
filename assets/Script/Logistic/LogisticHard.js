cc.Class({
    extends: cc.Component,

    properties: {
        //labels do hudGame
        scoreLabel: cc.Label,
        lifeLabel: cc.Label,
        //label do hudquestion
        opcaoLabel: cc.Label,
        //hud QuestionCorrect
        questionCorrect1: cc.Node,
        //hud QuestionErase
        questionErase: cc.Node,
        //hud question
        hudQuestion: cc.Node,

        score:0,
        life:5,
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
        let vida = parseInt(this.lifeLabel.string);
       

        if(this.questionControler == 1){

              if(options == 'opção B'){
                  this.hudQuestion.active = false;//faz com que as propriedades da pergunta se desativem   
                  this.questionCorrect1.active = true;//ativa o node da resposta correta
                  this.addScore(100 );//adiciona a pontuação
                }else{
                  this.hudQuestion.active = false;   
                  this.questionErase.active = true;//ativa o node da resposta errada
                  this.lostLife(1);// retira um ponto de vida
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
                  this.lostLife(1 + vida);
               }   
        } 

        if(this.questionControler == 3){
            if(options == 'opção D'){
                this.hudQuestion.active = false;  
                this.questionCorrect1.active = true;
                this.addScore(100 + numero);

            }else{
                this.hudQuestion.active = false;   
                this.questionErase.active = true;
                this.lostLife(1 + vida);
            }   
        }
        if(this.questionControler == 4){

            if(options == 'opção C'){
                this.hudQuestion.active = false;   
                this.questionCorrect.active = true;
                this.addScore(100 + numero);
              }else{
                this.hudQuestion.active = false;   
                this.questionErase.active = true;
                this.lostLife(1+ vida);
            }
        }
     
        if(this.questionControler == 5){

            if(options == 'opção D'){
                this.hudQuestion.active = false;  
                this.questionCorrect1.active = true;
                this.addScore(100 + numero);

            }else{
                this.hudQuestion.active = false;   
                this.questionErase.active = true;
                this.lostLife(1 + vida);
            }   
        } 

        if(this.questionControler == 6){

           if(options == 'opção B'){
              this.hudQuestion.active = false;  
              this.questionCorrect1.active = true;
              this.addScore(100 + numero);

            }else{
              this.hudQuestion.active = false;   
              this.questionErase.active = true;
              this.lostLife(1 + vida);
            }   
        }

        if(this.questionControler == 7){

            if(options == 'opção D'){
                this.hudQuestion.active = false;   
                this.questionCorrect.active = true;
                this.addScore(100 + numero);
            }else{
                this.hudQuestion.active = false;   
                this.questionErase.active = true;
                this.lostLife(1+ vida);
           }
        }
 
        if(this.questionControler == 8){

            if(options == 'opção B'){
                this.hudQuestion.active = false;  
                this.questionCorrect1.active = true;
                this.addScore(100 + numero);
            }else{
                this.hudQuestion.active = false;   
                this.questionErase.active = true;
                this.lostLife(1 + vida);
            }   
        } 

        if(this.questionControler == 9){

            if(options == 'opção C'){
                this.hudQuestion.active = false;  
                this.questionCorrect1.active = true;
                this.addScore(100 + numero);
            }else{
                this.hudQuestion.active = false;   
                this.questionErase.active = true;
                this.lostLife(1 + vida);
            }   
        }

        if(this.questionControler == 10){

            if(options == 'opção A'){
                this.hudQuestion.active = false;  
                this.questionCorrect1.active = true;
                this.addScore(100 + numero);
            }else{
                this.hudQuestion.active = false;   
                this.questionErase.active = true;
                this.lostLife(1 + vida);
            }   
        }

    },
    /**
     * Função que adiciona os pontos de score, e seta label de score
     *  na hud de game. 
     * @param ponto
     */
    addScore: function(ponto){
        
        this.score+= ponto;
        this.scoreLabel.string = this.score.toString();
     },
   /**
     * Função que diminui os pontos de vida, e seta label de vida
     *  na hud de game. 
     * @param ponto
     */
    lostLife: function(ponto){

        this.life -= ponto;
        this.lifeLabel.string = this.life;
    },
 


    // update (dt) {},
});
