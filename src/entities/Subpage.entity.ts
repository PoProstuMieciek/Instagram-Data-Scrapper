import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('subpages')
export class Subpage {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    path: string;

    @Column('text')
    html: string;
}
