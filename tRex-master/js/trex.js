(function () {

    const FPS = 300;
    const PROB_NUVEM = 1;
    var gameLoop;
    var gameLoop2;
    var deserto;
    var dino;
    var contar;
    var contar1;
    var contar2;
    var contar3;
    var contar4;
    var nuvens = [];
    var i = 0;
    var começar = 0;
    var cont = ['um','dois','tres','quatro','cinco','seis','sete','oito','nove','nove'];
    var contAument = 1000;
    var pont = 0;
    var auxpont = 0;
    var cact;
    var cactsVG = [];
    var pentV = [];


    function init () {
        deserto = new Deserto();
        dino = new Dino();
        gameLoop = setInterval(run, 1000/FPS);
        contar = new Contador0();
        contar1 = new Contador1();
        contar2 = new Contador2();
        contar3 = new Contador3();
        contar4 = new Contador4();


        gameLoop2 = setInterval(run2, 100);
    }

   

    window.addEventListener("keydown", function (e) {


    if (parseInt(dino.element.style.bottom) == 0 ) {    
        
    if (e.key == "ArrowUp" && dino.status == 0 && parseInt(dino.element.style.bottom) == 0 
            || e.key == "ArrowUp" && começar == 0 ){
        console.log(parseInt(dino.element.style.bottom));
         dino.status = 1;
         começar = 1;
     }else if (e.key == "ArrowDown" && parseInt(dino.element.style.bottom) == 0 ){
         dino.status = 4;
     }else dino.status = 1;


 }



        if(e.key == "p"){
        começar = 0;
        dino.status = 0;
        }


    });

    //-- contador
    


    function Contador0() {
        this.element = document.createElement("div");
        this.element.className = "zero";
        this.element.style.right = "-430px";
        this.element.style.top = "2px";
        deserto.element.appendChild(this.element);

         var current = 0;

      this.frame = function(VetorFrame) {

          this.element.className = VetorFrame[current];
        
          if (++current >= VetorFrame.length) {
              current = 0;
              //consle.log("aqui");
          }
           return current;                
  }// frame


  this.AnimaCont = function(){

          return contar.frame(cont);
      }

    }


    function Contador1() {
        this.element = document.createElement("div");
        this.element.className = "zero";
        this.element.style.right = "-440px";
        this.element.style.top = "-8px";

        deserto.element.appendChild(this.element);

         var current = 0;

      this.frame = function(VetorFrame) {

          this.element.className = VetorFrame[current];
        
          if (++current >= VetorFrame.length) {
              current = 0;
              //consle.log("aqui");
          }
          return current;  
                          
  }// frame


  this.AnimaCont = function(){

         return contar1.frame(cont);
      }

    }

    function Contador2() {
        this.element = document.createElement("div");
        this.element.className = "zero";
        this.element.style.right = "-450px";
        this.element.style.top = "-18px";
        deserto.element.appendChild(this.element);

         var current = 0;

      this.frame = function(VetorFrame) {

          this.element.className = VetorFrame[current];
        
          if (++current >= VetorFrame.length) {
              current = 0;
              //consle.log("aqui");
          }
                return current;          
  }// frame


  this.AnimaCont = function(){

          return contar2.frame(cont);
      }

    }

    function Contador3() {
        this.element = document.createElement("div");
        this.element.className = "zero";
        this.element.style.right = "-460px";
        this.element.style.top = "-28px";
        deserto.element.appendChild(this.element);

         var current = 0;

      this.frame = function(VetorFrame) {

          this.element.className = VetorFrame[current];
        
          if (++current >= VetorFrame.length) {
              current = 0;
              //consle.log("aqui");
          }

          return current;  
                          
  }// frame


  this.AnimaCont = function(){

        return contar3.frame(cont);
      }

    }

function Contador4() {
        this.element = document.createElement("div");
        this.element.className = "zero";
        this.element.style.right = "-470px";
        this.element.style.top = "-38px";
        deserto.element.appendChild(this.element);

         var current = 0;

      this.frame = function(VetorFrame) {

          this.element.className = VetorFrame[current];
        
          if (++current >= VetorFrame.length) {
              current = 0;
              //consle.log("aqui");
          }
          return current;  
                          
  }// frame


  this.AnimaCont = function(){

         return contar4.frame(cont);
      }

    }

    


    //-------------------------------------------------contador

    function Deserto () {
        this.element = document.createElement("div");
        this.element.className = "deserto";
        document.body.appendChild(this.element);

        this.chao = document.createElement("div");
        this.chao.className = "chao";
        this.chao.style.backgroundPositionX = "0px";
        this.element.appendChild(this.chao);
    }

    Deserto.prototype.mover = function() {
     //console.log(parseInt(this.chao.style.backgroundPositionX));
    if(parseInt(this.chao.style.backgroundPositionX) > -1000 ){
        this.chao.style.backgroundPositionX = (parseInt(this.chao.style.backgroundPositionX) - 1) + "px";
        

    }else{
        
        this.chao.style.backgroundPositionX = 0+"px";
    }


    

    }


    function Dino () {
        this.sprites = {
            'correr1':'-765px',
            'correr2':'-809px',
            'pulando':'-677px',
            'correrd1':'-941px',
            'correrd2':'-1000px'
        };
        this.status = 0; // 0:correndo; 1:subindo; 2: descendo; 3: agachado
        this.alturaMaxima = "80px";
        this.element = document.createElement("div");
        this.element.className = "dino";
        this.element.style.backgroundPositionX = this.sprites.correr1;
        this.element.style.bottom = "0px";
        deserto.element.appendChild(this.element);
    }   
    
    Dino.prototype.correr = function () {
        if (this.status == 0) {
            this.element.className = "dino";
            this.element.style.backgroundPositionX = (this.element.style.backgroundPositionX == this.sprites.correr1)?this.sprites.correr2:this.sprites.correr1;
        }
        else if (this.status == 1) {
            this.element.className = "dino";
            this.element.style.backgroundPositionX = this.sprites.pulando;
            this.element.style.bottom = (parseInt(this.element.style.bottom) + 1) + "px";
            if (this.element.style.bottom == this.alturaMaxima) this.status = 2;
        }
        else if (this.status == 2) {
            this.element.className = "dino";
            this.element.style.bottom = (parseInt(this.element.style.bottom) - 1) + "px";
            if (this.element.style.bottom == "0px") this.status = 0;
        }else  if (this.status == 4) {
            this.element.className = "dinod";
            this.element.style.backgroundPositionX = (this.element.style.backgroundPositionX == this.sprites.correrd1)?this.sprites.correrd2:this.sprites.correrd1;
          

        }
    }






  /*  Dino.prototype.corredeitado = function () {

         this.sprites = {
            'correrd1':'-941px',
            'correrd2':'-1000px'
            
        };

        if (this.status == 4) {
            this.element.className = "dinod";
            this.element.style.backgroundPositionX = (this.element.style.backgroundPositionX == this.sprites.correrd1)?this.sprites.correrd2:this.sprites.correrd1;
            this.status = 0;

        }
    }*/


    function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
    }

    function Nuvem () {
        this.element = document.createElement("div");
        this.element.className = "nuvem";
        this.element.style.right = "0px";
        this.element.style.top = getRandom(29) + "px";
        deserto.element.appendChild(this.element);
    }

    Nuvem.prototype.mover = function () {
        this.element.style.right = (parseFloat(this.element.style.right) + 0.4) + "px";
    }


    // --- obstaculos -- //


    function CactusG () {
        this.element = document.createElement("div");
        this.element.className = "cactuG";
        this.element.style.right = "0px";
        this.element.style.top = "98px";
        deserto.element.appendChild(this.element);
    }

    CactusG.prototype.mover = function () {
        this.element.style.right = (parseFloat(this.element.style.right) + 1) + "px";
    }


      function CactusP () {
        this.element = document.createElement("div");
        this.element.className = "cactu";
        this.element.style.right = "0px";
        this.element.style.top = "110px";
        deserto.element.appendChild(this.element);
    }

    CactusP.prototype.mover = function () {
        this.element.style.right = (parseFloat(this.element.style.right) + 1) + "px";
    }



     function Pent () {
        this.sprites = {
            'correr1':'-134px',
            'correr2':'-180px',
        };
        this.element = document.createElement("div");
        this.element.className = "pentossauro";
        this.element.style.backgroundPositionX = this.sprites.correr1;
        this.element.style.right = "0px";
        this.element.style.top = "50px";
        deserto.element.appendChild(this.element);
    }   
    
    Pent.prototype.voar = function () {
        
        if(this.element.style.backgroundPositionX == this.sprites.correr1){

            this.element.style.backgroundPositionX = this.sprites.correr2

        }else if(this.element.style.backgroundPositionX == this.sprites.correr2){

            this.element.style.backgroundPositionX = this.sprites.correr1
        }


        this.element.style.right = (parseFloat(this.element.style.right) + 1) + "px";

    }



    // ----------------------------------- obstaculos ----------------------------


    function run () {
         //console.log(pont); // pontuação

        // mudar cor do cenario

        $(document).ready(function(){
            $('.deserto').css('background' , '#0B0B0B');
        });

        //----------------------------------------------------------

        if (começar){ // if condição para o jogo começar seta pra cima
        dino.correr();
        //dino.corredeitado();
        deserto.mover();
       

      
        

        if (Math.floor(Math.random()*1000) <= PROB_NUVEM) {
            nuvens.push(new Nuvem());

        }
        nuvens.forEach(function (n) {
            if(parseInt(n.element.style.right) > 600){

             n.element.remove();
            }
            
            n.mover();

        });



//---------------------------------------------------------------------------------------

        if (Math.floor(Math.random()*1000) <= PROB_NUVEM) {
            
        if (Math.random()*2 <= PROB_NUVEM){
            cactsVG.push(new CactusP());
        }else{
            cactsVG.push(new CactusG());
        }

        }


        cactsVG.forEach(function (n) {
            if(parseInt(n.element.style.right) > 600){

             n.element.remove();
            }
            
            n.mover();

        });
//-------------------------------------------------------------------------------------------

 if (Math.floor(Math.random()*1000) <= PROB_NUVEM) {
            
        if (Math.random()*2 <= PROB_NUVEM){
            pentV.push(new Pent());
        }

        }


        pentV.forEach(function (n) {
            if(parseInt(n.element.style.right) > 600){

             n.element.remove();
            }
            
            n.voar();

        });




    }// if condição para o jogo começar seta pra cima

 

        
        //Em caso de game over
        //clearInterval(gameLoop);
    }

    function run2 (){

    if (começar){ // if condição para o jogo começar seta pra cima
        pont++; // pontuação
       
    if(contar.AnimaCont() == 9){
        
        if(contar1.AnimaCont() == 9){
            
            if(contar2.AnimaCont() == 9){
             
                if(contar3.AnimaCont() == 9){
                 
                }
            }
        }
    }

    
    
    
    
   
    
   
    }
    }

    
   
    
    
    init(contAument);
})();