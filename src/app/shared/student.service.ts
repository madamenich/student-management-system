import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import {data} from "autoprefixer";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  BASE_URL = 'api/students'
  //TODO: define header of request

httpHeaderOptions={
  header : new HttpHeaders(
{'Content-Type':'application/json','Accept':'application/json'})}

  constructor(private http:HttpClient) { }


  getAll():Observable<Student[]> {
    return this.http.get<Student[]>(this.BASE_URL);
  }


  insert(s:Student):Observable<Student> {
    // @ts-ignore
    return this.http.post<Student>(this.BASE_URL, s, this.httpHeaderOptions).pipe(
      catchError(this.handleError)
    );
  }


  getOne(id:number):Observable<Student> {
      // @ts-ignore
    return this.http.get<Student>(`${this.BASE_URL}/${id}`, this.httpHeaderOptions).pipe(
      catchError(this.handleError)
    )


  }
  delete(id:number):Observable<Student> {
       // @ts-ignore
    return this.http.delete<Student>(`${this.BASE_URL}/${id}`, this.httpHeaderOptions).pipe(
      catchError(this.handleError)
    )

  }
  update(s:Student):Observable<Student> {
     // @ts-ignore
    return this.http.put<Student>(`${this.BASE_URL}`,s, this.httpHeaderOptions).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error:any) {
    console.error(error);//Created a function to handle and log errors, in case
    return throwError(error);
      }

}
