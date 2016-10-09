import {
	Component
} from '@angular/core';
import {
	NavController,
	Slides,
	Alert,
	Loading,
	NavParams

} from 'ionic-angular';
import {
	Http
} from "@angular/http";
import 'rxjs/add/operator/map';
@Component({
	templateUrl: 'build/pages/about/movieView.html'
})

export class movieView {
	item;
	constructor(public navCtrl: NavController,public params: NavParams) {

		this.navCtrl = navCtrl;

		this.item=params.data.item;
	}

	goback() {
	 	this.navCtrl.pop();
	}

 	onPageDidEnter(){
 		console.log(this.params.data);
 	}
}
