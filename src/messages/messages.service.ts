import { Injectable, Inject } from '@nestjs/common';
import { IMessage } from './interface/message.interface';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
    constructor(
		@Inject('MESSAGE_REPOSITORY')
		private readonly messageRepository: Repository<IMessage>,
	){}

	async create(message: IMessage): Promise<IMessage>{
		return await this.messageRepository.save(message);
	}

	async update(id: string, message: IMessage){
		return await this.messageRepository.update(id, message);
	}

	async delete(id: string){
		return await this.messageRepository.delete(id);
	}

}
