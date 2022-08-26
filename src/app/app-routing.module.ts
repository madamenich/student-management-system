import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import {StudentTableComponent} from "./components/student-table/student-table.component";
import {StudentAddFormComponent} from "./components/student-add-form/student-add-form.component";

const routes: Routes = [
  {path:'',component:StudentTableComponent},
  {path:'add',component:StudentAddFormComponent},
  {path:'details/:id',component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
