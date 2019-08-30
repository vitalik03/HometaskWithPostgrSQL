import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/users.entity';
import { conversationsProviders } from 'src/conversations/conversations.providers';
import { Conversation } from 'src/conversations/conversations.entity';

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({})
    title: string;

    @Column({})
    text: string; 

    @ManyToOne(type => User, user => user.messages)
    user: User;

    @ManyToOne(type => Conversation, conversation => conversation.messages)
    conversation: Conversation;

}

