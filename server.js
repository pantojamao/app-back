import express from "express";
import "dotenv/config.js"
import "./config/database.js"
import indexRouter from "./router/index.js";
import cors from "cors"
import morgan from "morgan"
const server = express();
const PORT = process.env.PORT || 8080;
const ready = () => console.log('Server ready on port : ' + PORT)

//middlewares
server.use(express.json()) //permite entradas y trabajar con archivos js
server.use(express.urlencoded({ extended: true }))// permite hacer consultas complejas 
server.use(cors())
server.use(morgan('dev'))

//Router + server
server.use('/api', indexRouter)
server.listen(PORT, ready);
console.log(process.env.NODE_ENV)
