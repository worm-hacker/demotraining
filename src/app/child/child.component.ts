import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() passData:string | undefined;
  @Output() passChildData = new EventEmitter();

  ngOnInit(){
    this.passChildData.emit('This is a child data')
  }
}
