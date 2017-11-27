import {OrderProduit, OrderProduits} from "./order-produit";
import {Produit} from "./produit";

export class Order {
  private _orderProducts: OrderProduits = [];

  public totalAllOrder(): number {
    return this._orderProducts.reduce((tot, currentOrder) => tot + currentOrder.total(), 0);
  }

  private indexOf(product: Produit): number {
    const products: Produit[] = this._orderProducts.map(orderProduct => orderProduct.product);

    for (let i = 0; i < products.length; i++) {
      if (products[i].nom === product.nom)
        return i;
    }

    return -1;
  }

  private contains(product: Produit): boolean {
    return this.indexOf(product) !== -1;
  }

  public addOrChangeQuantityProduct(product: Produit, quantity: number = 0) {
    if (!this.contains(product)) {
      this.addProduct(product);
    }
    this.editQuantityProduct(product, quantity);
  }

  private addProduct(product: Produit) {
    this._orderProducts.push(new OrderProduit(product));
  }

  public incrQuantityProduct(product: Produit) {
    this.editQuantityProduct(product, 1);
  }

  public decrQuantityProduct(product: Produit) {
    this.editQuantityProduct(product, -1);
  }

  private editQuantityProduct(product: Produit, quantityToAddOrRemove: number) {
    const indexProduct = this.indexOf(product);
    let orderProductSelected:OrderProduit = null;

    if (indexProduct === -1) {
      return;
    }

    orderProductSelected = this._orderProducts[indexProduct];
    orderProductSelected.relativeModificationQuantity(quantityToAddOrRemove);
    this.checkIfNoProductsWith0QuantityExists();
  }

  get orderProducts(): OrderProduits {
    return this._orderProducts;
  }

  /*public applyVariationToStockAllProducts() {
    this
      ._orderProducts
      .map(orderProduct => orderProduct.product)
      .forEach(product => product.updateStockWithVariation());
  }*/

  private checkIfNoProductsWith0QuantityExists() {
    this._orderProducts = this.orderProducts.filter(orderP => orderP.quantity !== 0);
  }

  public isEmpty() : boolean {
    return this._orderProducts.length === 0;
  }

}
