import { connectionSource } from "../../database/ormconfig";
import { Category } from "../../entities/Category";
import { TCreateCategory } from "../../types/TCreateCategory";

export class CreateCategoryService{
    async execute({description, order}: TCreateCategory): Promise<Category | Error>{
        const repo = connectionSource.getRepository(Category);

        if(await repo.findOne({ where: { description } })) return new Error("Módulo ja existente");

        const category = repo.create({description, order});

        await repo.save(category);
        return category;
    }
}
