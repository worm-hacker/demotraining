import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customArray'
})
export class CustomArrayPipe implements PipeTransform {

  transform(value: Array<any>, ...args: unknown[]): unknown {
    let newArrayForTitle= [];
    let newArrayForAge = [];
    let newArrayForCompany = [];
    let newArrayForName = [];
    for(let i=0; i<value.length ; i++){
      newArrayForTitle.push(value[i].title);
      newArrayForName.push(value[i].name);
      newArrayForAge.push(value[i].age);
      newArrayForCompany.push(value[i].company);
    }
    return [newArrayForTitle,newArrayForAge,newArrayForName,newArrayForCompany];
  }

}
