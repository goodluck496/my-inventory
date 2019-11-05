import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    Timestamp,
    UpdateDateColumn
}                         from 'typeorm';
import { ItemCategories } from './item-categories.entity';
import { ItemMeta }       from './item-meta.entity';

@Entity()
export class Items {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => ItemMeta, meta => meta.id)
    @JoinColumn({name: 'meta'})
    meta: ItemMeta;

    @ManyToOne(() => ItemCategories, cat => cat.id, {nullable: false, onDelete: 'NO ACTION', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'category', referencedColumnName: 'id'})
    category: ItemCategories;

    @UpdateDateColumn({select: true})
    updated: Timestamp;

    @CreateDateColumn({select: true})
    created: Timestamp;

    @Column({type: 'bool', default: false, select: true})
    archival: boolean;
}
