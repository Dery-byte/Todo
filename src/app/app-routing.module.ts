import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { ViewTaskComponent } from './component/view-task/view-task.component';

const routes: Routes = [

  {
    path: '',
    component : AddTaskComponent,
    pathMatch:'full',
  },
  {
    path: 'addTask',
    component : AddTaskComponent,
    pathMatch:'full',
  },
  {
    path: 'viewTask',
    component : ViewTaskComponent,
    pathMatch:'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
