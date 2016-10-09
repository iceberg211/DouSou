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
var home_1 = require('../home/home');
var about_1 = require('../about/about');
var userCenter_1 = require('../contact/userCenter');
var setting_1 = require('../setting/setting');
//依赖注入
var ionic_angular_1 = require('ionic-angular');
var core_2 = require('@angular/core');
var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = home_1.HomePage;
        this.tab2Root = about_1.AboutPage;
        this.tab3Root = setting_1.setting;
        this.tab4Root = userCenter_1.userCenter;
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        this.tabRef.select(0);
    };
    __decorate([
        core_2.ViewChild('mainTabs'), 
        __metadata('design:type', ionic_angular_1.Tabs)
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/tabs/tabs.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
}());
exports.TabsPage = TabsPage;
