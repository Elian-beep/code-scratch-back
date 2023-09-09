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
    cpf: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    photo: string;

    @CreateDateColumn()
    birthday: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}