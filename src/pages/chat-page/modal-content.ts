import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
      templateUrl:'modal-content.html',
})

export class ModalContentPage {
   item;
  constructor(public params: NavParams,public viewCtrl: ViewController) 
  {
  	 this.item = params.data.item;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}