import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('snapshots')
export class Snapshot {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('datetime')
    timestamp: Date;

    @Column('longtext')
    snapshotJson: string;
}
