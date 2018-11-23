import { FIREBASE_INFO } from './../../app/firebase.info';
import { MainPage } from './../main/main';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import firebase from 'firebase';
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

  constructor(private facebook: Facebook,private fireAuth: AngularFireAuth,private toast: ToastController ,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
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

  loginFB(){
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
        alert(JSON.stringify(result));
        this.navCtrl.push(MainPage);
      }).catch(function(error) {
        alert(JSON.stringify(error))
      });

    /*this.facebook.login(["email"]).then((loginResponse) => {

      let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
      
      firebase.auth().signInWithCredential(credential).then((info) => {
        alert(JSON.stringify(info));*/
    })

  }

}
