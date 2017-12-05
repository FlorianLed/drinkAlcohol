import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Utilisateur} from './utilisateur';

@Injectable()
export class UtilisateurManagerService {

  constructor(public http: HttpClient) { }

  public  getAllUtilisateurs(): Observable<Utilisateur []> {
    return this.http.get('http://localhost:65281/api/utilisateur');
  }

  public getProduit(id: number): Observable<Utilisateur> {
    return this.http.get('http://localhost:65281/api/utilisateur/' + id);
  }

  public updateUtilisateur(utilisateur: Utilisateur): Observable<any> {
    return this.http.put('http://localhost:65281/api/utilisateur', utilisateur.getCleanDataForSending());
  }

  public deleteUtilisateur(id: number): Observable<any> {
    return this.http.delete<string>('http://localhost:65281/api/utilisateur', {
      params: new  HttpParams().set('id', id + '')
    });
  }

  public createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this
      .http
      .post('http://localhost:65281/api/utilisateur', utilisateur.getCleanDataForSending());
  }

}
