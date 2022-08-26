import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './shared/data.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentAddFormComponent } from './components/student-add-form/student-add-form.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
@NgModule({
  declarations: [
    AppComponent,
  StudentTableComponent,
  StudentAddFormComponent,
  StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
