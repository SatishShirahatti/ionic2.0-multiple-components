import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';
import {brokerDetails} from './broker-details'


@Component({
    selector: 'page-broker-list',
    templateUrl: 'broker.html'
})
export class BrokerListPage {

    brokers: Array<any>;

    constructor(public navCtrl: NavController, public service: BrokerService) {
        service.findAll().then(data => this.brokers = data);
    }


openBrokerDetails(broker){

this.navCtrl.push(brokerDetails,broker);
}
    

    

}