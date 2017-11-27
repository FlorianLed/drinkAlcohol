import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ProduitManagerService} from "../produit-manager.service";
import {Produit} from "../produit";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit{

  constructor() { }

  ngOnInit() {

  }




}
