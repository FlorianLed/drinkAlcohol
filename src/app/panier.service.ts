import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Produit} from './produit';
import {Observable} from 'rxjs/Observable';
import {Commande} from './commande';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PanierService {

  private messageSource = new BehaviorSubject<Produit[]>([]);
  currentMessage = this.messageSource.asObservable();

  constructor(public http: HttpClient) { }

  change(produit: Produit[]) {
    this.messageSource.next(produit);
  }


  public  getAllCommande(): Observable<Commande []> {
    return this.http.get('http://localhost:65281/api/commande');
  }

  public createCommande(commande: Commande): Observable<Commande> {
    return this.http.post('http://localhost:65281/api/commande', commande.getCleanDataForSending());
  }


}
