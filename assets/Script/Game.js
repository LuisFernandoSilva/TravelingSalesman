cc.Class({
    extends: cc.Component,

    properties: {
        //labels do hudGame
        scoreLabel: cc.Label,
        lifeLabel: cc.Label,
        //label do hudquestion
        opcaoLabel: cc.Label,
        //hud QuestionCorrect
        questionCorrect:  cc.Node,
        questionCorrect1: cc.Node,
        //hud QuestionErase
        questionErase: cc.Node,
        //hud question
        hudQuestion: cc.Node,
        num:0,
        score:0,
        life:5,
        questionControler: 1,

    },

    
    onLoad () {
        this.num = this.score;
        console.log("variavel iniciada no onload: "+this.num);

        this.node.on('touchstart',function(){
            this.question();


        },this);
    },

    question: function(){
        let options = this.opcaoLabel.string;
        

        let numero = parseInt(this.scoreLabel.string);
        console.log("num antes do primeiro if"+this.score);

        if(this.questionControler==1){
              if(options == 'opção A'){
                  this.hudQuestion.active = false;   
                  this.questionCorrect.active = true;
                  this.addScore(100);
                  console.log("num depois do segundo if "+this.score);
                  
              }else{
                  this.hudQuestion.active = false;   
                  this.questionErase.active = true;
                  this.lostLife(1);
              }
        }
        this.num = this.score;
        console.log("variavel num antes de ir p 3 if: "+this.num);
        if(this.questionControler==2){
              if(options == 'opção B'){
                  this.hudQuestion.active = false;  
                  this.questionCorrect1.active = true;
                  console.log("Score no terceiro if: "+this.score);
                  this.addScore(10 + numero);

              }else{
                  this.hudQuestion.active = false;   
                  this.questionErase.active = true;
                  this.lostLife(1);
              }   
          } 
    },

    addScore: function(ponto){
        
        this.score+= ponto;
        console.log("depois da soma "+this.score);
      
        this.scoreLabel.string = this.score.toString();
        
        console.log("Score quando sai da funcao: "+this.score);
       

    },
    lostLife: function(ponto){
        this.life -= ponto;
        this.lifeLabel.string = this.life;
    },
 


    // update (dt) {},
});
