import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';

import { NavigationBasicPage } from '../pages/navigate/navigation';
import { BackgroundPage } from '../pages/landing/landing';*/
import { flightBasicPage } from '../pages/flightstatus/flightstatus';
import { flightSearchPage } from '../pages/searchflight/searchflight';
import { AccountHomePage } from '../pages/myAccount/myaccount';
import { BrokerListPage } from '../pages/broker/broker';
import { LoginPage } from '../pages/login/login';
import { Whatsapp } from '../pages/whatsapp/whatsapp';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage , icon: 'color-fill'},
      { title: 'My Account', component: AccountHomePage , icon: 'build' },
  /*    { title: 'Hotels', component: BackgroundPage },
      { title: 'Flights', component: HomePage },
      { title: 'Country', component: ListPage },
      { title: 'Framework', component: NavigationBasicPage },
*/    
      { title: 'WhatsApp ', component: Whatsapp , icon:'logo-whatsapp'},
      { title: 'Book Trip ', component: flightSearchPage , icon:'card' },
      { title: 'Flight Status', component: flightBasicPage , icon:'cash' },
      { title: 'Help and Assistance', component: BrokerListPage ,icon:'help-buoy' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
