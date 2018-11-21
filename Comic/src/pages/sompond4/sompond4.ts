import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sompond3Page } from '../sompond3/sompond3';

/**
 * Generated class for the Sompond4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sompond4',
  templateUrl: 'sompond4.html',
})
export class Sompond4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sompond4Page');
  }

  backEp(){
    this.navCtrl.push(Sompond3Page);
  }

  nextEp(){
    
  }


}
