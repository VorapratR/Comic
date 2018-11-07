import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartoonPage } from '../cartoon/cartoon';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user:any;
  name:any;
  password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  subscribe() {
    this.navCtrl.push(CartoonPage);
  }

}
