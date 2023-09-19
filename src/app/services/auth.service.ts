import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://localhost:7082/api/User/'
  constructor(private http:HttpClient) { }


  signUp(userObj:any) 
  {
    return this.http.post(`${this.baseUrl}register`, userObj);
  }

  logIn(userObj:any)
  {
    return this.http.post(`${this.baseUrl}authenticate`, userObj);
  }
}
