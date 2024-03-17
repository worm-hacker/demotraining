import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent {
   name!:string;
   age!: number;
   gender!:string;


   dataArray:any= [];

   addData(){
    console.log(this.name )
    let obj= {
      "name":this.name,
      "age": this.age,
      "gender":this.gender
    }
    console.log(obj);
    this.dataArray.push(obj)
   }

   removeData(index:number){
    this.dataArray.splice(index,1);
   }
}
