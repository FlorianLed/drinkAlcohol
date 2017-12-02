import { Pipe, PipeTransform } from '@angular/core';
import {Produit} from "./produit";
import {isNullOrUndefined, isUndefined} from "util";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {noUndefined} from "@angular/compiler/src/util";


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  private static readonly ALL:string = "";

  transform(listeProduit: Produit[], term: any): Produit[] {
      //if(term === un)return listeProduit;
      //return listeProduit;
      return listeProduit.filter(function (produit) {
         return produit.nom.toLowerCase().includes(term);
      })
  }

}
