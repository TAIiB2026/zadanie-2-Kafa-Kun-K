import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MyData } from '../../models/item.model';

@Component({
  selector: 'taiib2-list-view',
  standalone: false,
  templateUrl: './list-view.component.html',
  styles: ``
})
export class ListViewComponent implements OnInit {
  items: MyData[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.items = this.dataService.getAll();
  }
}
