import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerialControlEventFormComponent } from './aerial-control-event-form/aerial-control-event-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AerialControlEventFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FormsModule { }
