import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.;
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;
  name:any;

  constructor(private fireAuth: AngularFireAuth,private toast: ToastController ,public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  async signup(user: User){
    const loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000,
    });
    loader.present();

    try{
      const info = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      

      if(info){
        this.navCtrl.push(HomePage);
      }
    }
    catch(e){
      this.toast.create({
        message: "Email มีผู้อื่นใช้แล้วหรือ Password น้อยกว่า 6 หลัก",
        duration: 4000,
      }).present();
    }
  }
}


