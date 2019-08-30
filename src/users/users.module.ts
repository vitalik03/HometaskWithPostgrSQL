import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database.module';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { UsersController } from './users.controller';
import {UserMiddleware } from '../core/middlewares/user.middleware';

@Module({
    imports: [DatabaseModule],
    providers: [UsersService, ...usersProviders],
    controllers: [UsersController],
    exports: [UsersService]
})

export class UsersModule implements NestModule{
    public configure(consumer: MiddlewareConsumer){
        consumer
        .apply(UserMiddleware)
        .forRoutes({
            path: 'users', method: RequestMethod.POST
        },
        {
            path: 'users/:id', method: RequestMethod.PUT
        });
    }
}
