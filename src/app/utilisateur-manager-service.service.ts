import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Utilisateur} from './utilisateur';
import 'rxjs/add/operator/map';

@Injectable()
export class UtilisateurManagerServiceService {

  constructor(public http: Http) { }

  public getAllTodos(): Observable<Utilisateur> {
    return this
      .http
      .get('http://localhost:65281/api/utilisateur')
      .map(response => response.json());
  }

  public createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this
      .http
      .post('http://localhost:65281/api/utilisateur', utilisateur.getCleanDataForSending())
      .map(response => response.json());
  }

}
