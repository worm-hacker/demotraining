import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-statement',
  templateUrl: './conditional-statement.component.html',
  styleUrls: ['./conditional-statement.component.scss']
})
export class ConditionalStatementComponent {
  clicked:boolean = false;
  showText:string= ' not clicked';

  conditionStatement(param:boolean){
    // if(param){
    //   this.showText = "clicked";  
    // }else{
    //   this.showText = 'not clciked';
    // }
  }
}
