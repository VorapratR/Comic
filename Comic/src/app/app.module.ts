import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MainPage } from '../pages/main/main';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { TabsPage } from '../pages/tabs/tabs';
import { Tab3Page } from '../pages/tab3/tab3';
import { JookgruPage } from '../pages/jookgru/jookgru';
import { NomsodPage } from '../pages/nomsod/nomsod';
import { Jookgru1Page } from '../pages/jookgru1/jookgru1';
import { Jookgru2Page } from '../pages/jookgru2/jookgru2';
import { Nomsod1Page } from '../pages/nomsod1/nomsod1';
import { Nomsod2Page } from '../pages/nomsod2/nomsod2';
import { Jookgru3Page } from '../pages/jookgru3/jookgru3';
import { Nomsod3Page } from '../pages/nomsod3/nomsod3';
import { Tab4Page } from '../pages/tab4/tab4';


//Firebase && ionic framework
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_INFO } from './firebase.info';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyD9Zwow7q34-FEEpIHLptVpBX1A8Pq1EOc",
  authDomain: "mobileapp-softdev.firebaseapp.com",
  databaseURL: "https://mobileapp-softdev.firebaseio.com",
  projectId: "mobileapp-softdev",
  storageBucket: "mobileapp-softdev.appspot.com",
  messagingSenderId: "60396671337"
});

//i18n
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SompondPage } from '../pages/sompond/sompond';
import { Sompond1Page } from '../pages/sompond1/sompond1';
import { Sompond2Page } from '../pages/sompond2/sompond2';
import { Sompond3Page } from '../pages/sompond3/sompond3';
import { Sompond4Page } from '../pages/sompond4/sompond4';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MainPage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    Tab4Page,
    JookgruPage,
    NomsodPage,
    SompondPage,
    Jookgru1Page,
    Jookgru2Page,
    Jookgru3Page,
    Nomsod1Page,
    Nomsod2Page,
    Nomsod3Page,
    Sompond1Page,
    Sompond2Page,
    Sompond3Page,
    Sompond4Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    }),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASE_INFO),
    AngularFireDatabaseModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MainPage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    Tab4Page,
    JookgruPage,
    NomsodPage,
    SompondPage,
    Jookgru1Page,
    Jookgru2Page,
    Jookgru3Page,
    Nomsod1Page,
    Nomsod2Page,
    Nomsod3Page,
    Sompond1Page,
    Sompond2Page,
    Sompond3Page,
    Sompond4Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    FileChooser,File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  
})
export class AppModule {}
