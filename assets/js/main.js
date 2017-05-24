//validación del input del teléfono en la parte de registro 
//primero valido que el número de teléfono ingresado al hacer click "BECOME A MEMBER" sea de 9 números
var becomeDriver = document.getElementById("phone-input");
becomeDriver.addEventListener("click", function(){
  var phone = document.getElementById("phone").value;
  if(phone.length != 9){
    alert("Debe ingresar un teléfono de 9 dígitos");
  } else {
    var msj = document.getElementById("phone");
    msj.innerHTML = "Todo OK";
    alert("Su número de teléfono se ha registrado de manera correcta");
  }
});


//a continuación las funciones de validación de coordenadas
var equis = document.getElementById("x");
var yehyeh = document.getElementById("y");

document.getElementById("startBtn").addEventListener("click",function(){

  if(validarCoordenadaX(equis)){
    if(validarCoordenadaY(yehyeh)){
      document.getElementsByClass("coord").classList.toggle("display-none");
      document.getElementById("playGame").classList.toggle("display-in");
    }
  }
});

function validarCoordenadaX(equis){ //NO ME FUNCIONAN ESTAS VALIDACIONES, LAS ODIO XD
    var coordenada = /^[0-9]$/;
    if(equis.value.match(coordenada) || equis.value <= 10){
        return true;
    }else{
        equis.value = "";
        alert("Aquí debes ingresar un número entre 1 y 10");
        x.focus();
        return false;
    }
}

function validarCoordenadaY(yehyeh){
    var yehyeh = /^[0-9]$/;
    if(yehyeh.value.match(guai) && yehyeh.value <= 6){
        return true;
    }else{
        yehyeh.value = "";
        alert("Aquí debes ingresar un número entre 1 y 6");
        yehyeh.focus();
        return false;
    }
}

//luego creo una clase Auto que tenga dos atributos (posición x e y)
class Auto { 

    constructor (posicion_x, posicion_y) {
        this.posicion_x = posicion_x;
        this.posicion_y = posicion_y;
    }

    // Cada uno de estos métodos debe sumar o restar 1 de posición x o y dependiendo de la dirección a la que vaya
    avanzar(x, y){
        return "You're moving forward";
    }

    ir_izquierda(x, y){
        return "You're moving left";
    }

    ir_derecha(x, y){
        return "You're moving right";
    }

    retroceder(x, y){
        return "You're moving back";
    }
}



var equis = document.getElementById("x").value;
var yehyeh = document.getElementById("y").value;
var car = new Auto(posicion_x, posicion_y); //creo instancia 

/*document.addEventListener("keydown", function (e) {
 
        if (=== 37) {
       ;
        }
        if (=== 38) {
           ;
        }
        if (=== 39) {
           ;
        }
        if ( === 40) {
            ;
        }
    }, false);*/

/*document.addEventListener('keydown', function(e) {
    }, false);
    left arrow  37  up arrow  38
    right arrow 39  down arrow*/

//Ejemplo de tablero enviado por Blanca

function imprimirTablero() {
    //Defino el tablero
    var tablero = [
        [ , , , , , , , , , ],
        [ , , , , , , , , , ],
        [ , , , , , , , , , ],
        [ , , , , , , , , , ],
        [ , , , , , , , , , ],
        [ , , , , , , , , , ],
    ];

//mono auto
//coordenadas usuario   

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("tablero");

//coordenadas que pondrá el usuario
tablero [x][y] = "autito.src"; //image.src
var autito  = document.createElement("img");
autito.src = "assets/img/car.png";
var papaAutito = document.getElementById("tablero");

papaAutito.appendChild(autito);

/* set attr src
autito.src =
var divCont = document.createElement("div"); */

//Variables temporales
var fila, casilla;

//Recorro el arreglo para dibujar el tablero
for(var i = 0; i<tablero.length; i++){
  fila = document.createElement("div");
  fila.classList.add("fila");
  for(var j = 0; j<tablero[i].length; j++){
    casilla = document.createElement("div");
    casilla.innerHTML = tablero[i][j];
    casilla.classList.add("casilla")
    fila.appendChild(casilla);
  }
  divTablero.appendChild(fila);
}
}
