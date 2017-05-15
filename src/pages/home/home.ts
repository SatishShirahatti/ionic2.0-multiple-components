import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NavigationBasicPage} from '../navigate/navigation';
import {userDetails} from "../userForm/userdetails";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	userform =userDetails;
	navigateLearning = NavigationBasicPage;
  constructor(public navCtrl: NavController) {
  }
	datalist = [
	{ image  : 'assets/img/plane.jpg',
	  title : 'IndiGo6E-506',
	  flightname : 'IndiGo',
	  Departure : '20:15',
	  Arrival : '00:50',
	  class : 'First class',
	  Duration : '2h 25m',
	  Price : '8,485',

	},
	{ image  : 'assets/img/emirates.jpg',
	  title : 'Emirates-800',
	  flightname : 'Emirates',
	  Departure : '23:15',
	  Arrival : '00:50',
	  class : 'First class',
	  Duration : '1h 25m',
	  Price : '8,485',

	},
	{ image  : 'assets/img/ana.jpg',
	  title : 'ANA-506',
	  flightname : 'ANA',
	  Departure : '10:15',
	  Arrival : '00:50',
	  class : 'Ecomony class',
	  Duration : '1h 25m',
	  Price : '2,485',

	},
	{ image  : 'assets/img/plane.jpg',
	  title : 'IndiGo6E-506',
	  flightname : 'IndiGo',
	  Departure : '20:15',
	  Arrival : '00:50',
	  class : 'First class',
	  Duration : '2h 25m',
	  Price : '2,485',

	},
	{ image  : 'assets/img/emirates.jpg',
	  title : 'Emirates-506',
	  flightname : 'Emirates',
	  Departure : '20:15',
	  Arrival : '00:50',
	  class : 'ecomony class',
	  Duration : '5h 25m',
	  Price : '10,485',

	},
	
	
	];


}
