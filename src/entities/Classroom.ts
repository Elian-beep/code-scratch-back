import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Instructor } from './Instructor';
import { Category } from './Category';

@Entity("classroom")
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
    link_video: string;

    @Column()
    watched: boolean;
    
    @Column()
    instructor_id: string;
    @Column()
    category_id: string;

    @ManyToOne(() => Instructor)
    @JoinColumn({ name: "instructor_id" })
    instructor: Instructor;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category;

    constructor(){
        if(!this.id) this.id = uuid();
    }
}