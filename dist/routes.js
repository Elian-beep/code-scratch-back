"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const CreateInstructorController_1 = require("./controllers/instructor/CreateInstructorController");
const GetAllInstructorController_1 = require("./controllers/instructor/GetAllInstructorController");
const AuthInstructorController_1 = require("./controllers/auth/AuthInstructorController");
const TokenInstructorController_1 = require("./controllers/auth/TokenInstructorController");
const DeleteInstructorController_1 = require("./controllers/instructor/DeleteInstructorController");
const UpdateInstructorController_1 = require("./controllers/instructor/UpdateInstructorController");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const GetAllCategoryController_1 = require("./controllers/category/GetAllCategoryController");
const UpdateCategoryController_1 = require("./controllers/category/UpdateCategoryController");
const DeleteCategoryController_1 = require("./controllers/category/DeleteCategoryController");
const GetAllStudentController_1 = require("./controllers/student/GetAllStudentController");
const CreateStudentController_1 = require("./controllers/student/CreateStudentController");
const UpdateStudentController_1 = require("./controllers/student/UpdateStudentController");
const DeleteStudentService_1 = require("./controllers/student/DeleteStudentService");
const GetAllClassroomController_1 = require("./controllers/classroom/GetAllClassroomController");
const CreateClassroomController_1 = require("./controllers/classroom/CreateClassroomController");
const UpdateClassroomController_1 = require("./controllers/classroom/UpdateClassroomController");
const DeleteClassroomController_1 = require("./controllers/classroom/DeleteClassroomController");
const AuthStudentController_1 = require("./controllers/auth/AuthStudentController");
const TokenStudentController_1 = require("./controllers/auth/TokenStudentController");
const GetClassroomByCategoryController_1 = require("./controllers/classroom/GetClassroomByCategoryController");
const GetClassroomByIdController_1 = require("./controllers/classroom/GetClassroomByIdController");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes
    .get("/category", new TokenInstructorController_1.TokenInstructorController().handleCheck, new GetAllCategoryController_1.GetAllCategoryController().handle)
    .post("/category", new TokenInstructorController_1.TokenInstructorController().handleCheck, new CreateCategoryController_1.CreateCategoryController().handle)
    .put("/category/:id", new TokenInstructorController_1.TokenInstructorController().handleCheck, new UpdateCategoryController_1.UpdateCategoryController().handle)
    .delete("/category/:id", new TokenInstructorController_1.TokenInstructorController().handleCheck, new DeleteCategoryController_1.DeleteCategoryController().handle);
routes
    .get("/student", new TokenInstructorController_1.TokenInstructorController().handleCheck, new GetAllStudentController_1.GetAllStudentController().handle)
    .post("/student", new TokenInstructorController_1.TokenInstructorController().handleCheck, new CreateStudentController_1.CreateStudentController().handle)
    .put("/student/:id", new TokenInstructorController_1.TokenInstructorController().handleCheck, new UpdateStudentController_1.UpdateStudentController().handle)
    .delete("/student/:id", new TokenInstructorController_1.TokenInstructorController().handleCheck, new DeleteStudentService_1.DeleteStudentController().handle);
routes
    .get("/instructor", new TokenInstructorController_1.TokenInstructorController().handleCheck, new GetAllInstructorController_1.GetAllInstructorController().handle)
    .post("/instructor", new CreateInstructorController_1.CreateInstructorController().handle)
    .put("/instructor/:id", new TokenInstructorController_1.TokenInstructorController().handleCheck, new UpdateInstructorController_1.UpdateInstructorController().handle)
    .delete("/instructor/:id", new TokenInstructorController_1.TokenInstructorController().handleCheck, new DeleteInstructorController_1.DeleteInstructorController().handle);
routes
    .get("/classroom", new TokenInstructorController_1.TokenInstructorController().handleCheck, new GetAllClassroomController_1.GetAllClassroomController().handle)
    .post("/classroom", new TokenInstructorController_1.TokenInstructorController().handleCheck, new CreateClassroomController_1.CreateClassroomController().handle)
    .put("/classroom/:id", new TokenInstructorController_1.TokenInstructorController().handleCheck, new UpdateClassroomController_1.UpdateClassroomController().handle)
    .delete("/classroom/:id", new TokenInstructorController_1.TokenInstructorController().handleCheck, new DeleteClassroomController_1.DeleteClassroomController().handle);
routes
    .post("/instructor/auth", new AuthInstructorController_1.AuthInstructorController().handle);
routes
    .get("/student/classroom", new TokenStudentController_1.TokenStudentController().handleCheck, new GetAllClassroomController_1.GetAllClassroomController().handle)
    .get("/student/category", new TokenStudentController_1.TokenStudentController().handleCheck, new GetAllCategoryController_1.GetAllCategoryController().handle)
    .get("/student/classroom_category/:id_category", new TokenStudentController_1.TokenStudentController().handleCheck, new GetClassroomByCategoryController_1.GetClassroomByCategoryController().handle)
    .get("/student/classroom/:id", new TokenStudentController_1.TokenStudentController().handleCheck, new GetClassroomByIdController_1.GetClassroomByIdController().handle);
routes
    .post("/student/auth", new AuthStudentController_1.AuthStudentController().handle);
