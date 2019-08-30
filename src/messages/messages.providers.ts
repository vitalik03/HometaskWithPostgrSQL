import { Connection, Repository } from 'typeorm';
import { Message } from './messages.entity';

export const messagesProviders = [
    {
        provide: 'MESSAGE_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Message),
        inject: ['DATABASE_CONNECTION'],
    },
];