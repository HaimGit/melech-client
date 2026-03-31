import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeeklyTablePanelsComponent } from './components/panel/weeklyTablePanel.component';

@NgModule({
  declarations: [
    AppComponent,
    WeeklyTablePanelsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
