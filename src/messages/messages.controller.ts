import { Controller, Body, Post, Put, Param, Delete } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { IMessage } from './interface/message.interface';

@Controller('messages')
export class MessagesController {

    constructor(private readonly messagesService: MessagesService){}
    
    @Post()
	async create(@Body() createMessage: CreateMessageDto): Promise<IMessage>{
		return await this.messagesService.create(createMessage);
    }
    
	@Put(':id')
	async update( @Param('id') id: string, @Body() updateMessage: CreateMessageDto ){
		return await this.messagesService.update( id, updateMessage );
	}

	@Delete(':id')
	async delete(@Param('id') id:string){
		return await this.messagesService.delete(id);
    }
    
}
