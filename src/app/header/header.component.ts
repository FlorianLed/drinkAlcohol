import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Produit} from '../produit';
import {ProduitManagerService} from '../produit-manager.service';
import {PanierService} from '../panier.service';
import {FilterPipe} from '../filter.pipe';
import {UtilisateurService} from '../utilisateur.service';
import {Utilisateur} from '../utilisateur';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {


  public listeProduit: Produit[] = [];
  public ListeAuPanier: Produit[] = [];
  public listeUser: Utilisateur[]= [];
  public typeFilterTodo = 0;
  public term;
  lat: number = 50.45167199999999;
  lng: number = 3.984348100000034;

  public message:string;
  @Output() public lsiteProduitChange: EventEmitter<Produit []> = new EventEmitter();


  constructor(public produitService: ProduitManagerService, public panierService: PanierService, private user: UtilisateurService) { }

  ngOnInit() {
    this.produitService
      .getAllProduits()
      .subscribe(produits => {
        this.listeProduit = Produit.fromJSONs(produits);
        this.emitProduits();
      });
    this.user.currentMessage.subscribe(message => this.message = message);
  }


  public emitProduits() {
    this.lsiteProduitChange.next(this.listeProduit);
  }

  public recherche(recherche: string) {
    this.listeProduit = [];
    for (let i = 0; i < this.listeProduit.length; i++) {
      const pos = this.listeProduit[i].nom.toLowerCase().search(recherche.toLowerCase());
      if (pos >= 0) {
        this.listeProduit.push(this.listeProduit[i]);
      }
    }
  }

  private _id: number;

   get id(): number {
    return this._id;
  }

   set id(value: number) {
    this._id = value;
  }

  public AjoutPanier(produit: Produit) {
    this.ListeAuPanier.push(produit);
    this.panierService.change(this.ListeAuPanier);
  }



}
