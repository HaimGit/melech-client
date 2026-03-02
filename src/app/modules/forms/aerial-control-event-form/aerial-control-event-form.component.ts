import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { EVENT_TYPES_MOCK } from 'src/app/mocks/event-types.mock';
import { DisplayedListItem } from 'src/app/models/displayed-list-item';
import { PopupManagerService } from 'src/app/services/popup-manager.service';
import { AirActivityFormComponent } from './air-activity-form/air-activity-form.component';

@Component({
  selector: 'kng-aerial-control-event-form',
  templateUrl: './aerial-control-event-form.component.html',
  styleUrls: ['./aerial-control-event-form.component.less']
})
export class AerialControlEventFormComponent implements AfterViewInit {
  @ViewChild('dropdownFieldContainer') dropdownFieldContainerRef!: ElementRef;
  @Output() onClose = new EventEmitter<void>;

  readonly EVENT_TYPES = EVENT_TYPES_MOCK;
  readonly FORM_TITLE = 'אירוע אווירי חדש';
  readonly FIELD_CONTAINER_PERCENTAGE_WIDTH = '45%';

  closeFunc = this.closePopup.bind(this);
  dropdownWidth!: string;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private popupManagerService: PopupManagerService
  ) { }

  ngAfterViewInit(): void {
    this.dropdownWidth = getComputedStyle(this.dropdownFieldContainerRef.nativeElement).width;
    this.changeDetectorRef.detectChanges();
  }

  closePopup(): void {
    this.onClose.emit();
  }

  openNewAirActivityForm() {
    this.popupManagerService.open(AirActivityFormComponent)
  }
}
