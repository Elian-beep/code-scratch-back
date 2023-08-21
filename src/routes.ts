import { Router } from "express";
import { CreateInstructorController } from "./controllers/instructor/CreateInstructorController";
import { GetAllInstructorController } from "./controllers/instructor/GetAllInstructorController";
import { AuthInstructorController } from "./controllers/auth/AuthInstructorController";
import { TokenController } from "./controllers/auth/TokenController";
import { DeleteInstructorController } from "./controllers/instructor/DeleteInstructorController";
import { UpdateInstructorController } from "./controllers/instructor/UpdateInstructorController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

const routes = Router();

routes
    .post("/category", new TokenController().handleCheck, new CreateCategoryController().handle)

routes
    .get("/instructor", new TokenController().handleCheck, new GetAllInstructorController().handle)
    .post("/instructor", new CreateInstructorController().handle)
    .put("/instructor/:id", new TokenController().handleCheck, new UpdateInstructorController().handle)
    .delete("/instructor/:id", new TokenController().handleCheck, new DeleteInstructorController().handle)

routes
    .post("/instructor/auth", new  AuthInstructorController().handle)

export { routes };