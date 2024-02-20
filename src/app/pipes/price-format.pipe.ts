import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  transform(price : number): string {
    const formattedPrice = price.toString();
    return (parseFloat(formattedPrice).toFixed(2)+" €").replace(".",",");
  }

}
