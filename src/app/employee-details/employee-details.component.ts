import { EmployeeDetails } from 'src/app/shared/employee-details.model';
import { EmployeeDetailsService } from './../shared/employee-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public service: EmployeeDetailsService) { }

  ngOnInit(): void {
    this.service.refreshList(); //initialize list inside service
  }

  populateForm(selectedRecord:EmployeeDetails){
    this.service.formData=Object.assign({},selectedRecord); //select record and assign to form data
  }
  onDelete(id:number){
    if(confirm("Are you sure you want to delete this record ?")){
    this.service.deleteEmployee(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        alert("Record Deleted");
      },
      err=>{
        console.log("err");
      }
    )
    }
  }
}
