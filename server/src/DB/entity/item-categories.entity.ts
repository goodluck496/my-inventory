import {
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    Timestamp,
    UpdateDateColumn
} from 'typeorm';

@Entity()
export class ItemCategories {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => ItemCategories, {nullable: true})
    @JoinColumn({name: 'parentId'})
    parent: ItemCategories;

    @Column()
    name: string;

    @Column()
    key: string;

    @UpdateDateColumn({select: true})
    updated: Timestamp;

    @CreateDateColumn({select: true})
    created: Timestamp;
}
