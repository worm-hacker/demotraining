import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http:HttpClient)
    { }

    register(requrestPayload:any):Observable<any>{
      return this.http.post('https://reqres.in/api/register', requrestPayload);
    }
}
