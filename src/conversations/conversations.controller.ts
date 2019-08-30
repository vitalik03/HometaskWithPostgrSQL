import { Controller, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { IConversation } from './interface/conversation.interface';

@Controller('conversations')
export class ConversationsController {
    
    constructor(private readonly conversationsService: ConversationsService){}
    
    @Post()
	async create(@Body() createConversation: CreateConversationDto): Promise<IConversation>{
		return await this.conversationsService.create(createConversation);
    }
    
	@Put(':id')
	async update(@Param('id') id: string, @Body() updateConversation: CreateConversationDto){
		return await this.conversationsService.update(id, updateConversation);
	}

	@Delete(':id')
	async delete(@Param('id') id:string){
		return await this.conversationsService.delete(id);
	}
}
