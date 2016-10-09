import { Component } from '@angular/core';
import { RegisterClass } from '../RegisterPage/RegisterPage'
import { NavController, ViewController, Loading, Alert, Toast, Modal } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
    templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
    public user = {
        username: "",
        password: "",
        userface: "images/2.jpg"
    };
    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public http: Http) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.http = http;
    }
    Login() {
        console.log(this.user.username);
        if (this.user.username = "") {
            let alerUserNameError = Alert.create({
                title: '用户中心',
                subTitle: '用户名输入不能为空',
                buttons: ['OK']
            });
            this.navCtrl.present(alerUserNameError);
        }
        else {
            let loading = Loading.create({
                content: "正在登录中",
                spinner: "crescent",
                duration: 3000
            });
            this.navCtrl.present(loading);
            if (this.user.password == '1') {
                localStorage.setItem("username", this.user.username);
                localStorage.setItem("Login", "true");
                setTimeout(() => {
                    loading.dismiss(); //登陆进度条进行隐藏
                    this.viewCtrl.dismiss(this.user.username);
                }, 1000);

            } else {
                let toast = Toast.create({
                    message: '密码错误',
                    duration: 2000
                });
                this.navCtrl.present(toast);
            }

        }

    }
    openRegisterPage() {
        var modal = Modal.create(RegisterClass);
        this.navCtrl.present(modal);
    }
}
