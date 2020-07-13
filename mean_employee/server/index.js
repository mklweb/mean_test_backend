//CMD npm install express
//CMD node server/index.js           para ejecutar el archivo NO
//SETTINGS   para no tener que reiniciar servidor para ver en navegador
    //CMD   npm install nodemon -D        
    //      Configurar
        //      debe estar en  package.json   devDependencies
        //      luego en la seccion scripts
        //      "dev": "nodemon server/index.js"  ahora si ejecutamos dev se ejecuta ese codigo
    //CMD   npm run dev  EJECUTAR  Ahora cuando guardo se reinicia


//MIDLEWARES   conversion de datos HAY que instalar modulos CANCELAR SERVIDOR     localhost/3000/api/employees
    //MORGAN
        //CMD   $ npm install morgan     Info acerca del requerimiento
        //      const morgan = require("morgan");  requerir morgan
    //JSON      para  que entienda Json ahora ya puedo req.body

//ROUTES        Primero crear archivo de rutas



const express = require("express");
const morgan = require("morgan");
const app = express();// me devuelve un objeto express
const { mongoose } = require("./database"); // requiero solo el objeto mongoose del archivo database
const cors = require('cors');

//SETTINGS
app.set("port", process.env.PORT || 3000);// Si el server te da un puerto, usa ese, si no, el 3000 como default

//MIDLEWARES       
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:"http://localhost:4200"}));// Para que angular se concte en el mismo puerto

//ROUTES
app.use("/api/employees", require("./routes/employee.routes"));//hay que agregar ese prefijo para el GET y POST



app.listen(app.get("port"), () => {//ke escuche en el puerto 
    console.log("Server on port: ", app.get("port"));
});