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
var RegisterPage_1 = require('../RegisterPage/RegisterPage');
var ionic_angular_1 = require('ionic-angular');
var http_1 = require('@angular/http');
//@Component最重要的作用是通过selector属性（值为CSS选择符），指定这个组件渲染到哪个DOM对象上。 @View最重要的作用是通过template属性，指定渲染的模板。
/* class EzApp{...}等于class EzApp{...}
EzApp.annotations = [new Component({selector:"ez-app"})];*/
var ContactPage = (function () {
    function ContactPage(navCtrl, viewCtrl, http) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.http = http;
        //初始化 es6中的写法
        this.user = {
            username: "",
            password: "",
            userface: "images/4.jpg"
        };
        //navCtrl的初始化, NavController为类型
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.http = http;
    }
    ContactPage.prototype.Login = function () {
        var _this = this;
        console.log(this.user.username);
        if (this.user.username = "") {
            //弹出弹出框 
            var alerUserNameError = ionic_angular_1.Alert.create({
                title: '用户中心',
                subTitle: '用户名输入不能为空',
                buttons: ['OK']
            });
            this.navCtrl.present(alerUserNameError);
            //使用Toast控件
            var toast = ionic_angular_1.Toast.create({
                message: '用户名输入不能为空',
                duration: 3000
            });
            this.navCtrl.present(toast);
        }
        else {
            //模拟登陆
            var loading_1 = ionic_angular_1.Loading.create({
                content: "正在登录中",
                spinner: "crescent",
                duration: 3000
            });
            this.navCtrl.present(loading_1);
            /*	//创建loading窗体，模拟3秒后登录成功，loading
                setTimeout(() => {
                    loading.dismiss();
                }, 3000);*/
            //模拟登陆，如果输入的账号的信息密码为1，因为登录成功，并且进行相关的保存动作
            if (this.user.password = '1') {
                console.log('我被执行了password');
                console.log(this.user.username);
                localStorage.setItem("username", this.user.username);
                localStorage.setItem("Login", "true");
                setTimeout(function () {
                    loading_1.dismiss(); //登陆进度条进行隐藏
                    _this.viewCtrl.dismiss(_this.user.username);
                }, 1000);
            }
            else {
                var toast = ionic_angular_1.Toast.create({
                    message: '密码错误',
                    duration: 2000
                });
                this.navCtrl.present(toast);
                console.log('我被执行了toast');
            }
        }
    };
    ContactPage.prototype.openRegisterPage = function () {
        var modal = ionic_angular_1.Modal.create(RegisterPage_1.RegisterClass);
        //将页面导入进来
        this.navCtrl.present(modal);
    };
    ContactPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/contact/contact.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.ViewController, http_1.Http])
    ], ContactPage);
    return ContactPage;
}());
exports.ContactPage = ContactPage;
