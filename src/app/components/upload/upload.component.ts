import { Component } from '@angular/core';
import * as Papa from 'papaparse';
import { CsvService } from '../../services/csv.service';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-upload',
  template: `
    <ngx-file-drop (onFileDrop)="onFileDrop($event)"></ngx-file-drop>
  `
})
export class UploadComponent {
  constructor(private csvService: CsvService) {}

  onFileDrop(files: NgxFileDropEntry[]) {
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            worker: true, // runs in a separate thread
            chunk: (results) => {
              this.csvService.addChunk(results.data); // process each chunk
            },
            complete: () => {
              console.log('Parsing complete');
            }
          });
        });
      }
    }
  }
}