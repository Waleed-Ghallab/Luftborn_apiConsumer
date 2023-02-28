import { EmployeeDetails } from './employee-details.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //to allow http requests against api

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  constructor(private http:HttpClient) { }

  formData: EmployeeDetails=new EmployeeDetails(); //create new object for form data
  list: EmployeeDetails[]; //to read

  readonly baseURL = "https://localhost:44309/api/employee"
  
  postEmployee(){
    return this.http.post(this.baseURL,this.formData) //bind object to post method 
  }
  putEmployee(){
    return this.http.put(`${this.baseURL}/${this.formData.id}`,this.formData) //bind object with given id to put method 
  }
  deleteEmployee(id:number){
    return this.http.delete(`${this.baseURL}/${id}`); //bind base-url to the coressponding ID
  }

  refreshList(){
    this.http.get(this.baseURL)  //get all employees
    .toPromise()
    .then(res => this.list = res as EmployeeDetails[]);
  }
  

}
