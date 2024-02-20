import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: string): string {
    const fecha = new Date(date);
    const formatedDate = fecha.toLocaleDateString('es-ES',{day:'2-digit', month : '2-digit', year: "numeric"});
    return formatedDate
  }

}
