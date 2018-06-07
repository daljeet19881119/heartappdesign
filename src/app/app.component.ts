import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { ContibutorsPage } from '../pages/contibutors/contibutors';
// import { TeamPage } from '../pages/team/team';
// import { EditProfilePage } from '../pages/edit-profile/edit-profile';
// import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
// import { TermAndConditionPage } from '../pages/term-and-condition/term-and-condition';
// import { InviteFriendsPage } from '../pages/invite-friends/invite-friends';
//import { HeartcardActivatePage } from '../pages/heartcard-activate/heartcard-activate';
//import { HeartcardLockPage } from '../pages/heartcard-lock/heartcard-lock';
//import { HeartcardUnlockPage } from '../pages/heartcard-unlock/heartcard-unlock';
//import { HeartcardLockPage } from '../pages/heartcard-lock/heartcard-lock';
import { TransfertoBankPage } from '../pages/transferto-bank/transferto-bank';
//import { ProfilePage } from '../pages/profile/profile';

// import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TransfertoBankPage//;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

