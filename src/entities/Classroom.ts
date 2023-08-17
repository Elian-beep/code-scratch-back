import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Instructor } from './Instructor';
import { Category } from './Category';

@Entity("Classroom")
export class Classroom{

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;
    
    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    link: string;

    @ManyToOne(() => Instructor)
    @JoinColumn({ name: "instructor_id" })
    instructor_id: Instructor;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category_id: Category;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}