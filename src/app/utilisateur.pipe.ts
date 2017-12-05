import { Pipe, PipeTransform } from '@angular/core';
import {Utilisateur} from './utilisateur';

@Pipe({
  name: 'utilisateur'
})
export class UtilisateurPipe implements PipeTransform {

  transform(listeUtilisateurs: Utilisateur[], term: any): Utilisateur[] {
    if (term === undefined) {
      return listeUtilisateurs;
    } else {
      return listeUtilisateurs.filter(function (utilisateur) {
        return utilisateur.nom.toLowerCase().includes(term.toLowerCase());
      });
    }

  }

}
