import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Produit} from "../produit";
import {ProduitManagerService} from "../produit-manager.service";
import {OrderProduit} from "../order-produit";



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

  @Output() public orderProductChange : EventEmitter <OrderProduit> = new EventEmitter();

  constructor(public produitService: ProduitManagerService) { }

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

  /*public recherche(recherche: string) {
    this.listeRecherche = [];
    for(let i = 0;i< this.listeProduit.length;i++){
      const pos = this.listeProduit[i].nom.toLowerCase().search(recherche.toLowerCase());
      if(pos>=0){
        this.listeRecherche.push(this.listeProduit[i]);
      }
    }
  }*/

  public AjoutPanier(id: number){
    this.produitService
      .getProduit(id)
      .subscribe(produit => {
        this.prod = Produit.fromJSON(produit);
        this.ListeAuPanier.push(this.prod);
      });
  }

  private emitOrderProduct(product : Produit, addQuantity : boolean){
    this.orderProductChange.next(new  OrderProduit(product, addQuantity?1:-1));
    console.log(addQuantity);
  }

  public incrementQuantityOfProduct(product : Produit){
    this.emitOrderProduct(product,true);
  }

  public decrementQuantityOfProduct(product : Produit){
    this.emitOrderProduct(product,false);
  }







}
