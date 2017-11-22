import { Injectable } from '@angular/core';
import {Produit} from './produit';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class ProduitManagerService {

  constructor(public http: HttpClient) { }

  public  getAllProduits(): Observable<Produit []> {
    return this.http.get('http://localhost:65281/api/produit');
  }

  public updateProduit(produit: Produit): Observable<any> {
    return this.http.put('http://localhost:65281/api/produit', produit.getCleanDataSending());
  }

  public deleteProduit(id: number): Observable<any> {
    return this.http.delete<string>('http://localhost:65281/api/produit', {
      params: new  HttpParams().set('id', id + '')
    });
  }

  public createProduit(produit: Produit): Observable<Produit> {
    return this
      .http
      .post('http://localhost:65281/api/produit', produit.getCleanDataSending());
  }

}
