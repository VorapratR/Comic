import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:any;
  password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  check() {
    if(this.user =="1" && this.password == "1"){
      this.navCtrl.push(MainPage);
    }else {
      alert("Username and Password unknow!!!");
    }
  }

}
