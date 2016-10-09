import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {userCenter} from '../contact/userCenter';
import {setting} from '../setting/setting';

//依赖注入
import{Tabs} from  'ionic-angular';
import{Injectable,ViewChild} from '@angular/core';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

 @ViewChild('mainTabs') tabRef:Tabs;
 

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root =HomePage;
    this.tab2Root =AboutPage;
    this.tab3Root =setting;
    this.tab4Root=userCenter;
  }

  ionViewDidEnter(){
    this.tabRef.select(0);
  }
}
