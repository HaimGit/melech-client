import { Directive, HostListener, Input, Type, ViewContainerRef } from '@angular/core';
import { PopupManagerService } from '../services/popup-manager.service';
import { OpenTooltipOnEnum } from '../enums/open-tooltip-on.enum';

@Directive({
  selector: '[melechMatPopup]'
})
export class MelechMatPopupDirective {
  @Input() component!: Type<any>;
  @Input() openOn!: OpenTooltipOnEnum;
  @Input() inputs?: any;
  
  constructor(
    public viewContainerRef: ViewContainerRef,
    public popupManagerService: PopupManagerService
  ) {}

  @HostListener("click") onClick() {
    this.popupManagerService.open(
      this.component,
      this.inputs
    )
  }
}
