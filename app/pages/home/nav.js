/*import {Page,NavController,NavParams} from 'ionic-angular';
@Page(
    templateUrl:'build/pages/home/nav.html'
})

export class nav {
   item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}*/
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
var nav = (function () {
    function nav(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.item = params.data.item;
        this.navCtrl = navCtrl;
        /*  if(platform.is('ios')) {
            // code...
            console.log('这是iphone');
          }*/
    }
    nav.prototype.goback = function () {
        this.navCtrl.pop();
    };
    nav = __decorate([
        core_1.Component({
            templateUrl: './build/pages/home/nav.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams])
    ], nav);
    return nav;
}());
exports.nav = nav;
