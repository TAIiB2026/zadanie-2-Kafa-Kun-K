import { Injectable } from '@angular/core';
import { MyData } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private repository: MyData[] = [
    { id: 1, value: 100, date: new Date('2026-01-01'), title: 'ProjektA', description: 'Opis1'},
    { id: 2, value: 250, date: new Date('2026-01-04'), title: 'ProjektB', description: 'Opis2'},
    { id: 3, value: 125, date: new Date('2026-01-05'), title: 'ProjektC', description: 'Opis3'},
    { id: 4, value: 50, date: new Date('2026-01-02'), title: 'ProjektD', description: 'Opis4'},
    { id: 5, value: 400, date: new Date('2026-01-07'), title: 'ProjektAE', description: 'Opis5'}
  ];

  getAll(): MyData[] {
    return [...this.repository];
  }

  getById(id: number): MyData | undefined {
    const item = this.repository.find(i => i.id === id);
    return item ? { ...item } : undefined;
  }
}
