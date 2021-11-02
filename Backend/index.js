import express from "express";  //importamos express
import cors from "cors";   //reglas de conexion
import  db from "./db/db.js";
import role from "./routers/role.js"
import dotenv from "dotenv";

dotenv.config();  //para qe cuando se ejecute el servidor ejecuta el index y dedtecte lass variables de .env
const app =express();

app.use(express.json());
app.use(cors()); 
app.use("/api/role",role);

app.listen(process.env.PORT, ()=> console.log("ejecutando en el puerto:  "+ process.env.PORT));

db.dbConnection();


