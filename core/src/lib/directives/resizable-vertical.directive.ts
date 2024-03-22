import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[vsmResizableVertical]',
  standalone: true,
})
export class ResizableVerticalDirective {
  @Input() minHeight = 200;
  @Input() maxHeight = 400;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private initialY = 0;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (this.isResizeHandle(event.target as HTMLElement)) {
      event.preventDefault();
      this.initialY = event.clientY;
      this.startResize();
    }
  }

  private startResize() {
    const initialHeight = this.el.nativeElement.offsetHeight;

    const mouseMoveListener = this.renderer.listen(
      'document',
      'mousemove',
      (moveEvent: MouseEvent) => {
        const delta = moveEvent.clientY - this.initialY;
        let height = initialHeight - delta;

        height = Math.max(this.minHeight, Math.min(height, this.maxHeight));

        this.renderer.setStyle(this.el.nativeElement, 'height', `${height}px`);
      }
    );

    const mouseUpListener = this.renderer.listen('document', 'mouseup', () => {
      mouseMoveListener();
      mouseUpListener();
    });
  }

  private isResizeHandle(target: HTMLElement): boolean {
    return target.classList.contains('resize-handle');
  }
}
