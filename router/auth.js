import { Router } from "express";
import read from "../controllers/auth/read.js";

const usersRouter = Router();

usersRouter.get('/', read);

export default usersRouter;