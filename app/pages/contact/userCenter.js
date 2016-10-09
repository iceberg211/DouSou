"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var contact_1 = require('../contact/contact');
var userCenter = (function () {
    function userCenter(navCtrl) {
        this.navCtrl = navCtrl;
        this.user = {
            userface: 'images/1.jpg'
        };
        this.navCtrl = navCtrl;
        if (localStorage.getItem('Login') == true) {
            //已经登陆的状态，显示用户信息
            this.user.userface = "images/" + localStorage.getItem('username') + "jpg";
        }
        /* else {
            let modal = Modal.create(ContactPage);
            modal.onDismiss(data=>{
                this.user.userface=="images/"+data+"jpg";
            });
            this.navCtrl.present(modal);
        }*/
    }
    userCenter.prototype.logout = function () {
        var _this = this;
        localStorage.setItem('Login', "");
        localStorage.setItem('username', "");
        var modal = ionic_angular_1.Modal.create(contact_1.ContactPage);
        modal.onDismiss(function (data) {
            _this.user.userface == "images/" + data + "jpg";
        });
        this.navCtrl.present(modal);
    };
    userCenter = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/contact/userCenter.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], userCenter);
    return userCenter;
}());
exports.userCenter = userCenter;
