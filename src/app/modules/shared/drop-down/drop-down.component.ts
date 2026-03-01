import { Component, Input } from '@angular/core';
import { DisplayedListItem } from 'src/app/models/displayed-list-item';

@Component({
  selector: 'kng-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.less']
})
export class DropDownComponent {
  @Input() values!: DisplayedListItem[];
  @Input() value?: DisplayedListItem;

  constructor() {}
}
