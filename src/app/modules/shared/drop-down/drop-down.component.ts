import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DisplayedListItem } from 'src/app/models/displayed-list-item';

@Component({
  selector: 'kng-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.less']
})
export class DropDownComponent {
  @ViewChild("container") containerRef!: ElementRef;

  @Input() values!: DisplayedListItem[];
  @Input() width!: string;

  @Output() onValueChange = new EventEmitter<DisplayedListItem>();

  selectedItem: DisplayedListItem = { valueId: '-1', valueToDisplay: '' };
  isOpen: boolean = false;
  placeholder: string = "בחירה";

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectItem(item: DisplayedListItem): void {
    this.selectedItem = item;
    this.isOpen = false;

    this.onValueChange.emit(item);
  }
}
