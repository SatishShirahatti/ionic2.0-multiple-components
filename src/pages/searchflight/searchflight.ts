import { Component } from '@angular/core';
import {HomePage} from '../home/home';
import {BackgroundPage} from '../landing/landing';
import {carresults} from '../searchflight/carsresult';
import { Platform } from 'ionic-angular';



@Component({
  templateUrl: 'searchflight.html'
})
export class flightSearchPage {
    bookFlight = HomePage;
    Bookhotels =BackgroundPage;
    carresult = carresults;

  booking: string = "Flights";
  isAndroid: boolean = false;
 outward : string = '2016-03-01';  
 return : string = '2017-02-01';  
 checkin : string ="";
 checkout : string ="";
 pickup : string = "";
 dropoff: string ="";
/*  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }*/


  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');

  }
}

