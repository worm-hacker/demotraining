import { Component } from '@angular/core';
import { ApiListingService } from './api-listing.service';
import {ListUser} from './list-user';

@Component({
  selector: 'app-api-listing',
  templateUrl: './api-listing.component.html',
  styleUrls: ['./api-listing.component.scss']
})
export class ApiListingComponent {
  apiListData:ListUser|undefined;
  constructor(private apiList: ApiListingService){
  }

  ngOnInit(){
    this.apiList.apiList().subscribe(result=>{
       if('data' in result){
        this.apiListData = result;
       }
    })
  }
}
