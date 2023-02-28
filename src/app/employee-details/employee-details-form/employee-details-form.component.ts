import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDetails } from 'src/app/shared/employee-details.model';
import { EmployeeDetailsService } from 'src/app/shared/employee-details.service';

@Component({
  selector: 'app-employee-details-form',
  templateUrl: './employee-details-form.component.html',
  styles: [
  ]
})
export class EmployeeDetailsFormComponent implements OnInit {
  //simillar to dependency injection in C# web api
  // to access form data 
  constructor(public service:EmployeeDetailsService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.id==0){
      this.insertRecord(form); //new entery
    }else{
      this.updateRecord(form); //update entery 
    }
  }
  insertRecord(form:NgForm){
    this.service.postEmployee().subscribe(
      res => {
        this.service.refreshList();
        alert("Employee Added Successfully");
        this.resetForm(form);

      },
      err => {console.log(err); }
    );
  }
  updateRecord(form:NgForm){
    this.service.putEmployee().subscribe(
      res => {
        this.service.refreshList();
        alert("Updated Successfully");
        this.resetForm(form);

      },
      err => {console.log(err); }
    );
  }

  resetForm(form:NgForm){ //reset form after submit 
    form.form.reset();
    this.service.formData=new EmployeeDetails();
  }

}
