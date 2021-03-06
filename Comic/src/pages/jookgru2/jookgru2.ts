import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jookgru1Page } from '../jookgru1/jookgru1';
import { Jookgru3Page } from '../jookgru3/jookgru3';


@IonicPage()
@Component({
  selector: 'page-jookgru2',
  templateUrl: 'jookgru2.html',
})
export class Jookgru2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Jookgru2Page');
  }

  backEp(){
    this.navCtrl.push(Jookgru1Page);
  }

  nextEp(){
    this.navCtrl.push(Jookgru3Page);
  }

}
