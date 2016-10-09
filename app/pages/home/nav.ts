import {Component} from '@angular/core';
import {NavController, Page,NavParams,Platform} from 'ionic-angular';

@Component({
  templateUrl: './build/pages/home/nav.html',
})
export class nav {
  item;

  constructor(public navCtrl: NavController,public params: NavParams) {
    this.item = params.data.item;
    this.navCtrl=navCtrl;
  }
   goback() {
     this.navCtrl.pop();
   }


}
