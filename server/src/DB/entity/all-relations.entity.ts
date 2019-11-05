import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';
import { ItemTypes }                                                                                                    from './item-types.entity';

@Entity()
export class AllRelations {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => ItemTypes, type => type.type)
    @JoinColumn()
    type_relation: ItemTypes;

    @Column()
    left_id: number;

    @Column()
    right_id: string;

    @Column()
    date_start: Date;

    @Column()
    date_end: Date;

    @Column()
    attribute_1: string;
    @Column()
    attribute_2: string;
    @Column()
    attribute_3: string;
    @Column()
    attribute_4: string;
    @Column()
    attribute_5: string;


    @UpdateDateColumn({select: true})
    updated: Timestamp;

    @CreateDateColumn({select: true})
    created: Timestamp;
}
