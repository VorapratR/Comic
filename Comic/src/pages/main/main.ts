import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tab1Page } from '../tab1/tab1';
import { Tab2Page } from '../tab2/tab2';
import { Tab3Page } from '../tab3/tab3';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  
  tab1Page = Tab1Page;
  tab2Page = Tab2Page;
  tab3Page = Tab3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Sure to Logout?',
      message: 'Do you agree to logout?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.navCtrl.push(HomePage)
          }
        }
      ]
    });
    confirm.present()
  }

}
