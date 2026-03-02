import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerialControlEventFormComponent } from './aerial-control-event-form/aerial-control-event-form.component';
import { SharedModule } from '../shared/shared.module';
import { AirActivityFormComponent } from './aerial-control-event-form/air-activity-form/air-activity-form.component';

@NgModule({
  declarations: [
    AerialControlEventFormComponent,
    AirActivityFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FormsModule { }
