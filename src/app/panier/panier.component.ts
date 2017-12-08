import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Produit} from '../produit';
import {PanierService} from '../panier.service';
import {Commande} from '../commande';
import {UtilisateurService} from '../utilisateur.service';
import {ProduitManagerService} from '../produit-manager.service';
import {Utilisateur} from '../utilisateur';


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
    let condition = 0;  // permet de rentrer qu'une seule fois ds le if pour prendre la dernière commande
    for (let i = this.listeCommande.length - 1; i > 0 ; i--) {  // aller chercher le dernier numcommande de l'utilisateur
      if (this.listeCommande[i].idUtilisateur === this.messageId) { // compare l'id ds la bd et celui qui s'est connecté sur le site
        if (condition === 0) {
          numCommande = this.listeCommande[i].numeroCommande;
          condition++;
        }

        if (this.listeCommande[i].numeroCommande === numCommande) {
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

  creerCommande() {
    let total = 0;
    let derniereNumeroCommandeBD = 0;
    const nbCommande = this.listeCommande.length;
      derniereNumeroCommandeBD = this.listeCommande[nbCommande - 1].numeroCommande;


    derniereNumeroCommandeBD += 1;
    for (let i = 0; i < this.ListeAuPanier.length; i++) {
      total = this.quantite[i] * this.ListeAuPanier[i].prix;
      const tmpCommande = new Commande(this.messageId, this.ListeAuPanier[i].id, total, this.quantite[i], derniereNumeroCommandeBD);
      this.listeCommande.push(tmpCommande);


      this
        .panierService
        .createCommande(tmpCommande)
        .subscribe(commande => tmpCommande.id = Utilisateur.fromJSON(commande).id);
    }
  }



}
