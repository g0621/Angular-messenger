import {Component, OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";

//if we want separate object per component then we will add providers: [MessageService]
//in this file too but at this time we want i MessageService to all thus we will
// add it to parent component(app.component)

@Component({
    selector: 'app-message-list',
    template: ` 
        <div class="col-md-8 col-md-offset-2">
            <app-message
                    *ngFor="let message of messages"
                    [message]="message">
                <!--(onEditClicked)="message.content = $event"-->
            </app-message>
        </div>
    `
})
export class MessageListComponent implements OnInit{
    ngOnInit(): void {
        this.messageService.getMessage()
            .subscribe(
                (message: Message[]) => {
                    this.messages = message;
                },
                error2 => console.error(error2)
            );
    }

    messages: Message[];

    constructor(private messageService: MessageService) {

    }
}