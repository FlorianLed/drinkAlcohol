import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Produit} from "../produit";
import {ProduitManagerService} from "../produit-manager.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public tmpProduit: Produit = new Produit();
  public listeProduit: Produit[] = [];

  @Output() public lsiteProduitChange: EventEmitter<Produit []> = new EventEmitter();

  constructor(public produitService: ProduitManagerService) { }

  ngOnInit() {
    this.produitService
      .getAllProduits()
      .subscribe(produits => {
        this.listeProduit = Produit.fromJSONs(produits);
        this.emitProduits();
      });
  }

  public createProduct() {
    this.listeProduit.push(this.tmpProduit);
    this.tmpProduit = new Produit();
    this
      .produitService
      .createProduit(this.tmpProduit)
      .subscribe(produit=> this.tmpProduit.id= Produit.fromJSON(produit).id);
    this.tmpProduit = new Produit();
    this.emitProduits();


  }

  public updateProduit(produit: Produit){
    this.produitService.updateProduit(produit).subscribe();
  }

  public deleteProduit(index:number){
    const DELETE_PRODUIT = () => this.listeProduit.splice(index,1);
    const DISPLAY_ERROR = (error)=> console.error(error);
    this
      .produitService
      .deleteProduit(this.listeProduit[index].id)
      .subscribe(DELETE_PRODUIT,DISPLAY_ERROR);
  }

  public emitProduits() {
    this.lsiteProduitChange.next(this.listeProduit);
  }

}
