import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CsvService {
  private data: any[] = [];

  addData(newData: any[]) {
    this.data = [...this.data, ...newData];
  }

  search(keyword: string): any[] {
    const lower = keyword.toLowerCase();
    return this.data.filter(item =>
      Object.values(item).some(val =>
        val?.toString().toLowerCase().includes(lower)
      )
    );
  }
}
