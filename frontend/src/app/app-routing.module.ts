import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubjectComponent } from './views/addPages/add-subject/add-subject.component';
import { AddTaskComponent } from './views/addPages/add-task/add-task.component';
import { AddTeacherComponent } from './views/addPages/add-teacher/add-teacher.component';
import { ModifySubjectComponent } from './views/modifyPages/modify-subject/modify-subject.component';
import { ModifyTaskComponent } from './views/modifyPages/modify-task/modify-task.component';
import { ModifyTeacherComponent } from './views/modifyPages/modify-teacher/modify-teacher.component';
import { SubjectsComponent } from './views/subjects/subjects.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { TeachersComponent } from './views/teachers/teachers.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent},
  { path: 'subjects', component: SubjectsComponent},
  { path: 'teachers', component: TeachersComponent},
  { path: 'addtask', component: AddTaskComponent},
  { path: 'addsubject', component: AddSubjectComponent},
  { path: 'addteacher', component: AddTeacherComponent},
  { path: 'modifytask/:idTask', component: ModifyTaskComponent},
  { path: 'modifysubject/:idSubject', component: ModifySubjectComponent},
  { path: 'modifyteacher/:idTeacher', component: ModifyTeacherComponent},

  { path: '', redirectTo: '/tasks', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
