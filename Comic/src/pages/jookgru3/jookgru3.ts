import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jookgru2Page } from '../jookgru2/jookgru2';

/**
 * Generated class for the Jookgru3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jookgru3',
  templateUrl: 'jookgru3.html',
})
export class Jookgru3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Jookgru3Page');
  }

  backEp(){
    this.navCtrl.push(Jookgru2Page);
  }

  nextEp(){
    
  }

}
