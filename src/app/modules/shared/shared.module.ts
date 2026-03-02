import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './drop-down/drop-down.component';
import { DropdownSearchComponent } from './dropdown-search/dropdown-search.component';
import { PopupHeaderComponent } from './popup-header/popup-header.component';
import { MaterialModule } from '../material/material.module';
import { PipesModule } from './pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { CdkOverlayOrigin, CdkConnectedOverlay } from "@angular/cdk/overlay";
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    DropDownComponent,
    DropdownSearchComponent,
    PopupHeaderComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PipesModule,
    CdkOverlayOrigin,
    CdkConnectedOverlay
],
  exports: [
    DropDownComponent,
    DropdownSearchComponent,
    PopupHeaderComponent,
    PipesModule
  ]
})
export class SharedModule { }
