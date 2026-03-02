import { Component, Input } from '@angular/core';

@Component({
  selector: 'kng-popup-header',
  templateUrl: './popup-header.component.html',
  styleUrls: ['./popup-header.component.less']
})
export class PopupHeaderComponent {
  @Input() close!: () => any;
  @Input() rightTitle!: string;
  
  closeForm(): void {
    this.close();
  }
}
