import {CommandeProduit, ListeCommandeProduits} from './commande-produit';
import {Produit} from './produit';

export class Panier {
  private _listeCommandeProduits: ListeCommandeProduits = [];


  get listeProduits(): ListeCommandeProduits {
    return this._listeCommandeProduits;
  }


  public totalDeToutesLesCommandes(): number {
    return this._listeCommandeProduits.reduce((tot, commandeAtcuelle) => tot + commandeAtcuelle.total(), 0);
  }

  private recherche(produit: Produit): number {
    const products: Produit[] = this._listeCommandeProduits.map(commandeProduit => commandeProduit.produit);

    for (let i = 0; i < products.length; i++) {
      if (products[i].nom === produit.nom)
        return i;
    }

    return -1;
  }

  private contenir(produit: Produit): boolean {
    return this.recherche(produit) !== -1;
  }

  public ajouterOuChangerQuantiteProduit(produit: Produit, quantite: number = 0) {
    if (!this.contenir(produit)) {
      this.ajouterProduit(produit);
    }
    this.modifierQuantiteProduit(produit, quantite);
  }

  private ajouterProduit(produit: Produit) {
    this._listeCommandeProduits.push(new CommandeProduit(produit));
  }

  public augmQuantiteProduit(produit: Produit) {
    this.modifierQuantiteProduit(produit, 1);
  }

  public dimQuantiteProduit(produit: Produit) {
    this.modifierQuantiteProduit(produit, -1);
  }

  private modifierQuantiteProduit(produit: Produit, ajouterOuSupprimerQuantite: number) {
    const indexProduct = this.recherche(produit);
    let commandeProduitsSelectionnee: CommandeProduit = null;

    if (indexProduct === -1) {
      return;
    }

    commandeProduitsSelectionnee = this._listeCommandeProduits[indexProduct];
    commandeProduitsSelectionnee.modficationQuantiteParent(ajouterOuSupprimerQuantite);
    this.verifierSiAucunProduitAvecQuantiteExistante();
  }

  public applyVariationToStockAllProducts() {
    this
      ._listeCommandeProduits
      .map(commandeProduit => commandeProduit.produit)
      .forEach(produit => produit.misAJourStockAvecVariation());
  }

  private verifierSiAucunProduitAvecQuantiteExistante() {
    this._listeCommandeProduits = this._listeCommandeProduits.filter(commandeProduit => commandeProduit.quantite !== 0);
  }

  public isEmpty(): boolean {
    return this._listeCommandeProduits.length === 0;
  }



}
