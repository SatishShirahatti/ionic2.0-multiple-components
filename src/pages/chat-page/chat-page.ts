import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import {ModalContentPage} from "./modal-content";

@Component({
  selector: 'page-chat-page',
  templateUrl: 'chat-page.html',
})
export class ChatPage {

  items = [];

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,public modalCtrl: ModalController) {
  	  this.items =[ 
{
	image:'assets/img/avatar-han.png',
	user :'Han',
	 usertxt :'time ok',
	 calltime : '6 h ago',
},
{
	image:'assets/img/avatar-finn.png',
	user :'Anna',
	 usertxt :'Lorem',
	 calltime : '10 h ago',
},
{
	image:'assets/img//avatar-rey.png',
	user :'Daneil',
	 usertxt :'can come !!',
	 calltime : '16 h ago',
},
{
	image:'assets/img/avatar-luke.png',
	user :'Thomas',
	 usertxt :'Lorem sdlsj wereowijjn',
	 calltime : '2 h ago',
},
{
	image:'assets/img/avatar-poe.png',
	user :'Mary',
	 usertxt :'Dummy sdlsjd data goes here',
	 calltime : '6 h ago',
},
{
	image:'assets/img//avatar-rey.png',
	user :'Daneil',
	 usertxt :'can come !!',
	 calltime : '16 h ago',
},
{
	image:'assets/img/avatar-luke.png',
	user :'Thomas',
	 usertxt :'Lorem sdlsj wereowijjn',
	 calltime : '2 h ago',
},
{
	image:'assets/img/avatar-poe.png',
	user :'Mary',
	 usertxt :'Dummy sdlsjd data goes here',
	 calltime : '6 h ago',
},
{
	image:'assets/img//avatar-rey.png',
	user :'Daneil',
	 usertxt :'can come !!',
	 calltime : '16 h ago',
},
{
	image:'assets/img/avatar-luke.png',
	user :'Thomas',
	 usertxt :'Lorem sdlsj wereowijjn',
	 calltime : '2 h ago',
},
{
	image:'assets/img/avatar-poe.png',
	user :'Mary',
	 usertxt :'Dummy sdlsjd data goes here',
	 calltime : '6 h ago',
},

];
  
  }

  openModal(item) {

    let modal = this.modalCtrl.create(ModalContentPage,{item:item});
    modal.present();
  }

}

 
