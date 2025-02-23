import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cvieira-color-tokens',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './color-tokens.component.html',
  styleUrl: './color-tokens.component.scss',
})
export class ColorTokensComponent {
  colorGroups = [
    {
      title: 'theme.color.greyscale',
      subtitle: 'Some of the greys',
      colors: [
        { name: 'White', value: '#FFFFFF' },
        { name: 'Alabaster', value: '#F8F8F8' },
        { name: 'Concrete', value: '#F3F3F3' },
      ],
    },
    {
      title: 'theme.color.primary',
      subtitle: 'Coral',
      colors: [{ name: 'WildWatermelon', value: '#FF4785' }],
    },
    {
      title: 'theme.color.secondary',
      subtitle: 'Ocean',
      colors: [{ name: 'DodgerBlue', value: '#1EA7FD' }],
    },
    {
      title: 'theme.color.positive',
      subtitle: 'Green',
      colors: [
        { name: 'Apple', value: 'rgba(102,191,60,1)' },
        { name: 'Apple80', value: 'rgba(102,191,60,.8)' },
        { name: 'Apple60', value: 'rgba(102,191,60,.6)' },
        { name: 'Apple30', value: 'rgba(102,191,60,.3)' },
      ],
    },
    {
      title: 'gradient',
      subtitle: 'Grayscale',
      colors: [
        { name: 'Gradient', value: 'linear-gradient(to right,white,black)' },
      ],
    },
    {
      title: 'gradient',
      subtitle: 'Grayscale',
      colors: [{ name: 'Gradient', value: 'linear-gradient(65deg,white,red)' }],
    },
  ];

  copyToClipboard(color: string) {
    navigator.clipboard.writeText(color).then(() => {
      alert(`Copied: ${color}`);
    });
  }
}
