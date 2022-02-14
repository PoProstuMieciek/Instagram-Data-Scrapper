import { Entity, Column, ManyToOne } from 'typeorm';
import { Subpage } from '.';

@Entity('statistics')
export class StatisticsEntry {
    @ManyToOne(() => Subpage, (p) => p.statistics)
    subpage: Subpage;

    @Column()
    word: string;

    @Column('bigint')
    occurences: number;
}
