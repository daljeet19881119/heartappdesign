import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { ContibutorsPage } from '../pages/contibutors/contibutors';
import { TeamPage } from '../pages/team/team';
import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { TermAndConditionPage } from '../pages/term-and-condition/term-and-condition';
import { InviteFriendsPage } from '../pages/invite-friends/invite-friends';
import { HeartcardActivatePage } from '../pages/heartcard-activate/heartcard-activate';
import { HeartcardLockPage } from '../pages/heartcard-lock/heartcard-lock';
import { HeartcardUnlockPage } from '../pages/heartcard-unlock/heartcard-unlock';
import { TransfertoBankPage } from '../pages/transferto-bank/transferto-bank';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContibutorsPage,
    TeamPage,
    PrivacypolicyPage,
    EditProfilePage,
    TermAndConditionPage,
    InviteFriendsPage,
    ProfilePage,
    HeartcardActivatePage,
    HeartcardLockPage,
    HeartcardUnlockPage,
    TransfertoBankPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContibutorsPage,
    TeamPage,
    PrivacypolicyPage,
    EditProfilePage,
    TermAndConditionPage,
    InviteFriendsPage,
    ProfilePage,
    HeartcardActivatePage,
    HeartcardLockPage,
    HeartcardUnlockPage,
    TransfertoBankPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
