import { Pipe, PipeTransform } from '@angular/core';
import {Produit} from './produit';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  private static readonly ALL: string = '';

  transform(listeProduit: Produit[], term: any): Produit[] {
      if (term === undefined)return listeProduit;
      return listeProduit.filter(function (produit) {
         return produit.nom.toLowerCase().includes(term);
      });
  }

}
