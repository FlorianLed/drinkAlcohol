import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Produit} from "../produit";
import {ProduitManagerService} from "../produit-manager.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

  public emitProduits() {
    this.lsiteProduitChange.next(this.listeProduit);
  }

}
