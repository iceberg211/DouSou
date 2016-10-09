import {
    Component
} from '@angular/core';
import {
    RegisterClass
} from '../RegisterPage/RegisterPage'
import {
    NavController,
    ViewController,
    Loading,
    Alert,
    Toast,
    Modal
} from 'ionic-angular';
import {
    ContactPage
} from '../contact/contact';

@Component({
    templateUrl: 'build/pages/contact/userCenter.html'
})
export class userCenter {
    public user = {
        userface: 'images/2.jpg'
    }

    constructor(public navCtrl: NavController) {
        this.navCtrl = navCtrl;
        if (localStorage.getItem('Login') == 'true') {
            //已经登陆的状态，显示用户信息

            this.user.userface = "images/" +"2jpg";

        }
		/* else {
			let modal = Modal.create(ContactPage);
			modal.onDismiss(data=>{
				this.user.userface=="images/"+data+"jpg";
			});
			this.navCtrl.present(modal);
		}*/
    }
    logout() {
        localStorage.setItem('Login', "");
        localStorage.setItem('username', "");
        let modal = Modal.create(ContactPage);
        modal.onDismiss(data => {
            this.user.userface == "images/" + data + "jpg";
        })
        this.navCtrl.present(modal);
    }
}
