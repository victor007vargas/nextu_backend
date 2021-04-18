
// □□□□□□□□□□□□□□□□□□□□□□□ Index.js de Inicialización □□□□□□□□□□□□□□□□□□□
// Configurar cabeceras y cors

//  fin cabeceras cors
//  declaraciones  express y path
const express = require ('express');
const app = express();
const path = require('path')

//  settings
app.set ('port',80);
app.set('views',path.join(__dirname,'views'));


//routes
app.use (require ('./requestRouting'));

// static files

app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'server')))

// escucha del puerto
app.listen (app.get('port'),()=>{
console.log("Servidor arriba  ↗  en el puerto :", app.get('port'))});
