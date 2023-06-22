import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AddService } from 'src/app/services/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],

})
export class ViewTaskComponent implements OnInit {

tasks:any=[];
tid:any
  constructor(private _task: AddService, private _route:ActivatedRoute){ }
  ngOnInit(): void{

    this.tid =this._route.snapshot.params['tid'];

this.getData();

  }

  getData(){
    this._task.getTask().subscribe((data: any)=>{
      this.tasks = data;
      console.log(this.tasks);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error !! ', 'Error in loading data', 'error');
    }  
    );
  }


  // deleteTask(tid:any){

  //   if(confirm("Are you you want to delete this Task ?")){

  //     this._task.deleteTask(tid).subscribe((data)=>{
  //       this._task.getTask();
  //     });
  //     // this._task.deleteTask(tid).subscribe((data:any)=>{
  //       console.log(tid)
  //       // this.tasks=this.tasks.filter((tasks:any)=>tasks.tid!=this.tid);
  //   //   });
  //    }
  //   }

    deleteTask(tid:any){
      Swal.fire({ 
       icon:"info",
       title:"Are you sure of this ?",
       confirmButtonText:"Delete",
       showCancelButton:true,
      }).then((results)=>{
       if(results.isConfirmed){
    //delete
   
    this._task.deleteTask(tid).subscribe((data)=>{
      this._task.getTask();
      this.getData();
   
       Swal.fire("Success", "Category Deleted", "success");
     },
     (error)=>
     {
       Swal.fire("Error", "Category could not be deleted", "error");
   
     }
   );
   
   
   
       }
      
   
      })
     }


    
    



}