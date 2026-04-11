import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table-filtering',
  templateUrl: './table-filtering.component.html',
  styleUrls: ['./table-filtering.component.less']
})
export class TableFilteringComponent implements OnInit {

  @Input() title!: string;

  ngOnInit(): void {
    
  }
}
