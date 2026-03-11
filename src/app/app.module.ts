import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MainComponent } from './main-page/main.component';
import { WeeklyScheduleComponent } from './main-page/weekly-display/weekly-schedule/weekly-schedule.component';
import { TableFilteringComponent } from './main-page/weekly-display/weekly-schedule/table-filtering/table-filtering.component';

@NgModule({
  declarations: [AppComponent, MainComponent, WeeklyScheduleComponent, TableFilteringComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
