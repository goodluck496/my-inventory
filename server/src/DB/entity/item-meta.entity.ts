import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';

@Entity()
export class ItemMeta {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    key: string;

    @Column()
    value: string;

    @Column()
    valueType: string;

    @Column()
    formType: string;

    @UpdateDateColumn({select: true})
    updated: Timestamp;

    @CreateDateColumn({select: true})
    created: Timestamp;

    @Column({type: 'bool', default: false, select: true})
    archival: boolean;
}
