import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-cases',
  templateUrl: './switch-cases.component.html',
  styleUrls: ['./switch-cases.component.scss']
})
export class SwitchCasesComponent {
  selectedCase:number = 1;
  value:string = 'Switch case 1 is passed';

  switchCase(){
    if(this.selectedCase < 3){
      this.selectedCase++
    } else if(this.selectedCase == 3){
      this.selectedCase = 1;
    }

    // switch(this.selectedCase){
    //   case 1:
    //     this.value = 'Switch case 1 is passed'
    //     break;
    //   case 2:
    //     this.value = 'Switch case 2 is passed'
    //     break;
    //   case 3:
    //     this.value = 'Switch case 3 is passed'
    //     break;
    // }
  }
}
