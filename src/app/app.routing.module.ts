import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { WeeklyScheduleComponent } from "./main-page/weekly-display/weekly-schedule/weekly-schedule.component";
import { MainComponent } from "./main-page/main.component";
import { WeeklyTablePanelsComponent } from "./main-page/weekly-display/weekly-order/panel/weekly-table-panel.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
        { path: '', component: MainComponent },
        { path: 'weekly-schedule', component: WeeklyScheduleComponent },
        { path: 'weekly-display', component: WeeklyTablePanelsComponent }
    ])
  ],
  exports: [RouterModule]
 })
 export class AppRoutingModule { }