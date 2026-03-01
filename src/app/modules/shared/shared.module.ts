import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './drop-down/drop-down.component';
import { DropdownSearchComponent } from './dropdown-search/dropdown-search.component';
import { PopupHeaderComponent } from './popup-header/popup-header.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    DropDownComponent,
    DropdownSearchComponent,
    PopupHeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    DropDownComponent,
    DropdownSearchComponent,
    PopupHeaderComponent
  ]
})
export class SharedModule { }
