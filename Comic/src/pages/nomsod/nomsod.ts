import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nomsod1Page } from '../nomsod1/nomsod1';
import { Nomsod2Page } from '../nomsod2/nomsod2';

/**
 * Generated class for the NomsodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nomsod',
  templateUrl: 'nomsod.html',
})
export class NomsodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NomsodPage');
  }

  nomsod1(){
    this.navCtrl.push(Nomsod1Page)
  }
  nomsod2(){
    this.navCtrl.push(Nomsod2Page)
  }
}
