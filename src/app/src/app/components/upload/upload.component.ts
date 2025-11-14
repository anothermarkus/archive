import { Component } from '@angular/core';
import * as Papa from 'papaparse';
import { CsvService } from '../../services/csv.service';

@Component({
  selector: 'app-upload',
  template: `
    <input type='file' (change)='upload($event)' multiple accept='.csv'>
  `,
})
export class UploadComponent {
  constructor(private csvService: CsvService) {}

  upload(event: any) {
    const files = event.target.files;
    for (let file of files) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          this.csvService.addData(result.data);
        }
      });
    }
  }
}
