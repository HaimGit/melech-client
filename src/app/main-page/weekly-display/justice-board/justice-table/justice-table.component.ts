import { Component, OnInit } from '@angular/core';
import { COLOR_RANGES } from '../../../../count-to-color.pipe';

export interface crewmanDetails {
  name: string;
  role: string;
  status: string;
  course: number;
}

export interface GroupHeader {
  isGroup: true;
  label: string;
}

export interface DataRow {
  details: crewmanDetails;
  [key: string]: crewmanDetails | number;
}

export type TableRow = DataRow | GroupHeader;

export interface DataColumn {
  key: string;
  label: string;
  hasRequiredAmount: boolean;
}

@Component({
  selector: 'justice-table',
  templateUrl: './justice-table.component.html',
  styleUrls: ['./justice-table.component.less'],
})
export class JusticeTableComponent implements OnInit {
  constructor() {}
  colorGuide = COLOR_RANGES.map(({ color, range }) => ({ color, range }));
  dataColumns: DataColumn[] = [
    { key: 'weekend', label: 'סופ"ש', hasRequiredAmount: true },
    { key: 'partialWeekend', label: 'סופ"ש חלקי', hasRequiredAmount: true },
    { key: 'nights', label: 'לילות', hasRequiredAmount: true },
    { key: 'earlySunday', label: 'ראשון מוקדם', hasRequiredAmount: true },
    { key: 'vacations', label: 'חופשים', hasRequiredAmount: false },
    { key: 'abroad', label: 'חו"ל', hasRequiredAmount: false },
  ];
  displayedColumns: string[] = ['details', ...this.dataColumns.map(c => c.key)];
  dataSource: TableRow[] = [
    { details: { name: 'אורי אליימלך', role: 'נהג', status: 'ארזים', course: 79 }, weekend: 1, partialWeekend: 0, nights: 2, earlySunday: 4, vacations: 5, abroad:0 },
    { details: { name: 'אורי אליימלך', role: 'נהג', status: 'ארזים', course: 79 }, weekend: 4, partialWeekend: 1, nights: 0, earlySunday: 2, vacations: 0, abroad:5 },
    { details: { name: 'אורי אליימלך', role: 'נהג', status: 'ארזים', course: 79 }, weekend: 1, partialWeekend: 0, nights: 4, earlySunday: 2, vacations: 5, abroad:0 },
    { details: { name: 'אורי אליימלך', role: 'נהג', status: 'ארזים', course: 79 }, weekend: 0, partialWeekend: 4, nights: 5, earlySunday: 0, vacations: 2, abroad:1 },
    { details: { name: 'אורי אליימלך', role: 'נהג', status: 'ארזים', course: 79 }, weekend: 1, partialWeekend: 5, nights: 0, earlySunday: 2, vacations: 4, abroad:0 },
    { details: { name: 'אורי אליימלך', role: 'נהג', status: 'ארזים', course: 79 }, weekend: 5, partialWeekend: 2, nights: 0, earlySunday: 1, vacations: 0, abroad:4 },
  ];
  isGroup = (_index: number, row: TableRow): boolean => 'isGroup' in row;
  trackByColor = (_index: number, item: { color: string; range: string }) => item.color;
  trackByCol = (_index: number, col: { key: string; label: string }) => col.key;
  ngOnInit(): void {}
}
