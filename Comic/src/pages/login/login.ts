import { MainPage } from './../main/main';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingController } from 'ionic-angular';

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

  user = {} as User;

  constructor(private fireAuth: AngularFireAuth,private toast: ToastController ,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

    async login(user: User){
      const loader = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 1000,
      });
      loader.present();
  
      try{
        const info = await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        
  
        if(info){
          await this.navCtrl.push(MainPage);
        }
      }
      catch(e){
        this.toast.create({
          message: "Email หรือ Password ไม่ถูกต้อง!",
          duration: 4000,
        }).present();
        
      }
  }

}
