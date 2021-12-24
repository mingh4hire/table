import { DatePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()
  data: Array<any>;
  @Input()
  headers: Array<{ key: string, val: string, action: any }>;
  searchTerm: FormControl = new FormControl();
  page = 1;
  pageSize = 10;
  total: number;
  results$: Observable<any>;
  sorts = [];
  dirs = {asc: 'desc', desc: '', '': 'asc'};
  oldPageSize = 10;
  constructor(private service: UtilityService, private datePipe: DatePipe) {
  }

  sort(arr: Array<any>, keys: Array<string>) {
  }

  sortBy(key: string, event){
    const withCtrlKey = event.metaKey || event.ctrlKey;
    const sortObject = this.sorts.find(x => x.key === key);
    if (sortObject){
      sortObject.dir = this.dirs[sortObject.dir];
    }
    else{
      if (withCtrlKey){
           this.sorts.push({dir: 'asc', key});
      }
      else{
          this.sorts = [{dir: 'asc', key}];
      }
    }
    this.searchTerm.setValue(this.term);
  }

  filter(term: string): Array<any> {
    const headers = this.headers.map(x => x.key);
    const filtered = this.service.filter(this.data, headers, term);
    if (filtered.length < this.page * this.pageSize){
      this.page = 1;

    }
    const sorted = this.service.sort([...filtered], this.sorts.map(x => x.key),
      this.sorts.map(x => x.dir ===  'asc' ? true : (x.dir === 'desc' ? false  : null) ));
    if (this.pageSize === null){
      this.oldPageSize = null;
      return sorted;
    }
    this.page = this.service.setPageSize(this.pageSize, this.page, this.oldPageSize, sorted.length);

    const startIndex = (this.page - 1) * this.pageSize;

    this.oldPageSize = this.pageSize;

    return sorted.slice(startIndex, startIndex + this.pageSize );
  }

  ngOnInit(): void {

    this.total = this.data?.length;
    this.results$ = this.searchTerm.valueChanges.pipe(
      startWith(''),
      map(term => {
        return this.filter(term);
      }));
    console.log('ki s');
  }

  get term() {
    return this.searchTerm.value;
  }

  getSortByKey(key: string){
    return this.sorts.find(x => x.key === key);
  }

  toDate(date: Date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  isDate(data: any): boolean{
    return this.service.isDate(data);
  }

  changePageSize(event){

    this.searchTerm.setValue(this.term);
  }
}

