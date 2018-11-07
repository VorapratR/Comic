import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartoonPage } from './cartoon';

@NgModule({
  declarations: [
    CartoonPage,
  ],
  imports: [
    IonicPageModule.forChild(CartoonPage),
  ],
})
export class CartoonPageModule {}
