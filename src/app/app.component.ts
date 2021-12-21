import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abc';
  headers = [{val:'color', key:'color'}, {val:'Age', key:'age'}];
  data = [{
    color:'Blue', age:234
  },{
    color:'Orange', age:123
  },{
    color:'Yellow', age:444
  },{
    color:'Black', age:9
  },{
    color:'Red', age:8
  },{
    color:'Green', age:6
  },{
    color:'Grey', age:4
  },{
    color:'Pink', age:3
  },{
    color:'Purple', age:1
  },{
    color:null, age:15
  },{
    color:'null', age:12
  },{
    color:'null', age:14
  },{
    color:'null', age:13
  },{
    color:'null', age:19
  },{
    color:'null', age:21
  },{
    color:'null', age:34
  },{
    color:'null', age:44
  }
];
}
