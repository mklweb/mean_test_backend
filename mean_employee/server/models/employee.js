//MODELO DE DATOS  Como van a ser los datos
//solo quiero los esquemas de mongoose
//Hay que pasar el esquema a un modelo de datos de mongoose

const mongoose = require("mongoose");
const {Schema} = mongoose;
//KE tipos de datos 
const EmployeeSchema = new Schema ({
    name: {type:String, required: true},
    position: {type:String, required: true},
    office: {type:String, required: true},
    salary: {type:Number,required:true}
});
//Pasamos al modelo y como
//voy a requerirlo en otras partes de la app entonces exportarlo
module.exports = mongoose.model("Employe", EmployeeSchema);