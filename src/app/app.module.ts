import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BrokerListPage } from '../pages/broker/broker';
import { brokerDetails } from '../pages/broker/broker-details';
import { NavigationBasicPage , NavigationDetailsPage  } from '../pages/navigate/navigation';
import { flightBasicPage } from '../pages/flightstatus/flightstatus';
import { flightSearchPage } from '../pages/searchflight/searchflight';
import { carresults } from '../pages/searchflight/carsresult';
import { AccountHomePage } from '../pages/myAccount/myaccount';
import { BackgroundPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { userDetails } from '../pages/userForm/userdetails';
import { statusComplete } from '../pages/userForm/status';
import { Whatsapp } from '../pages/whatsapp/whatsapp';
import {StatusPage} from "../pages/status-page/status-page";
import {CallPage} from "../pages/call-page/call-page";
import {ChatPage} from "../pages/chat-page/chat-page";
import {ModalContentPage} from "../pages/chat-page/modal-content";

import { BrokerService } from "../providers/broker-service-mock";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BrokerListPage,
    brokerDetails,
    NavigationBasicPage ,
    NavigationDetailsPage ,
    flightBasicPage,
    flightSearchPage,
    carresults,
    AccountHomePage,
    BackgroundPage,
    LoginPage,
    userDetails,
    statusComplete,
    Whatsapp,
    StatusPage,
    ChatPage,
    CallPage,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
    NavigationBasicPage,
    NavigationDetailsPage,
    flightBasicPage,
    flightSearchPage,
    AccountHomePage,
    BackgroundPage,
    BrokerListPage,
    brokerDetails,
    carresults,
    userDetails,
    statusComplete,
    Whatsapp,
    StatusPage,
    ChatPage,
    CallPage,
    ModalContentPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    BrokerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
