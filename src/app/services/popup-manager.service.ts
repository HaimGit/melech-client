import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ApplicationRef, ComponentRef, createComponent, EnvironmentInjector, EventEmitter, Injectable, Type } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PopupManagerService {
  constructor(
    private overlay: Overlay,
    private environmentInjector: EnvironmentInjector,
    private applicationRef: ApplicationRef
  ) { }

  open<T extends { onClose?: EventEmitter<void> }>(component: Type<T>, inputs?: Partial<T>): ComponentRef<T> {
    const overlay = this.overlay.create({ direction: 'rtl' });
    const componentPortal = new ComponentPortal(component);
    const componentRef = overlay.attach(componentPortal);

    if (inputs) {
      Object.keys(inputs).forEach(key => {
        componentRef.setInput(key, inputs[key as keyof T]);
      })
    }

    const { width, height } = getComputedStyle(componentRef.location.nativeElement);

    const widthAsNumber = Number(width.replace('px', ''));
    const heightAsNumber = Number(height.replace('px', ''));

    componentRef.location.nativeElement.style.position = 'relative';
    componentRef.location.nativeElement.style.right = (screen.availWidth - widthAsNumber) / 2 + 'px';
    componentRef.location.nativeElement.style.top = (screen.availHeight - heightAsNumber) / 4 + 'px';

    if (componentRef.instance.onClose) {
      componentRef.instance.onClose.subscribe(() => overlay.dispose());
    }

    return componentRef;
  }
}
