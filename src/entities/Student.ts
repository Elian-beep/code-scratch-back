import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("student")
export class Student{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
    
    @Column()
    user: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}