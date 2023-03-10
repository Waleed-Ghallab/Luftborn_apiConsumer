import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    });
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(
      res=>{
        const user=res.find((a:any)=>{
          return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
        });
        if(user){
          alert("Login Successful");
          this.loginForm.reset();
          this.router.navigate(['/employee'])
        }else{
          alert("user not found !");
        }
      },
      err=>{
        alert("something went wrong!");
      }
    )
  }
}
