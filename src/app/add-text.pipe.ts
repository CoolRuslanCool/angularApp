import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addText'
})
export class AddTextPipe implements PipeTransform {

  transform(value: any, text: string): any {
    return value + ' ' + text;
  }

}
