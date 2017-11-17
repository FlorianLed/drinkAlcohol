import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Produit} from "./produit";
import {Observable} from "rxjs/Observable";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class ProduitManagerService {

  constructor(public http: Http) { }

  public  getAllProduits(): Observable<Produit []> {
    return this.http.get("http://localhost:4200/admin").map(response => response.json());
  }

  public updateProduit(produit:Produit): Observable<any> {
    return this.http.put("http://localhost:4200/admin",produit.getCleanDataSending());
  }

  public deleteProduit(id: number): Observable<any>{
    return this.http.delete("http://localhost:4200/admin",{
      params: new  HttpParams().set("id",id+'').toString()
    });
  }

  public createProduit(produit: Produit): Observable<Produit>{
    return this
      .http
      .post("http://localhost:4200/admin",produit.getCleanDataSending())
      .map(response=> response.json());
  }

}
