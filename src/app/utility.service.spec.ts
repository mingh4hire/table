import { TestBed } from '@angular/core/testing';

import { UtilityService } from './utility.service';

fdescribe('UtilityService', () => {
  let service: UtilityService;
  const arr =[   
    {fruit:'watermelon',color:'red'},
    {fruit:'banana',color:'yellow'},
    {fruit:'watermelon',color:'green'},
    {fruit:'banana',color:'green'},
    {fruit:'apple',color:'red'}
  ];
  
const arrWithNulls =[   
  {fruit:'watermelon',color:'red'},
  {fruit: null, color: 'red'},
{fruit:'banana',color:'yellow'},
{fruit:'watermelon',color:'green'},
{fruit:'banana',color:'green'},
{fruit:'apple',color:'red'}
];

const keys = ['fruit', 'color'];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sort', ()=>{
    expect(service.sort(arr, keys)).toEqual([
      {fruit:'apple',color:'red'},
      {fruit:'banana',color:'green'},
      {fruit:'banana',color:'yellow'},
      {fruit:'watermelon',color:'green'},
      {fruit:'watermelon',color:'red'}
    ])
  });
  it('should sort descending', ()=>{
    expect(service.sort(arr, keys, false)).toEqual([
      {fruit:'apple',color:'red'},
      {fruit:'banana',color:'green'},
      {fruit:'banana',color:'yellow'},
      {fruit:'watermelon',color:'green'},
      {fruit:'watermelon',color:'red'}
    ].reverse())
  });
  it('should sort ascending with nulls', ()=>{
    expect(service.sort(arrWithNulls, keys)).toEqual([
      {fruit: null, color: 'red'},
      {fruit:'apple',color:'red'},
      {fruit:'banana',color:'green'},
      {fruit:'banana',color:'yellow'},
      {fruit:'watermelon',color:'green'},
      {fruit:'watermelon',color:'red'}
    ]);
  });
});
