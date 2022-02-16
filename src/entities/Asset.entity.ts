import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('assets')
export class Asset {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @PrimaryColumn()
    etag: string;
}
