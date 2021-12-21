import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input()
data: Array<any>;
@Input()
headers: Array<{key:string, val:string}>;
searchTerm: string = null;
page = 1;
pageSize = 10;
total:number;

  constructor() { 
  }

  ngOnInit(): void {
    console.log(2);
    console.log(1);
    this.total = this.data?.length;
    
  }
}
