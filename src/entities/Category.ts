import { Column, CreateDateColumn, Entity, Index, PrimaryColumn, Unique } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("category")
export class Category{
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    @Index({ unique: true })
    order: number;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}