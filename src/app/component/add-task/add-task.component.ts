import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/services/task.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task={
    title:"",
    createdOn:"",
  }
  constructor(private _task:AddService){}

  formSubmit(){

    console.log(this.task);
    this._task.addTask(this.task).subscribe((data:any)=>{
      Swal.fire("Sucess !!", "Task Added", "success")
    },
      (error)=>{
        console.log(error);
        Swal.fire("Error !! ", "Could not add Task", "error");
      })
  }

  ngOnInit(): void {
  }






  
}
