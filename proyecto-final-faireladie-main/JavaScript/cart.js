let localACartCarrito = JSON.parse(localStorage.getItem("CarritoArray"));
$("#cart").html(localACartCarrito.length);

function cart(){

    console.log(localACartCarrito)

    localACartCarrito.map(item => {
    $("#in").append(`<div class="flex-cart producto">
     <div class="elemento-cart">

     <ul class="container-elemento-cart">
  
      <li><div class="nombre">nombre: ${item.name} </div></li>  
     <li><div class="precio">precio: ${item.price} </div></li>
      <li><button class="eliminar" value="${item.value}">eliminar</button></li>
     </ul>

      <img class="cart-img " src="${item.img}" alt=""></div>
      </div>

     </div>`)    
    })
    price(0)   
};



function price(precio){
    localACartCarrito.map(item => {
 precio = parseInt(precio) + parseInt(item.price)
 console.log(precio)       

    })
    $("#aqui").html(`<div id="aqui"> precio total: <div class="total">${precio}</div> </div>`)
};

let deleteArray = [];
localACartCarrito.map(item => {

    let adentro = item.delete;    
    deleteArray.push(adentro)

});

function deleteCart(event) {
    const target = event.target;
    const index = localACartCarrito.findIndex( item => item.value == target.value);
    const ancestor =  $(target).closest(".producto");
    
    console.log(localACartCarrito)
    localACartCarrito.splice(index, 1);
    console.log(localACartCarrito)

    localStorage.setItem("CarritoArray", JSON.stringify(localACartCarrito) );
    localStorage.setItem("contadorCart", localACartCarrito.length);

    ancestor.fadeOut("slow", () => {
        ancestor.remove();
        $("#cart").html(localACartCarrito.length);
        console.log(localACartCarrito[index])

    
    
    });

    price(0)   

}


cart();
$(".eliminar").click(deleteCart);

