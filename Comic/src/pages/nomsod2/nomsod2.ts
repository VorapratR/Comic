import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nomsod1Page } from '../nomsod1/nomsod1';
import { Nomsod3Page } from '../nomsod3/nomsod3';

/**
 * Generated class for the Nomsod2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nomsod2',
  templateUrl: 'nomsod2.html',
})
export class Nomsod2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nomsod2Page');
  }

  backEp(){
    this.navCtrl.push(Nomsod1Page);
  }

  nextEp(){
    this.navCtrl.push(Nomsod3Page);
  }

}
