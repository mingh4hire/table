import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abc';
  headers = [{val: 'color', key: 'color', action: function(row){ alert(row.color); }},
   {val: 'Age', key: 'age'}, {val:'Date', key:'date'}];
  data = [{
    color: 'Blue', age: 234, date: new Date(2011,2,3)
  }, {
    color: 'Orange', age: 123, date: new Date(2011,3,3)
  }, {
    color: 'Yellow', age: 444, date: new Date(2013,5,3)
  }, {
    color: 'Black', age: 9, date: new Date(2011,2,5)
  }, {
    color: 'Red', age: 8, date: new Date(2011,2,7)
  }, {
    color: 'Green', age: 6, date: new Date(2011,2,22)
  }, {
    color: 'Grey', age: 4, date: new Date(2011,2,22)
  }, {
    color: 'Pink', age: 3, date: new Date(2011,2,11)
  }, {
    color: 'Purple', age: 1, date: new Date(2015,2,3)
  }, {
    color: null, age: 15, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 12, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 14, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 13, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 19, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 21, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 34, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 44, date: new Date(2011,2,3)
  },
  {
    color: 'Blue', age: 234, date: new Date(2011,2,3)
  }, {
    color: 'Orange', age: 123, date: new Date(2011,3,3)
  }, {
    color: 'Yellow', age: 444, date: new Date(2013,5,3)
  }, {
    color: 'Black', age: 9, date: new Date(2011,2,5)
  }, {
    color: 'Red', age: 8, date: new Date(2011,2,7)
  }, {
    color: 'Green', age: 6, date: new Date(2011,2,22)
  }, {
    color: 'Grey', age: 4, date: new Date(2011,2,22)
  }, {
    color: 'Pink', age: 3, date: new Date(2011,2,11)
  }, {
    color: 'Purple', age: 1, date: new Date(2015,2,3)
  }, {
    color: null, age: 15, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 12, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 14, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 13, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 19, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 21, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 34, date: new Date(2011,2,3)
  }, {
    color: 'null', age: 44, date: new Date(2011,2,3)
  }, {
    color: 'amrarillo', age: 44, date: new Date(2004,2,3)
  }, {
    color: 'magenta', age: 12, date: new Date(2004,2,3)
  }, {
    color: 'gris', age: 55, date: new Date(2004,2,3)
  }, {
    color: 'gris', age: 55, date: new Date(2004,2,3)
  }, {
    color: 'oceanblue', age: 55, date: new Date(2023,2,3)
  }, {
    color: 'gris', age: 55, date: new Date(2004,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'gris', age: 11, date: new Date(2015,2,3)
  }, {
    color: 'navygrey', age: 11, date: new Date(2015,2,3)
  }
];
  constructor(){
    console.log(this.data);
  }
}
