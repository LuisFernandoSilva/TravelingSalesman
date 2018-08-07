
cc.Class({
    extends: cc.Component,

    properties: {

        scoreLabel: cc.Label,

         //label do hudquestion
         opcaoLabel: cc.Label,
         //hud QuestionCorrect

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
         this.score = numero;
        
 
         if(this.questionControler == 6){

            if(options == 'opção C'){
               this.hudQuestion.active = false;  
               this.questionCorrect1.active = true;
               this.addScore(100);
 
             }else{
              
               this.hudQuestion.active = false;   
               this.questionErase.active = true;
 
             }   
         }
 
         if(this.questionControler == 7){
 
             if(options == 'opção B'){
                 this.hudQuestion.active = false;   
                 this.questionCorrect1.active = true;
                 this.addScore(100);
             }else{
                 this.hudQuestion.active = false;   
                 this.questionErase.active = true;
   
            }
         }
  
         if(this.questionControler == 8){
 
             if(options == 'opção D'){
                 this.hudQuestion.active = false;  
                 this.questionCorrect1.active = true;
                 this.addScore(100);
             }else{
                 this.hudQuestion.active = false;   
                 this.questionErase.active = true;
      ;
             }   
         } 
 
         if(this.questionControler == 9){
 
             if(options == 'opção A'){
                 this.hudQuestion.active = false;  
                 this.questionCorrect1.active = true;
                 this.addScore(100);
             }else{
                 this.hudQuestion.active = false;   
                 this.questionErase.active = true;
       
             }   
         }
 
         if(this.questionControler == 10){
 
             if(options == 'opção D'){
                 this.hudQuestion.active = false;  
                 this.questionCorrect1.active = true;
                 this.addScore(100);
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
