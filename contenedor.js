const fs = require('fs');

class Contenedor{
    rutaArchivo;
    listaProductos;

        constructor(){
            this.rutaArchivo= './productos.txt'
        }



obtenerProductos(){
    try{
        let contenido = fs.readFileSync(this.rutaArchivo,' utf-8');
        if(contenido) {
            this.listaProductos = JSON.parse(contenido);
        }else{
            this.listaProductos =[]
        }
        return this.listaProductos;
    
        }catch(error){
            console.log(error)
            return [];
            
        }
    }
}
module.export= Contenedor ;