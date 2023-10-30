import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("student_classroom")
export class StudentClassroom{
    @PrimaryColumn()
    id: string;

    @Column()
    student_id: string;
    
    @Column()
    classroom_id: string;

    

    constructor(){
        if(!this.id) this.id = uuid();
    }
}