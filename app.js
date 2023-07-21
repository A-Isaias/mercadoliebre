// ==========> requerimos los modulos para trabajar
const express = require("express");
const app = express();
const path = require("path");
// ==========> creamos la ruta a los archivos estaticos 
const ruta = path.join(__dirname, "public");
const static = express.static(ruta);
app.use(static);


app.get("/",(req,res)=>{
    let ruta = path.join(__dirname, "./views/home.html") /*envia como raiz siempre al home.html*/
    res.sendFile(ruta);
})
app.get("/register",(req,res)=>{
    let ruta = path.join(__dirname, "./views/register.html") /*envia como a register.html*/
    res.sendFile(ruta);
})
app.get("/login",(req,res)=>{
    let ruta = path.join(__dirname, "./views/login.html") /*envia como a register.html*/
    res.sendFile(ruta);
})

// ==========> creamos el servidor y le pasamos un mensaje para verificar su funcionalidad

app.listen(3000,()=>{
    console.log("el servidor esta funcionando en el puerto 3000")
})

