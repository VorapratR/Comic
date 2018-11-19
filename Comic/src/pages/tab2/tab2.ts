import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  lang:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {
    this.lang = 'en';
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  switchLanguage() {
    this.translate.use(this.lang);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

}
