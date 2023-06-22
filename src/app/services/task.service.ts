import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private _http:HttpClient) { }

  public addTask(tasks:any){
    return this._http.post(`${baseUrl}/todos`, tasks);
  }
  public getTask(){
    return this._http.get(`${baseUrl}/todos`);
    }

    //delete category
  public deleteTask(id:any){
    return this._http.delete(`${baseUrl}/todos/${id}`);
    
    }
}
