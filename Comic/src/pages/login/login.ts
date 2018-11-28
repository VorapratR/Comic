import { FIREBASE_INFO } from './../../app/firebase.info';
import { MainPage } from './../main/main';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoadingController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
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
  static getData(): any {
    throw new Error("Method not implemented.");
  }

  user = {} as User;
  userData:any;

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

  async loginFB(){
    //let provider = new firebase.auth.FacebookAuthProvider();
    try{
      const infoFB = await this.facebook.login(['public_profile', 'email']);
      this.facebook.login(['public_profile', 'email']).then((response: FacebookLoginResponse) => {
        this.facebook.api('me?fields=id,name,email,first_name,picture.width(250).height(250).as(picture_large)',[]).then(profile => {
          this.userData = {
            email: profile['email'],
            first_name: profile['first_name'],
            picture: profile['picture_large']['data']['url'],
            username: profile['name']
          };
        });
      });
  
      if(infoFB){
        await this.navCtrl.push(MainPage);
        }
      }
      catch(e){
        this.toast.create({
          duration : 1000,
          cssClass:"error"
        }).present();
      }
    /*firebase.auth().signInWithRedirect(provider).then(()=>{
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
    }

    getData() {
      return this.userData;
    }
  }

