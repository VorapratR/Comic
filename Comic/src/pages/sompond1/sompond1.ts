import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SompondPage } from '../sompond/sompond';
import { Sompond2Page } from '../sompond2/sompond2';

/**
 * Generated class for the Sompond1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sompond1',
  templateUrl: 'sompond1.html',
})
export class Sompond1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sompond1Page');
  }
  backHome(){
    this.navCtrl.push(SompondPage);
  }

  nextEp(){
    this.navCtrl.push(Sompond2Page);
  }

}
