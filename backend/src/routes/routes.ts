import { Router } from "express";
import { UserController } from "../controllers/UserController.ts";

const routes = Router();

routes.post('/user', new UserController().create);

export default routes;