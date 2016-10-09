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
var nav_1 = require('../home/nav');
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.contacts = [{
                "contactId": 1,
                "contactName": "流川枫",
                "contactText": "越过山丘，才发现无人等候"
            }, {
                "contactId": 2,
                "contactName": "金玟岐",
                "contactText": "球迷集合了"
            }, {
                "contactId": 3,
                "contactName": "INFP双鱼",
                "contactText": "boomSaKAlaka"
            }, {
                "contactId": 4,
                "contactName": "帐号已注销",
                "contactText": "听歌的时候，旋律永远是第一感觉，然后才是歌词，歌词过后才是细节。 就像读小说，一开始只对剧情感兴趣，慢慢你开始琢磨小说中的人物，最后才发掘小说的内涵。"
            }, {
                "contactId": 6,
                "contactName": "喵了个咪的羞哒哒",
                "contactText": "越过山丘，才发现全是球迷"
            }, {
                "contactId": 7,
                "contactName": "约翰逊庞麦郎",
                "contactText": "金老师你这山丘太大我越不过去！"
            }];
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openNavDetailsPage = function (contact) {
        this.navCtrl.push(nav_1.nav, {
            item: contact
        });
    };
    HomePage.prototype.remove = function (contact) {
        //模拟删除，请求API删除，删除更改
        for (var i = 0; i < this.contacts.length; ++i) {
            if (this.contacts[i] == contact) {
                this.contacts.splice(i, 1);
            }
        }
    };
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home/home.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
