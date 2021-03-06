import { MessageService } from './message.service';
import { Message } from './message.model';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-message-list',
    templateUrl: `
        <div class="col-md-8 col-md-offset-2">
        <app-message [message]="message" (editClicked)="message.content = $event" *ngFor ="let message of messages"></app-message>
        </div>
    `
})

export class MessageListComponent implements OnInit {
    messages: Message[];

    constructor(private messageService: MessageService){}

    ngOnInit(){
        this.messages = this.messageService.getMessage();
    }
}