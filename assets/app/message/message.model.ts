export class Message{
    content : string;
    username : string;
    messageId ?: string;
    userId ?: string;

    //?: makes field optional

    constructor(content: string, username: string, messageId?: string, userId?: string) {
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}