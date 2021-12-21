import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  sort(arr: Array<any>, keys: Array<string> = null, dir = true): Array<any>{
    const newarr = [...arr];
    let mult = 1;
    if (!dir){
      mult = -1;
    }
    return newarr.sort((x,y)=>{
        for (const key of keys){
          if (x[key] && !y[key]){
            return 1 *mult;
          }
          if (!x[key] && y[key]){
            return -1*mult;
          }
          if (x[key]?.toString()?.toLowerCase()  
           > y[key]?.toString()?.toLowerCase()  ){
            return 1*mult;
          }
          else if (x[key]?.toString()?.toLowerCase()  
          < y[key]?.toString()?.toLowerCase()  ){
           return -1*mult;
         }

        }
    });
  }
}
