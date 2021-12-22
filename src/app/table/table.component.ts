import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable,   } from 'rxjs';
import { startWith , map} from 'rxjs/operators';
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
headers: Array<{key: string, val: string}>;
searchTerm: FormControl = new FormControl();
page = 1;
pageSize = 10;
total: number;
results$: Observable<any> ;
sorts = [];
  constructor(private service: UtilityService) {
  }
  sort(arr: Array<any>, keys: Array<string>){

  }
  
  filter(term: string): Array<any> {
    const headers = this.headers.map(x => x.key);
    return this.service.filter(this.data, headers, term);
  }

  ngOnInit(): void {
    console.log(2);
    console.log(1);

    this.total = this.data?.length;
    this.results$ = this.searchTerm.valueChanges.pipe(
       startWith(''),
      map(term => {
       return this.filter(term);
    }));
    console.log('ki s');
   }
  get term(){
    return this.searchTerm.value;
  }


}

