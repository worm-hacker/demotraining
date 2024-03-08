import { Component } from '@angular/core';
import {DummyServiceService} from './../dummy-service.service';

@Component({
  selector: 'app-service-comp',
  templateUrl: './service-comp.component.html',
  styleUrls: ['./service-comp.component.scss']
})
export class ServiceCompComponent {
  constructor(private dummyService: DummyServiceService){}

  clickme(){
    let storeData = JSON.stringify({"username":"abc", "role":"admin", "id":"1874"});
    this.dummyService.storeLocalData(storeData);
  }

  getLocalValue(){
    let getData= this.dummyService.getLocalStorageValue();
    console.log(getData);
  }
}
