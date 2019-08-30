import { Connection, Repository } from 'typeorm';
import { Conversation } from './conversations.entity';

export const conversationsProviders = [
    {
        provide: 'CONVERSATION_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Conversation),
        inject: ['DATABASE_CONNECTION'],
    },
];