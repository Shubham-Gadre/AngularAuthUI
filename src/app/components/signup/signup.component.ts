import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  showPassword: boolean = false;
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router, private toast: HotToastService) {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  clearForm() {
    this.signupForm.reset(); // Reset the form fields to their initial values
  }
  onSubmit() {
    if (this.signupForm.valid) 
    {
      //send the object to the database
      this.auth.signUp(this.signupForm.value).subscribe({
        next:(result)=>{
          this.toast.success('Registration successful');
        this.signupForm.reset();
        this.router.navigate(['/login']);
      },
        error:(err)=>{this.toast.warning('Something went wrong ' + err.message)}  
      })
    } 
    
  }


}
