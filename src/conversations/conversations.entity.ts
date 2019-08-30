import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany } from 'typeorm';
import { Message } from 'src/messages/messages.entity';
import { User } from 'src/users/users.entity';

@Entity()
export class Conversation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({})
    name: string;

    @Column({})
    description: string;

    @OneToMany(type => Message, message => message.conversation)
    messages: Message[];

    @ManyToMany(type => User, user => user.conversations)
    users: User[];
    
}