import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NomsodPage } from '../nomsod/nomsod';
import { Nomsod2Page } from '../nomsod2/nomsod2';

/**
 * Generated class for the Nomsod1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nomsod1',
  templateUrl: 'nomsod1.html',
})
export class Nomsod1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nomsod1Page');
  }
  backHome(){
    this.navCtrl.push(NomsodPage);
  }

  nextEp(){
    this.navCtrl.push(Nomsod2Page);
  }

}
