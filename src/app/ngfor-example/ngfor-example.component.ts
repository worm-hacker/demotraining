import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-example',
  templateUrl: './ngfor-example.component.html',
  styleUrls: ['./ngfor-example.component.scss']
})
export class NgforExampleComponent {
  listOfItems:any = [{
    name : 'iphone',
    model : 'iphone 13',
    price : 54000,
    color : 'white'
  },
  {
    name : 'Samsung',
    model : 'Ulta S',
    price : 45000,
    color : 'Red'
  },
  {
    name : 'Oppo',
    model : 'A 29',
    price : 54000,
    color : 'Purple'
  },
  {
    name : 'One Plus',
    model : 'T 4',
    price : 54000,
    color : 'Silver'
  }
];
 elements:any  = ['madhu','manish','ravi','ram'];

 newArray = [
  {
    title:'Associate',
    name: 'Abas',
    age: 23,
    company: 'Microsoft' 
  },
  {
    title:'Executive',
    name: 'Ali',
    age: 25,
    company: 'Google' 
  },
  {
    title:'Senior',
    name: 'Mastang',
    age: 26,
    company: 'Meta' 
  },

 ]

 ngOnInit(){
  console.log(this.elements);
  console.log(this.listOfItems);
  }
}
