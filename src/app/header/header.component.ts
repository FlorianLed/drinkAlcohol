import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Produit} from '../produit';
import {ProduitManagerService} from '../produit-manager.service';
import {PanierService} from '../panier.service';
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
  lat = 50.45167199999999;
  lng = 3.984348100000034;
  private _id: number;

  public message: string;
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
