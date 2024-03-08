import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeexaple',
  templateUrl: './pipeexaple.component.html',
  styleUrls: ['./pipeexaple.component.scss']
})
export class PipeexapleComponent {
  text:string = 'This is dummy text for pips!';
  date:any =  new Date();
}
