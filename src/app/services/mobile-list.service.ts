import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileListService {
  
  constructor(private http: HttpClient) { }
  
  getMobilelist() {
    return this.http.get("http://localhost:64539/api/mobilelist");
  }
}
