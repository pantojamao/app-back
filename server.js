import  express  from "express";
import "dotenv/config.js"
import "./config/database.js"

const server = express();
const PORT = process.env.PORT || 8080;
const ready = () => console.log('Server ready on port : ' + PORT)

//middlewares
server.use(express.json()) //permite entradas y trabajar con archivos js
server.use(express.urlencoded({ extended: false }))// permite hacer consultas complejas 

//Router + server
server.listen(PORT, ready);

console.log(process.env.NODE_ENV)
