import {
    Entity,
    Column,
    OneToMany,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn
} from 'typeorm';
import { Asset, StatisticsEntry } from '.';

@Entity('subpages')
export class Subpage {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    path: string;

    @Column('boolean', { default: false })
    visited: boolean;

    @OneToMany(() => StatisticsEntry, (e) => e.subpage, {
        cascade: true,
        eager: false
    })
    @JoinTable()
    statistics: StatisticsEntry[];

    @OneToMany(() => Asset, () => null, {
        cascade: true,
        eager: false
    })
    images: Asset[];

    @ManyToMany(() => Subpage, (s) => s.referencedBy, {
        cascade: true,
        eager: false
    })
    @JoinTable({ name: 'links' })
    referencedLinks: Subpage[];

    @ManyToMany(() => Subpage, (s) => s.referencedLinks)
    referencedBy: Subpage[];
}
