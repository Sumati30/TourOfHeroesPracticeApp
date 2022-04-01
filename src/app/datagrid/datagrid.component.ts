import { Component, OnInit } from '@angular/core';
import { Customer, GridService } from './grid.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  constructor( private service:GridService) {
    this.customers = this.service.getCustomers();
   }
  customers : Customer[];
  ngOnInit(): void {
  }

}
