import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sompond1Page } from '../sompond1/sompond1';
import { Sompond2Page } from '../sompond2/sompond2';
import { Sompond3Page } from '../sompond3/sompond3';

/**
 * Generated class for the SompondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sompond',
  templateUrl: 'sompond.html',
})
export class SompondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SompondPage');
  }

  sompond1(){
    this.navCtrl.push(Sompond1Page)
  }
  sompond2(){
    this.navCtrl.push(Sompond2Page)
  }
  sompond3(){
    this.navCtrl.push(Sompond3Page)
  }

}
