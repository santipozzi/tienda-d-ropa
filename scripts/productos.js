class Producto{
    constructor(nombre, definicion, urlImagen, precioUnitario, descuento=0  ){
this.nombre=nombre

    }
    calcularDescuento(cantidad =1){
       if (this.descuento>0) {
            return (this.precioUnitario * this.descuento) * cantidad; 
       } else{
           return 0;
       }
    } 
} 
    
