import  Express  from "express";
import "dotenv/config.js"
const server = Express();
const PORT = process.env.PORT || 8080;

const ready = () => console.log('Server ready on port : ' + PORT)
server.listen(PORT, ready);
console.log(process.env.NODE_ENV)
