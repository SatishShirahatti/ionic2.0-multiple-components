import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {BrokerListPage} from '../broker/broker';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {
userlogin : string =  "Login";
 isAndroid: boolean = false;
splash = true;
 loginTobroker = BrokerListPage;

  constructor(public navCtrl: NavController ,platform: Platform) {
   this.isAndroid = platform.is('android');
  }
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  

}