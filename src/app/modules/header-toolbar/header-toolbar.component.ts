import { Component } from '@angular/core';
import { PopupManagerService } from 'src/app/services/popup-manager.service';
import { AerialControlEventFormComponent } from '../forms/aerial-control-event-form/aerial-control-event-form.component';
import { OpenTooltipOnEnum } from 'src/app/enums/open-tooltip-on.enum';

@Component({
  selector: 'kng-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.less']
})
export class HeaderToolbarComponent {
  readonly AerialControlEventFormRef = AerialControlEventFormComponent;
  readonly OpenTooltipOnEnum = OpenTooltipOnEnum;

  appTitle = 'מל"ך באזרחי';

  constructor(
    public popupManagerService: PopupManagerService
  ) {}

  newEventButtonClicked() {
    this.popupManagerService.open(AerialControlEventFormComponent);
  }
}
