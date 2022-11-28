function saludar(params) {
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






