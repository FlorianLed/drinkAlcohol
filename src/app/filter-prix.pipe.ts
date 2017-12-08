import { Pipe, PipeTransform } from '@angular/core';
import {Produit} from './produit';

@Pipe({
  name: 'filterPrix'
})
export class FilterPrixPipe implements PipeTransform {

  private static readonly ALL: number = 0;
  private static readonly DONE: number = 1;
  private static readonly NOT_DONE: number = 2;

  transform(value: Produit[], filterWanted= 0): Produit[] {
    if (filterWanted == FilterPrixPipe.ALL)
      return value;

    return value
      .filter((produit) => (filterWanted == FilterPrixPipe.DONE) ? produit.prix <= 15 : produit.prix > 15);

  }

}
