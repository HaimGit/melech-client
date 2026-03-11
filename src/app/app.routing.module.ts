import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { WeeklyScheduleComponent } from "./main-page/weekly-display/weekly-schedule/weekly-schedule.component";
import { MainComponent } from "./main-page/main.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
        { path: '', component: MainComponent },
        { path: 'weekly-schedule', component: WeeklyScheduleComponent },
    ])
  ],
  exports: [RouterModule]
 })
 export class AppRoutingModule { }