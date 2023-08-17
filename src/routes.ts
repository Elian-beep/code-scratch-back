import { Router } from "express";
import { CreateInstructorController } from "./controllers/instructor/CreateInstructorController";
import { GetAllInstructorController } from "./controllers/instructor/GetAllInstructorController";

const routes = Router();

routes
    .get("/instructor", new GetAllInstructorController().handle)
    .post("/instructor", new CreateInstructorController().handle)

export { routes };