import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JookgruPage } from '../jookgru/jookgru';
import { NomsodPage } from '../nomsod/nomsod';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }
  jookgru(){
    this.navCtrl.setRoot(JookgruPage)
  }

  nomsod(){
    this.navCtrl.setRoot(NomsodPage)
  }
}
