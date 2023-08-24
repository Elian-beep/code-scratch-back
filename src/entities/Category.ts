import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("category")
export class Category{
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}