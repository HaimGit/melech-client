import { Component } from '@angular/core';

@Component({
  selector: 'weekly-table-panel',
  templateUrl: './weeklyTablePanel.component.html',
  styleUrls: ['./weeklyTablePanel.component.less']
})
export class WeeklyTablePanelsComponent  {

specialEvents = [{name: "תרגיל אנשי צוות", count: "15/30"}, {name: "תרגיל אנשי צוות", count: "17/30"}];
missingPositions = [{day: "'יום ד", count: 1}, {day: "'יום ו", count: 2}];
missingPositionsSum = 3;
requiredTeam = {reservistCount: 3, regularsCount: 2, sum: 5};

}

