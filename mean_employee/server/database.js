//CONFIGURAR BASE DE DATOS        mongod Activar servidor
    //CMD       npm install mongoose para conectarse a BBDD
//hay que exportarlo, ahora la constante mongoose me devuelve la conexion

const mongoose= require("mongoose");

//URL
const URI= "mongodb://localhost/mean_crud_employees";

mongoose.connect(URI)//Con promesa
    .then (db => console.log("DB is connected"))
    .catch (err => console.error(err));


module.exports = mongoose;