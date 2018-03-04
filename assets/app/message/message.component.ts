import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author{
             display: inline-block;
            font-style: italic ;
            font-size: 12px;
            width: 80%;
        }
        .config{
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class MessageComponent{
    // @Input('inputMsg') message: Message ;   //with alias

    color = 'red';

    @Input() message: Message ;
    // @Output() onEditClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService){}

    onDelete(){
         this.messageService.deleteMessage(this.message);
    }

    onEdit(){
        // this.onEditClicked.emit('A new value');
        this.messageService.editMessege(this.message);
    }
}