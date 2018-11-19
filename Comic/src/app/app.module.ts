import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

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

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_INFO } from './firebase.info';

//i18n
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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
    JookgruPage,
    NomsodPage,
    Jookgru1Page,
    Jookgru2Page,
    Jookgru3Page,
    Nomsod1Page,
    Nomsod2Page,
    Nomsod3Page
    
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
    JookgruPage,
    NomsodPage,
    Jookgru1Page,
    Jookgru2Page,
    Jookgru3Page,
    Nomsod1Page,
    Nomsod2Page,
    Nomsod3Page
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  
})
export class AppModule {}
