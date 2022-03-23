import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('User')
export class UserEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String, { nullable: true })
    @Column({ length: 30 })
    name: string;

    @Field(() => String, { nullable: true })
    @Column({ length: 100 })
    email: string;

    @Field(() => String, { nullable: true })
    @Column({ length: 60 })
    password: string;
}
