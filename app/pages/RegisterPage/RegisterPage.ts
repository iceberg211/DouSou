import {Component} from '@angular/core';
import {NavController, ViewController, Loading, Alert, Toast, Modal} from 'ionic-angular';
@Component({
  templateUrl: 'build/pages/RegisterPage/RegisterPage.html'
})

export class RegisterClass {
	//在构造函数创建ViewController的实例
	constructor(private viewCtrl: ViewController) {
		this.viewCtrl = viewCtrl;
	}

	colse() {
		this.viewCtrl.dismiss();
	}
}