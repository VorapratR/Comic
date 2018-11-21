import { Component, ViewChild } from '@angular/core';
import { Platform,Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  lang:any;
  rootPage:any = HomePage;

  @ViewChild(Nav) nav:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public translate: TranslateService) {
  

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.lang = 'en';
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    });
  }
  switchLanguage() {
    this.translate.use(this.lang);
  }



  openHome(){
    this.nav.setRoot(MainPage);
  }

    
 

  

}

