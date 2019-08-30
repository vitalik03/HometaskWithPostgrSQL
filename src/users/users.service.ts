import { Injectable, Inject } from '@nestjs/common';
import { IUser } from './interface/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
		@Inject('USER_REPOSITORY')
		private readonly userRepository: Repository<IUser>,
	){}

	async create(user: IUser): Promise<IUser>{
		return await this.userRepository.save(user);
	}

	async update(id: string, user: IUser){
		return await this.userRepository.update(id, user);
	}

	async delete(id: string){
		return await this.userRepository.delete(id);
	}

	async findOne(username: string){
        const params = {
            username
        }
        return await this.userRepository.findOne(params);
    }

}
