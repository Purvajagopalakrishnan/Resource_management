import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingResourceService {
  private url = ("http://localhost:64539/api/bookresource");

  constructor(private http:HttpClient) { }
  BookResource(start_date:Date,end_date:Date,id:number,email:string) {
    return this.http.post(this.url,{Startdate:start_date,Enddate:end_date,Resource_Id:id,Email:email})
  }
}
