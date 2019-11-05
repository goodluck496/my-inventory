import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';
import { AllRelations }                                                                                     from './all-relations.entity';

@Entity()
export class RelationDictionaries {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => AllRelations, rel => rel.type_relation)
    type: AllRelations;

    @Column()
    title: string;

    @UpdateDateColumn({select: true})
    updated: Timestamp;

    @CreateDateColumn({select: true})
    created: Timestamp;

    @Column({type: 'bool', default: false, select: true})
    archival: boolean;
}
