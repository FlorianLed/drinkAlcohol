import { Component, OnInit } from '@angular/core';
import {Produit} from "../produit";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public tmpProduit: Produit = new Produit();
  public listeProduit: Produit[] = [];

  constructor() { }

  ngOnInit() {
  }

  public createProduct() {
    this.listeProduit.push(this.tmpProduit);
    this.tmpProduit = new Produit();
  }

}
