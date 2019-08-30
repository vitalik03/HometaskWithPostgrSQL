export class CreateMessageDto{
    readonly title: string;
    readonly text: string; 
    readonly user: number;
    readonly conversation: number;
}