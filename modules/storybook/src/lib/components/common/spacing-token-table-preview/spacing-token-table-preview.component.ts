import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DesignSystemComponent } from '../design-system/design-system.component';
import { SpacingTokenTable } from './spacing-token-table.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'spacing-token-table-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="container__section">
        <h2>{{ title }}</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>REM</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let token of tokenList">
              <td (click)="copyToClipboard(token.rem)">{{ token.name }}</td>
              <td (click)="copyToClipboard(token.rem)">{{ token.value }}</td>
              <td (click)="copyToClipboard(token.rem)">
                <input
                  class="input-preview"
                  type="text"
                  value="{{ token.rem }}"
                  readonly
                />
              </td>
              <td (click)="copyToClipboard(token.rem)">
                <div
                  (click)="copyToClipboard(token.rem)"
                  class="box-preview"
                  [style.width]="token.rem"
                ></div>
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
      background-color: #ff4785;
    }
  `,
})
export class TokenTablePreviewComponent extends DesignSystemComponent {
  @Input() title!: string;
  @Input() tokenList!: SpacingTokenTable[];
}
