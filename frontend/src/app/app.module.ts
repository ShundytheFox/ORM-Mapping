import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { SubjectsComponent } from './views/subjects/subjects.component';
import { TeachersComponent } from './views/teachers/teachers.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './views/addPages/add-task/add-task.component';
import { AddSubjectComponent } from './views/addPages/add-subject/add-subject.component';
import { AddTeacherComponent } from './views/addPages/add-teacher/add-teacher.component';
import { ModifyTeacherComponent } from './views/modifyPages/modify-teacher/modify-teacher.component';
import { ModifyTaskComponent } from './views/modifyPages/modify-task/modify-task.component';
import { ModifySubjectComponent } from './views/modifyPages/modify-subject/modify-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TasksComponent,
    SubjectsComponent,
    TeachersComponent,
    AddTaskComponent,
    AddSubjectComponent,
    AddTeacherComponent,
    ModifyTeacherComponent,
    ModifyTaskComponent,
    ModifySubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
