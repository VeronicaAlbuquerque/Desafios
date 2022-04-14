const express= require('express');
const app= express();


const Contenedor = require('./contenedor');
const objetoContenedor= new Contenedor();



app.get('/productos' ,(req, res)=>{
    let listaProductos = objetoContenedor.obtenerProductos();
    res.json(listaProductos) 
});

app.get('/productoRandom',(req,res)=>{
  let productAleatorio= Math.floor(Math.random()*(listaProductos.length))
  res.send({productAleatorio})

});
    

app.listen(8080)

