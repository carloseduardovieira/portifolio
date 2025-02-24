import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DesignSystemComponent } from '../design-system/design-system.component';
import { TypographyTokenTable } from './typography-token-table.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'typography-token-table-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="container__section">
        <h2>{{ title }}</h2>
        <table>
          <thead>
            <tr>
              <th>Font</th>
              <th>FontSize</th>
              <th>REM</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let token of tokenList">
              <td (click)="copyToClipboard(token.name)">
                {{ token.name }}
              </td>
              <td (click)="copyToClipboard(token.name)">
                {{ token.fontSize }}
              </td>
              <td (click)="copyToClipboard(token.name)">
                <input
                  class="input-preview"
                  type="text"
                  value="{{ token.rem }}"
                  readonly
                />
              </td>
              <td (click)="copyToClipboard(token.name)">
                <div (click)="copyToClipboard(token.name)" class="box-preview">
                  <span
                    [ngStyle]="{
                      'font-family': token.fontFamily,
                      'font-weight': token.fontWeight,
                      'font-size': token.rem
                    }"
                    >{{ token.sampleText }}</span
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: `
    .container {
      font-family: 'Inter', serif;
      width: 1000px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 24px 0;
    }

    .container__section {
        display: flex;
        flex-direction: column;
        gap: 24px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
        padding: 24px;
        background-color: #fff;
      }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th {
      color: rgba(46, 52, 56, 0.6);
    }

    th,
    td {
      cursor: grab;
      padding: 8px;
      text-align: left;
      border-top: 1px solid rgb(238, 238, 238);
      text-align: left;
      border-left: none; 
      border-right: none;
      border-bottom: none;
    }

    .input-preview {
      font-size: 14px;
      width: 100px;
      border: 1px solid rgb(233, 233, 233);
    }

    .box-preview {
      height: 2rem;
    }
  `,
})
export class TypographyTablePreviewComponent extends DesignSystemComponent {
  @Input() title!: string;
  @Input() tokenList!: TypographyTokenTable[];
}
