import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
 
  constructor(
    private readonly router:Router,
    private readonly fb:FormBuilder
  ) { }

 user!:string;
 pass!:string;

  ngOnInit(): void {
    this.loginForm=this.initForm();
  }
  onSubmit():void{

    console.log('Form values', this.loginForm.value);
    this.router.navigate(['home']);
    
  }
  
  initForm():FormGroup{
    return this.fb.group({
      user:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required,Validators.minLength(5)]]
    })
  }
}
