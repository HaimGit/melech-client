import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MelechMatPopupDirective } from './melech-mat-popup.directive';



@NgModule({
  declarations: [MelechMatPopupDirective],
  imports: [
    CommonModule
  ],
  exports: [
    MelechMatPopupDirective
  ]
})
export class DirectivesModule { }
