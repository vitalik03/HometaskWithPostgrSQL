import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { DatabaseModule } from 'src/core/database.module';
import { messagesProviders } from './messages.providers';

@Module({
    imports: [DatabaseModule],
    providers: [MessagesService, ...messagesProviders],
    controllers: [MessagesController],
    exports: [MessagesService]
})
export class MessagesModule {}
