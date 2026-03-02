import { Component, Input } from '@angular/core';
import { DisplayedListItem } from 'src/app/models/displayed-list-item';

@Component({
  selector: 'kng-dropdown-search',
  templateUrl: './dropdown-search.component.html',
  styleUrls: ['./dropdown-search.component.less']
})
export class DropdownSearchComponent {
  @Input() values!: DisplayedListItem[];
  @Input() width!: string;
  @Input() placeholder?: string;

  searchText: string = '';
  selectedItem: DisplayedListItem = { valueId: '-1', valueToDisplay: '' };
  isOpen: boolean = false;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectItem(value: DisplayedListItem): void {
    this.selectedItem = value;
    this.isOpen = false;
    this.searchText = value.valueToDisplay;
  }
}
