import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DisplayedListItem } from 'src/app/models/displayed-list-item';

@Component({
  selector: 'kng-aerial-control-event-form',
  templateUrl: './aerial-control-event-form.component.html',
  styleUrls: ['./aerial-control-event-form.component.less']
})
export class AerialControlEventFormComponent implements AfterViewInit {
  @ViewChildren("formRow") formRows!: QueryList<ElementRef>;

  @Output() onClose = new EventEmitter<void>;

  closeToPass = this.closePopup.bind(this);
  formTitle = "אירוע אווירי חדש";

  dropdownWidthByRow: string[] = [];

  eventTypeMockValues: DisplayedListItem[] = [
    { valueId: '1', valueToDisplay: 'first' },
    { valueId: '2', valueToDisplay: 'second' },
    { valueId: '3', valueToDisplay: 'third' },
    { valueId: '4', valueToDisplay: 'fourth' },
  ]

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  private calculateFieldContainerAndDropdownWidthByRow(): void {
    this.formRows.forEach(formRow => {
      const fieldsContainers: any[] = formRow.nativeElement.querySelectorAll('.field-container');
      const fieldContainerPercentageWidth = 90 / fieldsContainers.length || 1;

      fieldsContainers.forEach(fieldContainer => fieldContainer.style.width = `${fieldContainerPercentageWidth}%`);

      const fieldContainer = formRow.nativeElement.querySelector('.field-container');

      if (fieldContainer) {
        this.dropdownWidthByRow.push(getComputedStyle(fieldContainer).width);
      }
    })
  }

  ngAfterViewInit(): void {
    this.calculateFieldContainerAndDropdownWidthByRow();
    this.changeDetectorRef.detectChanges();
  }

  closePopup(): void {
    this.onClose.emit();
  }
}
