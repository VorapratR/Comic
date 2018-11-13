import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nomsod2Page } from '../nomsod2/nomsod2';

/**
 * Generated class for the Nomsod3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nomsod3',
  templateUrl: 'nomsod3.html',
})
export class Nomsod3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nomsod3Page');
  }

  backEp(){
    this.navCtrl.push(Nomsod2Page);
  }

  nextEp(){
    
  }

}
