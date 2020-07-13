//RUTAS de conexion a la BD
//ENVIAR Y RECIBIR DATOS en formato JSON

const express = require ("express");
const router = express.Router();

//Tiene todas las funciones del controller
const employee = require("../controllers/employee.controler");

//cuando un user entre en la ruta inicial / le respondo con esa funcion
router.get("/", employee.getEmployees);
router.post("/", employee.createEmployees);
//un solo usuario
router.get("/:id", employee.getEmployee);
//editar
router.put("/:id", employee.editEmployee);
//borrar
router.delete("/:id", employee.deleteEmployee);


module.exports = router;
