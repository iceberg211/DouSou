import {Component} from '@angular/core';
import {NavController, Page, NavParams, Modal, Loading} from 'ionic-angular';
import {nav} from '../home/nav';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  container = [];
  musicList = [];
  bookList = [];
  pet: string = "puppies";
  Bookflag = false;
  musicflag = false;

  public URL: string = "https://api.douban.com/v2/";
  constructor(public navCtrl: NavController, public http: Http) {
    this.http = http;
    this.navCtrl = navCtrl;
  }
  onInput(event) {
    let modal = Modal.create(nav);
    this.navCtrl.present(modal);
  }
  onPageLoaded() {
    var loading = Loading.create({
      content: '正在加载数据中，请稍后',
    });
    this.navCtrl.present(loading);
    this.http.get("https://api.douban.com/v2/movie/in_theaters?city=深圳").map(res => res.json()).subscribe(data => {
      this.container = data.subjects;
      loading.dismiss();
      console.log(this.container);
    }, error => {
      console.log('404');
    });

  }
  setTop(item) {
    for (var i = 0; i < this.container.length; i++) {
      if (item === this.container[i]) {
        this.container.unshift(this.container[i]);
        this.container.splice(i + 1, 1);//删除数据
        break;
      }
    }
  }
  getBooKList() {
    if (this.Bookflag == false) {
      var loader = Loading.create({
        content: '正在加载数据中，请稍后',
      });
      this.navCtrl.present(loader);
      this.http.get(this.URL + 'book/search?q=科幻').map(res => res.json()).subscribe(data => {
        console.log(data);
        loader.dismiss();
        this.bookList = data.books;
        this.Bookflag = true;
      }, error => {
        console.log('没有获取到数据');
      })
    }
  }
  onPageWillEnter() {
    this.http.get(this.URL + 'music/search?q=周杰伦').map(res => res.json()).subscribe(data => {
      console.log(data);
      this.musicList = data.musics;
    }, error => {
      console.log('没有获取到数据');
    });
  }
}
