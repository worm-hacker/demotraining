import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  passData:string = 'It is a parent variable!';
  getChildData_1:string = '';

  getChildData(event:any){
    this.getChildData_1 = event;
  }
}
