import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Produit} from '../produit';
import {PanierService} from '../panier.service';
import {Commande} from '../commande';
import {UtilisateurService} from '../utilisateur.service';
import {ProduitManagerService} from "../produit-manager.service";


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']

})
export class PanierComponent implements OnInit {


  public ListeAuPanier: Produit[] = [];
  public listeProduit: Produit[] = [];
  public value = 1;
  public quantite: number[]= [];

  public messageId: number;
  public message: string;
  public listeCommande: Commande [] = [];
  @Output() public listeCommandeChange: EventEmitter<Commande []> = new EventEmitter();
  @Output() public lsiteProduitChange: EventEmitter<Produit []> = new EventEmitter();

  public idProduitDernireCommande: number [] = [];
  public listeMaDerniereCommande: Produit [] = [];

  constructor(public panierService: PanierService, private user: UtilisateurService, public produitService: ProduitManagerService) { }

  ngOnInit() {
    this.panierService.currentMessage.subscribe(produits => this.ListeAuPanier = produits);
    this.user.currentMessageId.subscribe(message => this.messageId = message);
    this.user.currentMessage.subscribe(message => this.message = message);

    this.panierService
      .getAllCommande()
      .subscribe(commandes => {
        this.listeCommande = Commande.fromJSONs(commandes);
        this.emitCommande();
      });

    this.produitService
      .getAllProduits()
      .subscribe(produits => {
        this.listeProduit = Produit.fromJSONs(produits);
        this.emitProduits();
      });
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

  public emitCommande() {
    this.listeCommandeChange.next(this.listeCommande);
  }

  public historiqueCommande() {
    let numCommande = 0;
    const condition = 0;
    for (let i = 0; i < this.listeCommande.length; i++) {
      console.log(this.listeCommande[i].numeroCommande);
      console.log(i);
      console.log(this.listeCommande[i].idUtilisateur, this.messageId, 'test id');
      if (this.listeCommande[i].idUtilisateur === this.messageId) {
        console.log('cdt1');
        if (condition === 0) {
          console.log('cdt2');
          numCommande = this.listeCommande[i].numeroCommande;
          console.log(numCommande);
        }

        if (this.listeCommande[i].numeroCommande === numCommande) {
          console.log('cdt3');
          for (let j = 0; j < this.listeProduit.length; j++) {
            if (this.listeProduit[j].id === this.listeCommande[i].idProduit) {
              this.listeMaDerniereCommande.push(this.listeProduit[j]);
            }
          }
        }

      }
    }
  }

  public emitProduits() {
    this.lsiteProduitChange.next(this.listeProduit);
  }

}
