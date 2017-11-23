import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Produit} from '../produit';
import {ProduitManagerService} from '../produit-manager.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public tmpNom = '';
  public tmpPrix: number;
  public tmpStock: number;
  public tmpUrlImage = '';
  public tmpDescription = '';
  public tmpPourcentage: number;

  public listeProduit: Produit[] = [];

  @Output() public listeProduitChange: EventEmitter<Produit []> = new EventEmitter();

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
    const tmpProduit = new Produit(this.tmpNom, this.tmpPrix, this.tmpStock, this.tmpUrlImage, this.tmpDescription, this.tmpPourcentage);
    this.listeProduit.push(tmpProduit);
    this
      .produitService
      .createProduit(tmpProduit)
      .subscribe(produit => tmpProduit.id = Produit.fromJSON(produit).id);

    this.tmpNom = '';
    this.tmpPrix = 0;
    this.tmpStock = 0;
    this.tmpUrlImage = '';
    this.tmpDescription = '';
    this.tmpPourcentage = 0;
    this.emitProduits();
  }

  public updateProduit(produit: Produit) {
    this.produitService.updateProduit(produit).subscribe();
  }


  public deleteProduit(index: number) {
    const DELETE_PRODUIT = () => this.listeProduit.splice(index, 1);
    const DISPLAY_ERROR = (error) => console.error(error);
    this
      .produitService
      .deleteProduit(this.listeProduit[index].id)
      .subscribe(DELETE_PRODUIT, DISPLAY_ERROR);
  }

  public emitProduits() {
    this.listeProduitChange.next(this.listeProduit);
  }

}
