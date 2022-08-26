import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { StudentService } from 'src/app/shared/student.service';
import {Student} from "../../model/student";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
 id:any
  student!:Student;
  constructor(private router:ActivatedRoute, private studentService:StudentService) {

  }

  ngOnInit(): void {
   this.router.paramMap.subscribe(params => {
     this.id = params.get('id');
   })

    this.getUserDetail(this.id);
  }

   getUserDetail(id:number){
    this.studentService.getOne(id).subscribe(data=>
      this.student = data
    )
   }



}
