import { Entity, Column } from 'typeorm';

@Entity('images')
export class Image {
    // TODO: many-to-one relation to Subpage entity PR #47

    @Column()
    etag: string;
}
