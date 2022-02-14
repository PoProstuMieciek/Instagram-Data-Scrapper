import { Entity, Column } from 'typeorm';

@Entity('statistics')
export class StatisticsEntry {
    // TODO: many-to-one relation to Subpage entity PR #47

    @Column()
    word: string;

    @Column('bigint')
    occurences: number;
}
