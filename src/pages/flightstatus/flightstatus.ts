import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import {HomePage} from '../home/home';


@Component({
  templateUrl: 'flightstatus.html'
})
export class flightBasicPage {
  status: string = "Route";
  isAndroid: boolean = false;
  bookFlight = HomePage;
  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}