import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database.module';
import { ConversationsService } from './conversations.service';
import { ConversationsController } from './conversations.controller';
import { conversationsProviders } from './conversations.providers';

@Module({
    imports: [DatabaseModule],
    providers: [ConversationsService, ...conversationsProviders],
    controllers: [ConversationsController],
    exports: [ConversationsService]
})
export class ConversationsModule {}
