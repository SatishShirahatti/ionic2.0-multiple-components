import {Component } from "@angular/core";
import { ModalController } from 'ionic-angular';
import {statusComplete} from '../userForm/status';


@Component({
  templateUrl: 'userdetails.html',
})





export class userDetails {
constructor(public modalCtrl: ModalController) {
		
	}
 GotoSuccessPage = statusComplete;	
	
  }
