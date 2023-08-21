import { connectionSource } from "../../database/ormconfig";
import { Category } from "../../entities/Category";
import { TCreateCategory } from "../../types/TCreateCategory";

export class CreateCategoryService{
    async execute({description}: TCreateCategory): Promise<Category | Error>{
        const repo = connectionSource.getRepository(Category);

        if(await repo.findOne({ where: { description } })) return new Error("Módulo ja existente");

        const category = repo.create({description});

        await repo.save(category);
        return category;
    }
}
