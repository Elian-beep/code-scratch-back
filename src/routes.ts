import { Router } from "express";
import { CreateInstructorController } from "./controllers/instructor/CreateInstructorController";
import { GetAllInstructorController } from "./controllers/instructor/GetAllInstructorController";
import { AuthInstructorController } from "./controllers/auth/AuthInstructorController";
import { TokenController } from "./controllers/auth/TokenController";
import { DeleteInstructorController } from "./controllers/instructor/DeleteInstructorController";
import { UpdateInstructorController } from "./controllers/instructor/UpdateInstructorController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { GetAllCategoryController } from "./controllers/category/GetAllCategoryController";
import { UpdateCategoryController } from "./controllers/category/UpdateCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { GetAllStudentController } from "./controllers/student/GetAllStudentController";
import { CreateStudentController } from "./controllers/student/CreateStudentController";
import { UpdateStudentController } from "./controllers/student/UpdateStudentController";
import { DeleteStudentController } from "./controllers/student/DeleteStudentService";
import { GetAllClassroomController } from "./controllers/classroom/GetAllClassroomController";
import { CreateClassroomController } from "./controllers/classroom/CreateClassroomController";
import { UpdateClassroomController } from "./controllers/classroom/UpdateClassroomController";
import { DeleteClassroomController } from "./controllers/classroom/DeleteClassroomController";

const routes = Router();

routes
    .get("/category", new TokenController().handleCheck, new GetAllCategoryController().handle)
    .post("/category", new TokenController().handleCheck, new CreateCategoryController().handle)
    .put("/category/:id", new TokenController().handleCheck, new UpdateCategoryController().handle)
    .delete("/category/:id", new TokenController().handleCheck, new DeleteCategoryController().handle)

routes
    .get("/student", new TokenController().handleCheck, new GetAllStudentController().handle)
    .post("/student", new TokenController().handleCheck, new CreateStudentController().handle)
    .put("/student/:id", new TokenController().handleCheck, new UpdateStudentController().handle)
    .delete("/student/:id", new TokenController().handleCheck, new DeleteStudentController().handle)

routes
    .get("/instructor", new TokenController().handleCheck, new GetAllInstructorController().handle)
    .post("/instructor", new CreateInstructorController().handle)
    .put("/instructor/:id", new TokenController().handleCheck, new UpdateInstructorController().handle)
    .delete("/instructor/:id", new TokenController().handleCheck, new DeleteInstructorController().handle)

routes
    .get("/classroom", new TokenController().handleCheck, new GetAllClassroomController().handle)
    .post("/classroom", new TokenController().handleCheck, new CreateClassroomController().handle)
    .put("/classroom/:id", new TokenController().handleCheck, new UpdateClassroomController().handle)
    .delete("/classroom/:id", new TokenController().handleCheck, new DeleteClassroomController().handle)

routes
    .post("/instructor/auth", new  AuthInstructorController().handle)

export { routes };