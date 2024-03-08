import { Component } from '@angular/core';

@Component({
  selector: 'app-ngcontainer-ngcontent',
  templateUrl: './ngcontainer-ngcontent.component.html',
  styleUrls: ['./ngcontainer-ngcontent.component.scss']
})
export class NgcontainerNgcontentComponent {
  showItem: boolean = false;
  itemList = [1,8,7,4,5,6,4];

  ngOnInit(){

  }
  hideShow(){
    this.showItem = !this.showItem;
  }
}
