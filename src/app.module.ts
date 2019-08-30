import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { MessagesModule } from './messages/messages.module';
import { ConversationsController } from './conversations/conversations.controller';
import { ConversationsService } from './conversations/conversations.service';
import { ConversationsModule } from './conversations/conversations.module';
import { MulterModule } from '@nestjs/platform-express'

@Module({
  imports: [UsersModule, MessagesModule, ConversationsModule, MulterModule.register({
    dest: './files',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
