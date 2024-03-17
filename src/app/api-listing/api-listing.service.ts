import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiListingService {

  constructor(private http:HttpClient) { }

  apiList():Observable<any>{
    return this.http.get('https://reqres.in/api/users?page=1');
  }
}
