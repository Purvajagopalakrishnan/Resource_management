import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaptopListService {

  constructor(private http: HttpClient) { }
  
  getLaptoplist(){
    return this.http.get("http://localhost:64539/api/laptoplist");
  }
}
