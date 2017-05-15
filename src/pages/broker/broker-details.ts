import {Component} from '@angular/core';
import {NavParams , NavController} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';

@Component({
	templateUrl : 'broker-details.html',
})

export class brokerDetails {
  broker: any;
	constructor(public navCtrl: NavController, 
		public navParams: NavParams, public service: BrokerService){
		 this.broker = this.navParams.data;
	}

}