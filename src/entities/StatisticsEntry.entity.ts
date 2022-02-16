import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Subpage } from '.';

@Entity('statistics')
export class StatisticsEntry {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Subpage, (p) => p.statistics)
    subpage: Subpage;

    @Column('text')
    word: string;

    @Column('bigint')
    occurences: number;
}
