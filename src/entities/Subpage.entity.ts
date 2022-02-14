import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinTable,
    ManyToMany
} from 'typeorm';
import { Image, StatisticsEntry } from '.';

@Entity('subpages')
export class Subpage {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    path: string;

    @Column('longtext')
    html: string;

    @OneToMany(() => StatisticsEntry, (e) => e.subpage)
    @JoinTable()
    statistics: StatisticsEntry[];

    @OneToMany(() => Image, (i) => i.subpage)
    @JoinTable()
    images: Image[];

    @ManyToMany(() => Subpage, (s) => s.referencedBy)
    @JoinTable({ name: 'links' })
    referencedLinks: Subpage[];

    @ManyToMany(() => Subpage, (s) => s.referencedLinks)
    referencedBy: Subpage[];
}
