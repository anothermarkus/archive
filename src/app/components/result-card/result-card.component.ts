import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  template: `
    <mat-card>
      <mat-card-title>{{data.ID}} - {{data.Title}}</mat-card-title>
      <mat-card-content>
        <div [innerHTML]="data.Description"></div>
        <hr>
        <div [innerHTML]="data['Acceptance Criteria']"></div>
      </mat-card-content>
    </mat-card>
  `,
})
export class ResultCardComponent {
  @Input() data: any;
}
