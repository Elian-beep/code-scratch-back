import { Router } from "express";
import { CreateInstructorController } from "./controllers/instructor/CreateInstructorController";
import { GetAllInstructorController } from "./controllers/instructor/GetAllInstructorController";
import { AuthInstructorController } from "./controllers/auth/AuthInstructorController";
import { TokenController } from "./controllers/auth/TokenController";

const routes = Router();

routes
    .get("/instructor", new TokenController().handleCheck, new GetAllInstructorController().handle)
    .post("/instructor", new CreateInstructorController().handle)

routes
    .post("/instructor/auth", new  AuthInstructorController().handle)

export { routes };