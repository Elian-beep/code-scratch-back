import { connectionSource } from "../../database/ormconfig";
import { Category } from "../../entities/Category";

export class DeleteCategoryService{
    async execute(id: string){
        const repo = connectionSource.getRepository(Category);

        if(!(await repo.findOne({where: { id }}))){
            return new Error("Módulo não existente!");
        }

        await repo.delete(id);
    }
}