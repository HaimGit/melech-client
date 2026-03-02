import { Component, EventEmitter, Output } from '@angular/core';
import { AIR_ACTIVITIES_DESCRIPTION_MOCK } from 'src/app/mocks/air-activities-description.mock';
import { PLANE_TYPES_MOCK } from 'src/app/mocks/plane-types.mock';
import { SQUADRONS_MOCK } from 'src/app/mocks/squadrons.mock';

@Component({
  selector: 'kng-air-activity-form',
  templateUrl: './air-activity-form.component.html',
  styleUrls: ['./air-activity-form.component.less']
})
export class AirActivityFormComponent {
  @Output() onClose = new EventEmitter<void>();

  readonly FORM_TITLE = "פעילות אווירית";
  readonly AIR_ACTIVITIES_DESCRIPTION = AIR_ACTIVITIES_DESCRIPTION_MOCK;
  readonly SQUADRONS = SQUADRONS_MOCK;
  readonly PLANE_TYPES = PLANE_TYPES_MOCK;

  closeFunc = this.closePopup.bind(this);

  closePopup(): void {
    this.onClose.emit();
  }
}
