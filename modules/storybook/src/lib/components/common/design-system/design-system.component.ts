import { Component } from '@angular/core';

@Component({
  selector: 'cvieira-design-system',
  template: '',
})
export class DesignSystemComponent {
  protected copyToClipboard(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      alert(`Copied ${value} to clipboard!`);
    });
  }
}
