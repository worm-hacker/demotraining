import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {

  constructor() { }

  storeLocalData(data:any){
    localStorage.setItem('userData', data);
  }

  getLocalStorageValue(){
    let getData = localStorage.getItem('userData');
    return getData;
  }
}
