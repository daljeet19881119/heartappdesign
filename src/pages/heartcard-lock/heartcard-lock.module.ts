import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeartcardLockPage } from './heartcard-lock';

@NgModule({
  declarations: [
    HeartcardLockPage,
  ],
  imports: [
    IonicPageModule.forChild(HeartcardLockPage),
  ],
})
export class HeartcardLockPageModule {}
