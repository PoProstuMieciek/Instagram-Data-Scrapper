import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Image, StatisticsEntry } from '.';

@Entity('subpages')
export class Subpage {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    path: string;

    @Column('text')
    html: string;

    @OneToMany(() => StatisticsEntry, (e) => e.subpage)
    statistics: StatisticsEntry[];

    @OneToMany(() => Image, (i) => i.subpage)
    images: Image[];
}
