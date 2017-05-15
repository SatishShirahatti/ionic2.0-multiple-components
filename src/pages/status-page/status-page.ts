import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-status-page',
  templateUrl: 'status-page.html',
})
export class StatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 statusdetails = [
 {
 image :'assets/img/avatar-han.png',
 user :'Han',
 time: '6 h ago',
 },
 {
 image :'assets/img/avatar-rey.png',
 user :'Rey',
 time: '7 h ago',
 },
 {
 image :'assets/img/avatar-luke.png',
 user :'Luke',
 time: '8h 50mins ago',
 },
 {
 image :'assets/img/avatar-poe.png',
 user :'Poe',
 time: '10 h ago',
 },
 {
 image :'assets/img/avatar-ben.png',
 user :'Ben',
 time: '11 h ago',
 },
  {
 image :'assets/img/avatar-leia.png',
 user :'Leia',
 time: '12 h ago',
 },
  {
 image :'assets/img/avatar-yoda.png',
 user :'yoda',
 time: '13 h ago',
 },
 ];

}
