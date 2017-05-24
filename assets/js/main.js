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

//Ejemplo de tablero enviado por Blanca

function imprimirTablero() {
    //Defino el tablero
    var tablero = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
   

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("tablero");

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
