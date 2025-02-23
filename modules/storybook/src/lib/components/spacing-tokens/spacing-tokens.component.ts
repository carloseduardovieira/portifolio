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
    {
      name: 'Padding Extra Small',
      value: '4px',
      rem: '0.25rem',
      color: '#f4cccc',
    },
    { name: 'Padding Small', value: '8px', rem: '0.5rem', color: '#ffcccb' },
    {
      name: 'Padding Medium Small',
      value: '12px',
      rem: '0.75rem',
      color: '#d9e1f2',
    },
    { name: 'Padding Medium', value: '16px', rem: '1rem', color: '#add8e6' },
    {
      name: 'Padding Large Medium',
      value: '20px',
      rem: '1.25rem',
      color: '#b6d7a8',
    },
    { name: 'Padding Large', value: '24px', rem: '1.5rem', color: '#90ee90' },
    {
      name: 'Padding Extra Large',
      value: '28px',
      rem: '1.75rem',
      color: '#ffd966',
    },
    {
      name: 'Padding Double Extra Large',
      value: '32px',
      rem: '2rem',
      color: '#f9cb9c',
    },
  ];

  marginTokens = [
    {
      name: 'Margin Extra Small',
      value: '4px',
      rem: '0.25rem',
      color: '#f4cccc',
    },
    { name: 'Margin Small', value: '8px', rem: '0.5rem', color: '#ffcccb' },
    {
      name: 'Margin Medium Small',
      value: '12px',
      rem: '0.75rem',
      color: '#d9e1f2',
    },
    { name: 'Margin Medium', value: '16px', rem: '1rem', color: '#add8e6' },
    {
      name: 'Margin Large Medium',
      value: '20px',
      rem: '1.25rem',
      color: '#b6d7a8',
    },
    { name: 'Margin Large', value: '24px', rem: '1.5rem', color: '#90ee90' },
    {
      name: 'Margin Extra Large',
      value: '28px',
      rem: '1.75rem',
      color: '#ffd966',
    },
    {
      name: 'Margin Double Extra Large',
      value: '32px',
      rem: '2rem',
      color: '#f9cb9c',
    },
  ];

  copyToClipboard(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      alert(`Copied ${value} to clipboard!`);
    });
  }
}
