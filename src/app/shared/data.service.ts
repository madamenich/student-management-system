import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './../model/student';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }


  createDb() {


      let students: Student[] =[
        {id:1, name: 'SeavPinh',subject: 'Spring',gender: 'Male',is_leader:false},
        {id:2, name: 'Choumy',subject: 'Spring',gender: 'Male',is_leader:false},
        {id:3, name: 'Yarith',subject: 'Spring',gender: 'Male',is_leader:false},
        {id:4, name: 'Naro',subject: 'Spring',gender: 'Male',is_leader:false},
        {id:5, name: 'Rolex',subject: 'Spring',gender: 'Male',is_leader:false}
      ]


      return  {students}
    }



  }






