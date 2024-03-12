import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(requrestPayload:any):Observable<any>{
    return this.http.post('https://reqres.in/api/login', requrestPayload);
  }
}
