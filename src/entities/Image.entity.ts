import { Entity, Column, ManyToOne } from 'typeorm';
import { Subpage } from '.';

@Entity('images')
export class Image {
    @ManyToOne(() => Subpage, (p) => p.images)
    subpage: Subpage;

    @Column()
    etag: string;
}
