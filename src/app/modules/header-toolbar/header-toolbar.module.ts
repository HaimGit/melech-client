import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderToolbarComponent } from './header-toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DirectivesModule } from "src/app/directives/directives.module";

@NgModule({
  declarations: [
    HeaderToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    DirectivesModule
],
  exports: [
    HeaderToolbarComponent
  ]
})
export class HeaderToolbarModule { }
