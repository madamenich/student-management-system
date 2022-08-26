
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StudentService } from 'src/app/shared/student.service';
import { Student } from './../../model/student';
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-student-add-form',
  templateUrl: './student-add-form.component.html',
  styleUrls: ['./student-add-form.component.css']
})
export class StudentAddFormComponent implements OnInit {
 is_add= false
 formAdd = this.fb.group({
  name:[''],
  subject:['Spring'],
  gender:[],
  is_leader:[false,]
 })

 student!:Student
  constructor(private fb :FormBuilder, private studentService:StudentService, private route:Router) { }

  ngOnInit(): void {
  }
  isHidden(){
    this.is_add =! this.is_add;
  }

  submit(){
    // @ts-ignore
    this.student =<Student>this.formAdd.value;
    this.student.id = Math.floor(Math.random() * 100)+1;
    console.log(this.student);
    this.studentService.insert(this.student).subscribe() ;
    // this.studentService.getAll().subscribe(x=>console.log(x))
    this.route.navigate([''])



  }

}
