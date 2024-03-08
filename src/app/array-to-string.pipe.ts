import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {

  transform(value: Array<any>, ...args: unknown[]): any {
    let newArray = [];
    for(let i=0; i<value.length ; i++){
      newArray.push(value[i].name);
    }
    return newArray?.join('~');
  }

}
