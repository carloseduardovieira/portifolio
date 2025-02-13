import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'cvieira-spacing-tokens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spacing-tokens.component.html',
  styleUrl: './spacing-tokens.component.scss',
})
export class SpacingTokensComponent {
  spacingTokens = [
    { name: 'Padding Small', value: '8px', color: '#ffcccb' },
    { name: 'Padding Medium', value: '12px', color: '#add8e6' },
    { name: 'Padding Large', value: '16px', color: '#90ee90' },
    { name: 'Margin Small', value: '8px', color: '#ffcccb' },
    { name: 'Margin Medium', value: '12px', color: '#add8e6' },
    { name: 'Margin Large', value: '16px', color: '#90ee90' },
  ];

  copyToClipboard(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      alert(`Copied ${value} to clipboard!`);
    });
  }
}
