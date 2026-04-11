import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JusticeTableComponent } from './justice-table/justice-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CountToColorPipe } from './count-to-color.pipe';
import { WeeklyTablePanelsComponent } from './components/panel/weeklyTablePanel.component';

@NgModule({
  declarations: [
    AppComponent,
    JusticeTableComponent,
    CountToColorPipe,
    WeeklyTablePanelsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
