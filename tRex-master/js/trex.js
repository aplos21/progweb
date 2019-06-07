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
    var dianoite;
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
    var cactR;
    var pentR;
    var a = 1;
    var resultPon = [0,0,0,0];
    var w = 0;
    var game;


    function init () {
        deserto = new Deserto();
        dino = new Dino();
        gameLoop = setInterval(run, 1000/FPS);
        contar = new Contador0();
        contar1 = new Contador1();
        contar2 = new Contador2();
        contar3 = new Contador3();

        contar4 = new Contador4();
        contar5 = new Contador5();
        contar6 = new Contador6();
        contar7 = new Contador7();
        contar8 = new Contador8();
        contar9 = new Contador9();

      


        gameLoop2 = setInterval(run2, 100);
        dianoite = setInterval(run3, 60000);
    }

   

    window.addEventListener("keydown", function (e) {


    if (parseInt(dino.element.style.bottom) == 0 ) {    
        
    if (e.key == "ArrowUp" && dino.status == 0 && parseInt(dino.element.style.bottom) == 0 
            || e.key == "ArrowUp" && começar == 0 ){
        
         dino.status = 1;
         começar = 1;
     }else if (e.key == "ArrowDown" && parseInt(dino.element.style.bottom) == 0 ){
         dino.status = 4;
     }else dino.status = 1;

     if(e.key == "p"){
        começar = 0;
        dino.status = 0;
        }



 }



        

    });

    //-- contador
    


    function Contador0() {
        this.element = document.createElement("div");
        this.element.className = "zero";
        this.element.style.right = "-370px";
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
        this.element.style.right = "-380px";
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
        this.element.style.right = "-390px";
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
        this.element.style.right = "-400px";
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
        this.element.style.right = "-410px";
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

///---------------------------------------------------------------------------------------

    function Contador5() {
        this.element = document.createElement("div");
        this.element.className = "zero";
        this.element.style.right = "-430px";
        this.element.style.top = "-48px";
        deserto.element.appendChild(this.element);

         var current = 0;

      this.frame = function(n) {

          this.element.className = cont[n];
                 
  }// frame


  this.AnimaCont = function(n){

          return contar5.frame(n);
      }

    }


    function Contador6() {
        this.element = document.createElement("div");
        this.element.className = "zero";
        this.element.style.right = "-440px";
        this.element.style.top = "-58px";

        deserto.element.appendChild(this.element);

         var current = 0;
      this.frame = function(n) {

          this.element.className = cont[n];
                 
  }// frame


  this.AnimaCont = function(n){

         return contar6.frame(n);
      }

    }

    function Contador7() {
        this.element = document.createElement("div");
        this.element.className = "zero";
        this.element.style.right = "-450px";
        this.element.style.top = "-68px";
        deserto.element.appendChild(this.element);

         var current = 0;

            this.frame = function(n) {

          this.element.className = cont[n];
                 
  }// frame



  this.AnimaCont = function(n){

          return contar7.frame(n);
      }

    }

    function Contador8() {
        this.element = document.createElement("div");
        this.element.className = "zero";
        this.element.style.right = "-460px";
        this.element.style.top = "-78px";
        deserto.element.appendChild(this.element);

         var current = 0;

    this.frame = function(n) {

          this.element.className = cont[n];
                 
  }// frame



  this.AnimaCont = function(n){

        return contar8.frame(n);
      }

    }


    function Contador9() {
        this.element = document.createElement("div");
        this.element.className = "zero";
        this.element.style.right = "-470px";
        this.element.style.top = "-88px";
        deserto.element.appendChild(this.element);

         var current = 0;

    this.frame = function(n) {

          this.element.className = cont[n];
                 
  }// frame



  this.AnimaCont = function(n){

        return contar9.frame(n);
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
            'correrd2':'-1000px',
            'mort': '-899px'
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
    return Math.floor(Math.random() * max + 1);
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



     function Pent (top) {
        this.sprites = {
            'correr1':'-134px',
            'correr2':'-180px',
        };
        this.element = document.createElement("div");
        this.element.className = "pentossauro";
        this.element.style.backgroundPositionX = this.sprites.correr1;
        this.element.style.right = "0px";
        this.element.style.top = top + "px";
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


function modulo(n) {
	var vetor = [];

	var c = n + "";  
	
	for(var i=0;i < c.length; ++i){
  
		vetor.push(c[i]);  
	}
  
	 return  vetor;
    }



   function Game () {
        this.element = document.createElement("div");
        this.element.className = "game";
        this.element.style.right = "200px";
        this.element.style.top = "50px";
        deserto.element.appendChild(this.element);
    }




    // ----------------------------------- obstaculos ----------------------------


    function run () {
         //console.log(pont); // pontuação

        // mudar cor do cenario


       

        

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



	if(Math.floor(Math.random()*500) <= PROB_NUVEM){


	if (getRandom(5) == 3){
		cactsVG.push(new CactusP());
	}


    }else if(cactR == 500){
    	//console.log(cactR);

     			
			
			if (Math.random()*2 <= PROB_NUVEM){
            	pentV.push(new Pent(100));
        		}

	}else if(pentR == 400){
		//console.log(cactR);



		if (Math.random()*2 <= PROB_NUVEM){
            		cactsVG.push(new CactusG());
        		}	
    }else if(Math.floor(Math.random()*1000) <= PROB_NUVEM && cactR > 400){
    	//console.log(cactR);



		if (Math.random()*2 <= PROB_NUVEM){
            		pentV.push(new Pent(80));
        		}	
    }else if(Math.floor(Math.random()*1000) <= PROB_NUVEM && cactR > 500 && pentR > 400){
    	//console.log(cactR);



            		pentV.push(new Pent(100));
        	
    }



cactsVG.forEach(function (n) {
            if(parseInt(n.element.style.right) > 600){

             n.element.remove();
             
            }
//colisão do dino com os cactus
//console.log(parseInt(dino.element.style.bottom));

cactR = parseInt(n.element.style.right);
if(cactR > 750){
	cactR = 0;
}

if(parseInt(dino.element.style.bottom) < 40 && parseInt(n.element.style.right) == 460){


	dino.element.className = "dino";
    dino.element.style.backgroundPositionX = '-897px';
 game = Game();


resultPon = modulo(pont);
resultPon = resultPon.slice(0).reverse();
console.log(resultPon);

    	resultPon.forEach(function (n) {
          
             if(w == 0){
             	contar5.AnimaCont(n-1);
             }else if (w == 1){
             	contar6.AnimaCont(n-1);
             }else if(w == 2){
             	contar7.AnimaCont(n-1);
             }else if(w == 3){
             	contar8.AnimaCont(n-1);
             }else if(w == 4){
             	contar9.AnimaCont(n-1);
             }

             w++;

            });

w = 0;

options.innerHTML = options.innerHTML + "<input type='button' class='botao'>";


        deserto.element.appendChild(options);


 document.getElementById("options").onclick = function() {
                começar = 1;
                window.location.reload(true); 

            }


começar = 0;

}

		//console.log(parseInt(dino.element.style.bottom));
            // colisao do cacuctus com o dino
            
            n.mover();

        });


//criando os pentossauros
//-------------------------------------------------------------------------------------------



        pentV.forEach(function (n) {

        	pentR = parseInt(n.element.style.right);

        	if(pentR> 750){
				pentR = 0;
			}


            if(parseInt(n.element.style.right) > 600){

             n.element.remove();
            
            }

      if(parseInt(dino.element.style.bottom) > 50 && parseInt(n.element.style.right) == 460 && parseInt(n.element.style.top) != 100 ){

		options.innerHTML = options.innerHTML + "<input type='button' class='botao'>";


        deserto.element.appendChild(options);

        game = Game();


 		document.getElementById("options").onclick = function() {
                começar = 1;
                window.location.reload(true); 

            }
         começar = 0;



            }


       if(parseInt(dino.element.style.bottom) < 30 && parseInt(n.element.style.right) == 460 && parseInt(n.element.style.top) == 100 ){

		options.innerHTML = options.innerHTML + "<input type='button' class='botao'>";
		 game = Game();


        deserto.element.appendChild(options);


 		document.getElementById("options").onclick = function() {
                começar = 1;
                window.location.reload(true); 

            }
         começar = 0;



            }
            

            n.voar();

        });




    }// if condição para o jogo começar seta pra cima

 

        
        //Em caso de game over
        
    }

    function run2 (){


    if (começar){ // if condição para o jogo começar seta pra cima
        pont++; // pontuação
       
    if(contar.AnimaCont() == 9){
        
        if(contar1.AnimaCont() == 9){
            
            if(contar2.AnimaCont() == 9){
             
                if(contar3.AnimaCont() == 9){
                	 
                	 if(contar4.AnimaCont() == 9){
                 
                			}
                 
                }
            }
        }
    }



    
    

    
   
    
   
    }
    }

    function run3 (){

    if (começar){ 

    	if(a == 1){
 		   $(document).ready(function(){$('.deserto').css('background' , '#0B0B0B');});
    		
    		//console.log('1');
    	
    	  a = 2;
    	}else if(a == 2){
    		a =1;
    		$(document).ready(function(){$('.deserto').css('background' , '#F8F8FF');});
    		//console.log('2');
    		 

    	}


    }


    }

    
   
    //#F8F8FF
    
    init(contAument);
})();