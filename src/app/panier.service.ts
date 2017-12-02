import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Produit} from "./produit";

@Injectable()
export class PanierService {

  private messageSource = new BehaviorSubject<Produit[]>([]);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  change(produit: Produit[]){
    this.messageSource.next(produit);
  }

}
