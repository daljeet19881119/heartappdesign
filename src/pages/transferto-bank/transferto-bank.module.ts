import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransfertoBankPage } from './transferto-bank';

@NgModule({
  declarations: [
    TransfertoBankPage,
  ],
  imports: [
    IonicPageModule.forChild(TransfertoBankPage),
  ],
})
export class TransfertoBankPageModule {}
