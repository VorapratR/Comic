import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sompond1Page } from '../sompond1/sompond1';
import { Sompond3Page } from '../sompond3/sompond3';

/**
 * Generated class for the Sompond2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sompond2',
  templateUrl: 'sompond2.html',
})
export class Sompond2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sompond2Page');
  }

  backEp(){
    this.navCtrl.push(Sompond1Page);
  }

  nextEp(){
    this.navCtrl.push(Sompond3Page);
  }

}
