import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
  private url = ("http://localhost:64539/api/checkavailability");
  
  constructor(private http:HttpClient) { }
  CheckAvailability(start_date: Date,end_date:Date,id:number) {
    return this.http.post(this.url,{Startdate: start_date, Enddate: end_date,Resource_Id: id})
  }
}
