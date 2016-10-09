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
var RegisterClass = (function () {
    //在构造函数创建ViewController的实例
    function RegisterClass(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.viewCtrl = viewCtrl;
    }
    RegisterClass.prototype.colse = function () {
        this.viewCtrl.dismiss();
    };
    RegisterClass = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/RegisterPage/RegisterPage.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.ViewController])
    ], RegisterClass);
    return RegisterClass;
}());
exports.RegisterClass = RegisterClass;
