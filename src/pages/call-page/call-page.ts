import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-call-page',
  templateUrl: 'call-page.html',
})
export class CallPage {

calls : string = "AllCalls";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

callDetials = [

	{
	image: 'assets/img/avatar-ben.png',
	name : 'dad (3)',
	type : 'Incoming',
	time : 'Yesterday',
	},
	{
	image: 'assets/img/avatar-finn.png',
	name : 'usha',
	type : 'Missed',
	time : 'Yesterday',
	},
	{
	image: 'assets/img//avatar-rey.png',
	name : 'Shruti (4)',
	type : 'Outgoing',
	time : 'Yesterday',
	},
	{
	image: 'assets/img/avatar-luke.png',
	name : 'Raghu',
	type : 'missed',
	time : 'Yesterday',
	},
	{
	image: 'assets/img/avatar-poe.png',
	name : 'Zeeshan (3)',
	type : 'Incoming',
	time : 'Yesterday',
	},
	{
	image: 'assets/img/avatar-finn.png',
	name : 'Ramu (3)',
	type : 'Incoming',
	time : 'Yesterday',
	},

];

missedCallDetials = [

	{
	image: 'assets/img/avatar-ben.png',
	name : 'dad (3)',
	type : 'Incoming',
	time : 'Yesterday',
	},
	{
	image: 'assets/img/avatar-finn.png',
	name : 'usha',
	type : 'Missed',
	time : 'Yesterday',
	},
	{
	image: 'assets/img//avatar-rey.png',
	name : 'Shruti (4)',
	type : 'Outgoing',
	time : 'Yesterday',
	},
	{
	image: 'assets/img/avatar-luke.png',
	name : 'Raghu',
	type : 'missed',
	time : 'Yesterday',
	},
	{
	image: 'assets/img/avatar-poe.png',
	name : 'Zeeshan (3)',
	type : 'Incoming',
	time : 'Yesterday',
	},
	{
	image: 'assets/img/avatar-finn.png',
	name : 'Ramu (3)',
	type : 'Incoming',
	time : 'Yesterday',
	},
	{
	image: 'assets/img/avatar-luke.png',
	name : 'Raghu',
	type : 'missed',
	time : 'Yesterday',
	},
	{
	image: 'assets/img/avatar-poe.png',
	name : 'Zeeshan (3)',
	type : 'Incoming',
	time : 'Yesterday',
	},
	{
	image: 'assets/img/avatar-finn.png',
	name : 'Ramu (3)',
	type : 'Incoming',
	time : 'Yesterday',
	},

];

}
