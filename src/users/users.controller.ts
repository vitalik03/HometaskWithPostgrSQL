import { Controller, Body, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interface/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}
    
    @Post()
	async create(@Body() createUser: CreateUserDto): Promise<IUser>{
		return await this.usersService.create(createUser);
    }
    
	@Put(':id')
	async update(@Param('id') id: string, @Body() updateUser: CreateUserDto){
		return await this.usersService.update(id, updateUser);
	}

	@Delete(':id')
	async delete(@Param('id') id:string){
		return await this.usersService.delete(id);
	}
}
