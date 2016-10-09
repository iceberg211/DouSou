import {Component} from '@angular/core';
import {
    NavController,
    Slides,
    Alert,
    Loading,
    NavParams, Modal,Toast

} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {movieView} from '../about/movieView';
import { searchPage } from '../about/searchPage';
@Component({
    templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
    myInput = '';
    counter = 0;
    start = 20;
    items = [];
    mySlideOptions = {
        initialSlide: 1,
        loop: true,
        autoplay: 3000,
        pager:true
    };
    constructor(private navCtrl: NavController, private http: Http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    onViewEnter(movie) {
        this.navCtrl.push(movieView, {
            item: movie
        });
    }
    onPageLoaded() {
        let loader = Loading.create({
            content: '正在加载数据中，请稍后',
            duration: 1000
        });
        this.navCtrl.present(loader);
        this.http.get("https://api.douban.com/v2/movie/top250?start=0").map(res => res.json()).subscribe(data => {
            this.items = data.subjects;
            console.log(this.items);
            this.counter = 1;
        }, error => {
            console.log(error);
        })
    }
    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        this.http.get("https://api.douban.com/v2/movie/top250?start="+this.start*this.counter).map(res => res.json()).subscribe(data => {
            this.items = this.items.concat(data.subjects);
            infiniteScroll.complete();
            this.counter++;
        }, error => {
            console.log(error);
            let  toast=Toast.create({
              message:'获取数据失败，可能是网络开了点小差',
              duration:2000
            });
            this.navCtrl.present(toast);
        })
    }
  onInput(event) {
        console.log(this.myInput);
        let modal=Modal.create(movieView);
        this.navCtrl.present(modal);
        this.http.get("https://api.douban.com/v2/movie/search?q="+this.myInput).map(res => res.json()).subscribe(data => {
        console.log(data);
        }, error => {
        })
    }

}
