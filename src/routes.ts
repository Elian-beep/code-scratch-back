import { Router } from "express";
import { CreateInstructorController } from "./controllers/instructor/CreateInstructorController";
import { GetAllInstructorController } from "./controllers/instructor/GetAllInstructorController";
import { AuthInstructorController } from "./controllers/auth/AuthInstructorController";
import { TokenInstructorController } from "./controllers/auth/TokenInstructorController";
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
import { AuthStudentController } from "./controllers/auth/AuthStudentController";
import { TokenStudentController } from "./controllers/auth/TokenStudentController";
import { CheckTokenStudentController } from "./controllers/auth/CheckTokenStudentController";
import { GetClassroomByCategoryController } from "./controllers/classroom/GetClassroomByCategoryController";
import { GetClassroomByIdController } from "./controllers/classroom/GetClassroomByIdController";

const routes = Router();

routes
    .get("/category", new TokenInstructorController().handleCheck, new GetAllCategoryController().handle)
    .post("/category", new TokenInstructorController().handleCheck, new CreateCategoryController().handle)
    .put("/category/:id", new TokenInstructorController().handleCheck, new UpdateCategoryController().handle)
    .delete("/category/:id", new TokenInstructorController().handleCheck, new DeleteCategoryController().handle)

routes
    .get("/student", new TokenInstructorController().handleCheck, new GetAllStudentController().handle)
    .post("/student", new TokenInstructorController().handleCheck, new CreateStudentController().handle)
    .put("/student/:id", new TokenInstructorController().handleCheck, new UpdateStudentController().handle)
    .delete("/student/:id", new TokenInstructorController().handleCheck, new DeleteStudentController().handle)

routes
    .get("/instructor", new TokenInstructorController().handleCheck, new GetAllInstructorController().handle)
    .post("/instructor", new CreateInstructorController().handle)
    .put("/instructor/:id", new TokenInstructorController().handleCheck, new UpdateInstructorController().handle)
    .delete("/instructor/:id", new TokenInstructorController().handleCheck, new DeleteInstructorController().handle)

routes
    .get("/classroom", new TokenInstructorController().handleCheck, new GetAllClassroomController().handle)
    .post("/classroom", new TokenInstructorController().handleCheck, new CreateClassroomController().handle)
    .put("/classroom/:id", new TokenInstructorController().handleCheck, new UpdateClassroomController().handle)
    .delete("/classroom/:id", new TokenInstructorController().handleCheck, new DeleteClassroomController().handle)

routes
    .post("/instructor/auth", new  AuthInstructorController().handle)

routes
    .get("/student/classroom", new TokenStudentController().handleCheck, new GetAllClassroomController().handle)
    .get("/student/category", new TokenStudentController().handleCheck, new GetAllCategoryController().handle)
    .get("/student/classroom_category/:id_category", new TokenStudentController().handleCheck, new GetClassroomByCategoryController().handle)
    .get("/student/classroom/:id", new TokenStudentController().handleCheck, new GetClassroomByIdController().handle)

routes
    .post("/student/auth", new AuthStudentController().handle)

export { routes };