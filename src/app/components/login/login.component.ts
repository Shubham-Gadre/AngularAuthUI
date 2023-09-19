import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  showPassword: boolean = false;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router, private toast: HotToastService) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  clearForm() {
    this.loginForm.reset(); // Reset the form fields to their initial values
  }
  onSubmit() {
    if (this.loginForm.valid) 
    {
      //send the object to the database
      this.auth.logIn(this.loginForm.value).subscribe({
        next:(result)=>{
          this.toast.success('Login successful');
          this.loginForm.reset();
          this.router.navigate(['/dashboard']);
      },
        error:(err)=>{
          this.toast.warning('Something went wrong ' + err.message);
          this.loginForm.reset(); 
      }  
      })
    } 
    else 
    {
      
    }
  }

}
