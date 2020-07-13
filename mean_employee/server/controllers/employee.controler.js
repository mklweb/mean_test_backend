//Metodos getter y setter
const Employee = require("../models/employee");

const employeeCtrl = {};

employeeCtrl.getEmployees= async (req, res) => {          //Creo la funcion asincrona y uso await en su interior

    const employees = await Employee.find();             //Busca todos los empleados y los almaceno en esa constante
    res.json(employees);
}

employeeCtrl.createEmployees= async (req, res) => {          //el user envia mediante POST y me llega a req.body
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }); //almaceno los datos en el modelo
    await employee.save(); // GUARDA DATOS EN DB  puede llevar tiempo
    res.json({
        "status": "Empleado guardado"
    });
    
}
employeeCtrl.getEmployee= async (req, res) => { //busca y actualiza

    const employee = await Employee.findById(req.params.id);
    res.json(employee);
}
employeeCtrl.editEmployee= async (req, res) => { //
    //El nuevo dato que quiero actualizar
    const {id} = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set: employee},{new: true});
    res.json({
        status: "Empleado actualizado"
    });
}
employeeCtrl.deleteEmployee= async (req, res) => { //busca y actualiza

    await Employee.findByIdAndDelete(req.params.id);
    res.json({
        status: "Empleado borrado"
    });
}

module.exports= employeeCtrl;