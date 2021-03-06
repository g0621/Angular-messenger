import {Component, OnInit} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-message-input',
    templateUrl: './message.input.component.html',
})
export class MessageInputComponent implements OnInit {
    constructor(private messageService: MessageService) {

    }

    message: Message;


    onSave(form: NgForm) {
        const message: Message = new Message(form.value.content, 'bitchgyan');
        this.messageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        form.resetForm();
    }

    onClear(form: NgForm) {
        form.resetForm();
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        )
    }
}