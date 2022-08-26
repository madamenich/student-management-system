import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/shared/student.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  students!:Student[]
  formAdd = this.fb.group({
    name:[''],
    subject:['Spring'],
    gender:['Male'],
    is_leader:[false,]
   })
   student!:Student
  constructor(private studentService:StudentService, private fb:FormBuilder, private route:Router) { }

  submit(){
    this.student =<Student><unknown>this.formAdd.value;
    this.student.id = Math.floor(Math.random() * 100)+1;
    console.log(this.student);
    this.studentService.insert(this.student).subscribe() ;
    this.getAllStudents();



  }

  goToAdd(){
    this.route.navigate(['/add'])

  }






  ngOnInit() {
    this.getAllStudents()
  }

  getAllStudents(){
    this.studentService.getAll().subscribe(data => {
      this.students = data
    })

  }

}
