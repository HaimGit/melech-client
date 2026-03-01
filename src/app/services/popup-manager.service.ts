import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PopupManagerService {
  constructor(private overlay: Overlay) {}

  open(component: any, inputs: any): ComponentRef<any> {
    const overlay = this.overlay.create();
    const componentPortal = new ComponentPortal(component);
    const componentRef = overlay.attach(componentPortal);

    if (inputs) {
      Object.keys(inputs).forEach(key => {
        componentRef.setInput(key, inputs[key]);
      })
    }

    const { width, height } = getComputedStyle(componentRef.location.nativeElement);
    
    const widthAsNumber = Number(width.replace('px', ''));
    const heightAsNumber = Number(height.replace('px', ''));

    componentRef.location.nativeElement.style.position = "relative";
    componentRef.location.nativeElement.style.left = (screen.availWidth - widthAsNumber) / 2 + 'px';
    componentRef.location.nativeElement.style.top = (screen.availHeight - heightAsNumber) / 2 + 'px';

    if ((componentRef.instance as any).onClose) {
      (componentRef.instance as any).onClose().subscribe(() => overlay.dispose());
    }

    return componentRef;
  }
}
