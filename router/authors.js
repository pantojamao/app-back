import { Router } from "express";
import create from "../controllers/authores/create.js";
import read from "../controllers/authores/read.js";

let authorsRouter = Router();

/**
 * CRUD
 */
authorsRouter.post('/', create)
authorsRouter.get('/', read)
export default authorsRouter;