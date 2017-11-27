import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Produit} from "../produit";
import {ProduitManagerService} from "../produit-manager.service";
import {FormControl} from "@angular/forms";
import {HttpParams} from "@angular/common/http";
import {OrderProduit} from "../order-produit";
import {Order} from "../order";
import {isNumber} from "util";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {


  public listeProduit: Produit[] = [];
  public ListeAuPanier: Produit[] = [];
  public prod: Produit;


  @Output() public lsiteProduitChange: EventEmitter<Produit []> = new EventEmitter();

  @Output() public orderProductChange : EventEmitter <OrderProduit> = new EventEmitter();
  @Input() public currentOrderInjected : OrderProduit;
  @Output() public orderValidated:EventEmitter<Order> = new EventEmitter();

  public currentOrder:Order = new Order();


  constructor(public produitService: ProduitManagerService) { }

  ngOnInit() {
    this.produitService
      .getAllProduits()
      .subscribe(produits => {
        this.listeProduit = Produit.fromJSONs(produits);
        this.emitProduits();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const tmpOrderProduct:OrderProduit = changes["currentOrderInjected"].currentValue;

    if (tmpOrderProduct) {
      this.currentOrder.addOrChangeQuantityProduct(tmpOrderProduct.product, tmpOrderProduct.quantity);
    }
  }

  public emitProduits() {
    this.lsiteProduitChange.next(this.listeProduit);
  }

  public recherche(recherche: string) {
    this.ListeAuPanier = [];
    for(let i = 0;i< this.listeProduit.length;i++){
      const pos = this.listeProduit[i].nom.toLowerCase().search(recherche.toLowerCase());
      if(pos>=0){
        this.ListeAuPanier.push(this.listeProduit[i]);
      }
    }
  }

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

  public emitAndResetOrder() {
    this.emitOrderValidated();
    this.currentOrder = new Order();
  }

  public emitOrderValidated() {
    this.orderValidated.next(this.currentOrder);
  }



}
