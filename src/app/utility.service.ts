import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  exportToExcel(headers: Array<{key:string, val:string}>, data:Array<any>): void{

  }

  filter(arr: Array<any>, headers: Array<string>, term: string): Array<any>{
    if (!term){
      return arr;
    }
    return arr.filter(row => {
      term = term.toLowerCase();
      for (const i of headers){
          if (row[i]?.toLowerCase()?.indexOf(term) >= 0){
              return true;
          }
      }
    });
  }
  paginate(arr: Array<any>, page: number, pageSize: number): Array<any>{
    if (arr.length < pageSize){
      return arr;
    }
    return arr;
  }

  setPageSize(pageSize: number, page: number, oldPageSize: number, total: number): number{
    if (pageSize == null || page === 1){
      return 1;
    }
    let pages = oldPageSize * (page - 1);
    let totalLastPage = Math.trunc(total / oldPageSize);
    if (totalLastPage * oldPageSize >= total){
      totalLastPage--;
    }
    pages = Math.min(pages, totalLastPage * oldPageSize);
  
    const newPage =  Math.trunc(pages / pageSize) + 1;

    return newPage;
  }


  sort(arr: Array<any>, keys: Array<string> = null, dir = true): Array<any>{
    const newarr = [...arr];
    let mult = 1;
    if (!dir){
      mult = -1;
    }
    return newarr.sort((x, y) => {
        for (const key of keys){
          if (x[key] && !y[key]){
            return 1 * mult;
          }
          if (!x[key] && y[key]){
            return -1 * mult;
          }
          if (x[key]?.toString()?.toLowerCase()
           > y[key]?.toString()?.toLowerCase()  ){
            return 1 * mult;
          }
          else if (x[key]?.toString()?.toLowerCase()
          < y[key]?.toString()?.toLowerCase()  ){
           return -1 * mult;
         }

        }
    });
  }
}
