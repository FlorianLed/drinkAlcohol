import {Component, OnInit} from '@angular/core';
import {Produit} from '../produit';
import {PanierService} from '../panier.service';
import {Commande} from '../commande';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']

})
export class PanierComponent implements OnInit {


  public ListeAuPanier: Produit[] = [];
  public value = 1;
  public quantite: number[]= [];

  public listeCommande: Commande [] = [];

  constructor(public panierService: PanierService) { }

  ngOnInit() {
    this.panierService.currentMessage.subscribe(produits => this.ListeAuPanier = produits);
  }


  public totalAllOrder(): number {
    let total = 0/*, quantDispo = 0*/;
    for (let i = 0; i < this.ListeAuPanier.length; i++) {
      if (this.quantite[i] <= this.ListeAuPanier[i].stock && this.quantite[i] >= 0) {
        total += this.ListeAuPanier[i].prix * this.quantite[i];
        /*quantDispo = this.ListeAuPanier[i].stock-this.quantite[i];
        console.log(total);
        console.log(this.quantite[i]);
        console.log(this.ListeAuPanier[i].stock);
        console.log("Quantité disponible : "+quantDispo);*/
      }
    }
    return total;
  }




}
