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
        
        score:10,
        life:5,
        questionControler: 1,

    },

    
    onLoad () {

        this.node.on('touchend',function(event){
            this.question();


        },this);
    },

    question: function(){
        let options = this.opcaoLabel.string;

        if(this.questionControler==1){
              if(options == 'opção A'){
                  this.hudQuestion.active = false;   
                  this.questionCorrect.active = true;
                  this.addScore(100);
              }else{
                  this.hudQuestion.active = false;   
                  this.questionErase.active = true;
                  this.lostLife(1);
              }
        }
        if(this.questionControler==2){
              if(options == 'opção B'){
                  this.hudQuestion.active = false;  
                  this.questionCorrect1.active = true;
                  let num = this.score;
                  console.log(num);
                  //this.addScore(10);
              }else{
                  this.hudQuestion.active = false;   
                  this.questionErase.active = true;
                  this.lostLife(1);
              }   
          } 
    },

    addScore: function(ponto){
        
    let num =  this.score;
        num += ponto;
        console.log(this.score);
        num = this.score;
        this.scoreLabel.string = num.toString();
        
        console.log(this.score);
       

    },
    lostLife: function(ponto){
        this.life -= ponto;
        this.lifeLabel.string = this.life;
    },
 


    // update (dt) {},
});
