import { Injectable, NestMiddleware, HttpException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class UserMiddleware implements NestMiddleware{
    constructor(private readonly usersService : UsersService){}
    async use(req: Request, res: Response, next: NextFunction){
        const {username =  ''} = req.body;
        const user = await this.usersService.findOne(username);
        if(user){
            throw new HttpException('User has already been created',403)
        }
        next();
    }
}