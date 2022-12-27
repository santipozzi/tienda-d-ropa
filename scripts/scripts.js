/* function saludar(params) {
    console.log("¡Bienvenido a Golf Wang Clothes, el mejor estilo ;)!")
}

saludar();

function solitarNombre(params) {
    let nombre = prompt ("Ingresa tu nombre")
    alert ("Bienvenido" + nombre);
    alert("Bienvenido" + nombre)
}

solitarNombre();
productos();
inversor();
function calculadora (numeroUno, numeroDos, operacion) {
    switch (operacion) {
        case "+":
            return sumar (numeroUno, numeroDos); 
            break;
        
        case "-":
            return restar (numeroUno, numeroDos);
            break;
        case "*":
            return multiplicar (numeroUno, numeroDos);    
            break;
        case "/": 
            return division (numeroUno, numeroDos);
            break;
        default:
            return 0;
            break;
    }
}



function productos() {
    let productos = prompt("  Nuestros productos son :" + "\n" + "1) Zapatillas" + "\n" + "2) Remeras" + "\n" + "3) Jeans y Joggers" + "\n" + "4) Buzos" + "\n" + "5) Accesorios");
    if (productos == "1" || intereses.toLowerCase() == "zapatillas") {
        console.log("Excelente");
        alert("Excelente");

        marca();
    } else if (productos == "2" || productos.toLowerCase() == "remeras") { console.log("Muy buena desicion"); alert("Tenemos nuevos stocks Converse y Le Fleur");
    puesto(); }
    else if (productos == "3" || productos.toLowerCase() == "jeans y joggers") {
        console.log("Te fascinara estos pantalones");
        alert("Ofertas en Golfs Jeans Mom ;)");

        puesto();
    } else if (productos == "4" || productos.toLowerCase() == "buzos" || productos.toLowerCase() == " buzos" || productos.toLowerCase() == "camperas") {
        console.log("De las mejores prendas de este verano"); alert("Proximo stock Summer 22 colaboracion con LACOSTE!");

        puesto();

    } else if (productos == "5" || productos.toLowerCase() == "otro") {
        console.log("Muy buena opcion");
        alert("Fundas de regalo a partir de tu quinta comra :)")
        
}

function marcas(){
    let marcas = prompt ("Que zapatillas preferis?")
}

function inversor() {
    let monto = prompt ("Ingrese la cantidad de capital que desea invertir en $");
    if (monto !== "") {
        console.log("Usted desea invertir $ " + monto);
        alert("Usted desea invertir $ " + monto);
    } else { console.log("Ingrese el monto que desea invertir");
    monto = prompt ("Ingrese monto");
    }
 console.log ("Nuestro equipo lo contactara a la brevedad");
 alert("Nuestro equipo lo contactara a la brevedad");     

}
}                                       

let unUsuario = {
    tipoCorreo: "santiagopozzi@gmail.com",
    tipoNumero: "35875126814",
    apellidos: "Pozzi Loza",
    nombres: "Santiago V.",

}

let otroUsuario

console.log ("--> Este es el mail del usuario", unUsuario);
console.log ("-->Este es el numero del usuario", unUsuario[tipoNumero]);
unUsuario.apellidos = "Pozzi Loza";
unUsuario["tipoCorreo"] = "santiagopozzi@gmail.com";
console.log ("Estos son los datos del Usuario"); */




function Usuario (tipoCorreo, tipoNumero, apellidos, nombres, telefono ) {
    this.tipoCorreo = tipoCorreo;
    this.tipoNumero = tipoNumero;
    this.apellidos = apellidos;
    this.nombres = nombres;
    this.telefono = telefono;

    this.toString = function () {
        return this.apellidos + "," + this.nombres
    }
}

let ListaProductos = ["Remeras, Pantalones , Zapatillas, Buzos y camperas, Accesorios"];
console.log(
    "-->Nuestros Prodctos (Golf,Lacoste,Converse):",
    ListaProductos.length
)



let productosCompra = [
    
]



if (localStorage){
    
  if(localStorage.getItem('productosCompra') !== undefined && localStorage.getItem('productosCompra')){
   

 
  }else{
    localStorage.setItem("productosCompra", JSON.stringify(productosCompra))
  
  }
}
actualizarCarrito()
function actualizarCarrito(){
    var lista = document.getElementById("lista_carrito")
    lista.innerHTML = "";
    var productos_carrito = JSON.parse(localStorage.getItem('productosCompra'))
for(let p of productos_carrito){

    var boton =  document.createElement("button");
    boton.classList.add("boton-carrito")
    boton.innerText = "Eliminar"
    boton.setAttribute("data-id",p.id)

    var html = ''
    
    lista.innerHTML += html
}

var botones_eliminar = document.getElementsByClassName("boton-carrito")

for(let b of botones_eliminar){
    b.addEventListener("click", function(event) {
        console.log(b);
        var id = event.target.getAttribute("data-id")
        var productos = JSON.parse(localStorage.getItem('productosCompra'))
     index = 0
      for(let p of productos){
    
        if(p.id == id){
           productos.splice(index , 1);
           localStorage.setItem("productosCompra", JSON.stringify(productos))
           actualizarCarrito()
        }
        index++
       }
      

    })
}

}






var botones = document.getElementsByClassName("button_comprar")

for(let b of botones){
    
    b.addEventListener("click", function(event) {
        var nombre = event.target.getAttribute("data-nombre")
        var precio = event.target.getAttribute("data-precio")
        var url = event.target.getAttribute("data-url")
        var id = event.target.getAttribute("data-id")
       var productos = JSON.parse(localStorage.getItem('productosCompra'))
      var contiene = false;
       for(let p of productos){
        if(p.id == id){
            contiene = true;
        }
       }
       if(contiene == false){
            var producto_nuevo = {
                id: id,
                nombre: nombre,
                url: url,
                precio: precio,
            }
            productos.push(producto_nuevo)
            localStorage.setItem("productosCompra", JSON.stringify(productos))
          actualizarCarrito()
       }
     
    })
}

