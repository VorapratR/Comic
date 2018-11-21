import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sompond2Page } from '../sompond2/sompond2';
import { Sompond4Page } from '../sompond4/sompond4';

/**
 * Generated class for the Sompond3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sompond3',
  templateUrl: 'sompond3.html',
})
export class Sompond3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sompond3Page');
  }
  backEp(){
    this.navCtrl.push(Sompond2Page);
  }

  nextEp(){
    this.navCtrl.push(Sompond4Page);
  }

}
