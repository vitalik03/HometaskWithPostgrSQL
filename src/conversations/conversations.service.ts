import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IConversation } from './interface/conversation.interface';

@Injectable()
export class ConversationsService {
    constructor(
		@Inject('CONVERSATION_REPOSITORY')
		private readonly conversationRepository: Repository<IConversation>,
	){}

	async create(conversation: IConversation): Promise<IConversation>{
		return await this.conversationRepository.save(conversation);
	}

	async update(id: string, conversation: IConversation){
		return await this.conversationRepository.update(id, conversation);
	}

	async delete(id: string){
		return await this.conversationRepository.delete(id);
	}

}
