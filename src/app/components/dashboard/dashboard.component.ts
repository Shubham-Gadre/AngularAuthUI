import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public users:any[] = [];
  public isLoggedIn:boolean = false;
  constructor(private router:Router, private api:ApiService, private auth:AuthService){}

ngOnInit() {
  debugger
  this.api.getUsers().subscribe(res =>{this.users = res;});
  this.isLoggedIn=this.auth.isLoggedIn();
  console.log(this.users);
}

  logOut() 
  {
    debugger
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
