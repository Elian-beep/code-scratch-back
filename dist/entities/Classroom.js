"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classroom = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Instructor_1 = require("./Instructor");
const Category_1 = require("./Category");
let Classroom = exports.Classroom = class Classroom {
    constructor() {
        if (!this.id)
            this.id = (0, uuid_1.v4)();
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Classroom.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Classroom.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Classroom.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Classroom.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Classroom.prototype, "link_video", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Classroom.prototype, "watched", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", Number)
], Classroom.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Classroom.prototype, "instructor_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Classroom.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Instructor_1.Instructor),
    (0, typeorm_1.JoinColumn)({ name: "instructor_id" }),
    __metadata("design:type", Instructor_1.Instructor)
], Classroom.prototype, "instructor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Category_1.Category),
    (0, typeorm_1.JoinColumn)({ name: "category_id" }),
    __metadata("design:type", Category_1.Category)
], Classroom.prototype, "category", void 0);
exports.Classroom = Classroom = __decorate([
    (0, typeorm_1.Entity)("classroom"),
    __metadata("design:paramtypes", [])
], Classroom);
