import {Produit} from "./produit";

export class OrderProduit {
  private _product: Produit;
  private _quantity: number;

  constructor(product: Produit, quantity: number = 0) {
    this._product = product;
    this._quantity = quantity;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }
  get product(): Produit {
    return this._product;
  }

  set product(value: Produit) {
    this._product = value;
  }

  public total(): number {
    return this._product.prix * this.quantity;
  }

  public incrQuantity() {
    this.relativeModificationQuantity(1);
  }

  public decrQuantity() {
    this.relativeModificationQuantity(-1);
  }

  public relativeModificationQuantity(quantityToMod: number) {
    this.quantity += quantityToMod;
    this.product.editRelativeVariationStock(quantityToMod);
  }



}
export declare type OrderProduits = OrderProduit[];
