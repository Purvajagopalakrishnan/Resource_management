import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = ("http://localhost:64539/api/login");

  constructor(private http:HttpClient) { }

  login(email_id: string,password:string) {
    return this.http.post(this.url,{Email:email_id,Password:password});
  }
  


}
