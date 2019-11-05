import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    Timestamp,
    UpdateDateColumn
} from 'typeorm';
import { Items }                                                                                                        from './item.entity';

@Entity()
export class ItemTypes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    name: string;

    @UpdateDateColumn({select: true})
    updated: Timestamp;

    @CreateDateColumn({select: true})
    created: Timestamp;
}
