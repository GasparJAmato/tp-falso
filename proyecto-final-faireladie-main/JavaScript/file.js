

let carrito = new Array();
let carroConsole = [];
let carritoJSON = []

const cardIds = ["cama1", "cama2", "cama3", "cama4", "cushion1", "cushion2", "cushion3", "cushion4"];


let cartIf = localStorage.getItem("CarritoArray")

if (cartIf){
   carrito  = JSON.parse(cartIf);
   $("#cart").html(carrito.length);
  }else{
    carrito = []
  } 

  

console.log(carrito)
 
function asignaEventos(identificador, arrayDeCards) {

  document.getElementById(identificador).addEventListener("click", function() {

    console.log(arrayDeCards)

    var arrayAlCarrito = arrayDeCards.find(({name}) => name === identificador)
    carrito.push(arrayAlCarrito)
    carritoJSON = JSON.stringify(carrito)
    
    localStorage.setItem("CarritoArray", carritoJSON )

    $("#cart").html(carrito.length)

    carroConsole.push(identificador)
    console.log(carroConsole);  
    console.log(arrayAlCarrito) 
    console.log(carrito) 

  });
}


$.getJSON("JSON/productos.json", function (respuesta, estado) {
  if(estado === "success"){
  const arrayDeCards = respuesta;
    for (const identificador of cardIds) {
      asignaEventos(identificador, arrayDeCards);
    };
  }
})










