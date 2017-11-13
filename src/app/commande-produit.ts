import {Produit} from "./produit";

export class CommandeProduit {
  private _produit: Produit;
  private _quantite: number;


  constructor(produit: Produit, quantite: number = 0) {
    this._produit = produit;
    this._quantite = quantite;
  }


  get produit(): Produit {
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  get quantite(): number {
    return this._quantite;
  }

  set quantite(value: number) {
    this._quantite = value;
  }

  public total() : number{
    return this._produit.prix * this.quantite;
  }

  public augmQuantite() {
    this.modficationQuantiteParent(1);
  }

  public dimQuantitz() {
    this.modficationQuantiteParent(-1);
  }

  public modficationQuantiteParent(modifQuantite: number) {
    this.quantite += modifQuantite;
    this.produit.modifierParentVariationStock(modifQuantite);
  }


}
export declare type ListeCommandeProduits = CommandeProduit[];
