import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jookgru1Page } from '../jookgru1/jookgru1';
import { Jookgru2Page } from '../jookgru2/jookgru2';

/**
 * Generated class for the JookgruPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jookgru',
  templateUrl: 'jookgru.html',
})
export class JookgruPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JookgruPage');
  }

  jookgru1(){
    this.navCtrl.push(Jookgru1Page)
  }
  jookgru2(){
    this.navCtrl.push(Jookgru2Page)
  }
}
