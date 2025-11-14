import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CsvService {
  private data: any[] = [];

  addChunk(chunk: any[]) {
    this.data.push(...chunk);
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