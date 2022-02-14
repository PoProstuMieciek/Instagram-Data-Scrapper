import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Subpage } from '.';

@Entity('images')
export class Image {
    @PrimaryColumn()
    etag: string;

    @ManyToOne(() => Subpage, (p) => p.images)
    subpage: Subpage;
}
