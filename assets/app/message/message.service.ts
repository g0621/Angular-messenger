import {Message} from "./message.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
@Injectable()

export class MessageService{
    private message: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: HttpClient){}

    addMessage(message: Message){
        this.message.push(message);
        const body = JSON.stringify(message);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post('/message',body,{headers : headers})
            .map((response: Response) => response)
            .catch((error: Response) => Observable.throw(error));
        //this doesnt sends the req it only starts an observable
        //.map is converting the data back to json object
        //catch doest change automatically to Observable
    }

    getMessage(){
        return this.http.get('/message')
            .map((response: Response) => {
                const msg = response['obj'];
                let transMessageArray: Message[] = [];
                for (let message of msg){
                    transMessageArray.push(new Message(message.content,'bla',message._id,'12345'));
                }
                this.message = transMessageArray;
                return transMessageArray;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    editMessege(message: Message){
        this.messageIsEdit.emit(message);
    }

    deleteMessage(message: Message){
        this.message.splice(this.message.indexOf(message),1)
    }

}