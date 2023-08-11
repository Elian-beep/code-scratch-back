import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("instructor")
export class Instructor{
    
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