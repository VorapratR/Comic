import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JookgruPage } from '../jookgru/jookgru';
import { Jookgru2Page } from '../jookgru2/jookgru2';

/**
 * Generated class for the Jookgru1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jookgru1',
  templateUrl: 'jookgru1.html',
})
export class Jookgru1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Jookgru1Page');
  }

  back(){
    this.navCtrl.push(JookgruPage);
  }

  nextEp(){
    this.navCtrl.push(Jookgru2Page);
  }

}
