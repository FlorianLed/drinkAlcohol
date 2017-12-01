import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Produit} from "../produit";
import {ProduitManagerService} from "../produit-manager.service";
import {OrderProduit} from "../order-produit";
import {PanierService} from "../panier.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {


  public listeProduit: Produit[] = [];
  public ListeAuPanier: Produit[] = [];
  public prod: Produit;

  public typeFilterTodo:number = 0;


  @Output() public lsiteProduitChange: EventEmitter<Produit []> = new EventEmitter();


  constructor(public produitService: ProduitManagerService,public panierService: PanierService) { }

  ngOnInit() {
    this.produitService
      .getAllProduits()
      .subscribe(produits => {
        this.listeProduit = Produit.fromJSONs(produits);
        this.emitProduits();
      });
  }


  public emitProduits() {
    this.lsiteProduitChange.next(this.listeProduit);
  }

  public recherche(recherche: string) {
    this.listeProduit = [];
    for(let i = 0;i< this.listeProduit.length;i++){
      const pos = this.listeProduit[i].nom.toLowerCase().search(recherche.toLowerCase());
      if(pos>=0){
        this.listeProduit.push(this.listeProduit[i]);
      }
    }
  }
  private  _id:number;

   get id(): number {
    return this._id;
  }

   set id(value: number) {
    this._id = value;
  }

  public AjoutPanier(produit: Produit){
    //this.id = ide;
    /*this.produitService
      .getProduit(ide)
      .subscribe(produit => {
        this.prod = Produit.fromJSON(produit);
        this.ListeAuPanier.push(this.prod);
      });*/
    this.ListeAuPanier.push(produit);
    this.panierService.change(this.ListeAuPanier);
  }





}
