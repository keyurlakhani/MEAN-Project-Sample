import { SignupComponent } from './auth/signup.component';
import { LogoutComponent } from './auth/logout.component';
import { HeaderComponent } from './header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { MessagesComponent } from './message/messages.component';
import { MessageService } from './message/message.service';
import { MessageInputComponent } from './message/message-input.component';
import { MessageListComponent } from './message/message-list.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { routing } from './app.routing';
import { SigninComponent } from './auth/signin.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {

}