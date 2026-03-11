import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weekly-schedule',
  templateUrl: './weekly-schedule.component.html',
  styleUrls: ['./weekly-schedule.component.less']
})
export class WeeklyScheduleComponent implements OnInit {

  totalWeeklyCrewMembersCount!: number;
  totalWeeklyMissingCrewMembers!: number;
  dayShiftCrewMembersCount!: number;
  nightShiftCrewMembersCount!: number;

  ngOnInit(): void {
    this.totalWeeklyCrewMembersCount = 57;
    this.totalWeeklyMissingCrewMembers = 5;
    this.dayShiftCrewMembersCount = 28;
    this.nightShiftCrewMembersCount = 26;
  }
  
}
