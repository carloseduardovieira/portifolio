import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'cvieira-color-tokens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-tokens.component.html',
  styleUrl: './color-tokens.component.scss',
})
export class ColorTokensComponent {
  colorTokens = [
    { name: 'Primary', color: '#FF4785' },
    { name: 'Secondary', color: '#1EA7FD' },
    { name: 'Tertiary', color: '#DDDDDD' },
    { name: 'Success', color: '#28a745' },
    { name: 'Warning', color: '#ffc107' },
    { name: 'Danger', color: '#dc3545' },
  ];

  copyToClipboard(color: string) {
    navigator.clipboard.writeText(color).then(() => {
      alert(`Copied ${color} to clipboard!`);
    });
  }
}
