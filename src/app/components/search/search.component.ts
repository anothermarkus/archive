import { Component } from '@angular/core';
import { CsvService } from '../../services/csv.service';

@Component({
  selector: 'app-search',
  template: `
    <mat-form-field>
      <input matInput placeholder='Search' [(ngModel)]='keyword' (input)='search()'>
    </mat-form-field>
    <app-result-card *ngFor='let item of results' [data]='item'></app-result-card>
  `,
})
export class SearchComponent {
  keyword = '';
  results: any[] = [];

  constructor(private csvService: CsvService) {}

  search() {
    this.results = this.csvService.search(this.keyword);
  }
}
