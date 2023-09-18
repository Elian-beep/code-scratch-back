import { connectionSource } from "../../database/ormconfig";
import { Category } from "../../entities/Category";

export class GetAllCategoryService{
    async execute(){
        const repo = connectionSource.getRepository(Category);

        // const categories = await repo.find();
        const categories = await repo
            .createQueryBuilder("category")
            .orderBy("category.order")
            .getMany()
        return categories;
    }
}