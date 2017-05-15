import { Component } from '@angular/core';
import {StatusPage} from "../status-page/status-page";
import {CallPage} from "../call-page/call-page";
import {ChatPage} from "../chat-page/chat-page";


@Component({
  selector: 'page-whatsapp',
  templateUrl: 'whatsapp.html',
})
export class Whatsapp {

  tab1Root = StatusPage;
  tab2Root = ChatPage;
  tab3Root = CallPage;

  constructor() {

  }

 

}



