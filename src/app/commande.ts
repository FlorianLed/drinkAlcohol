export class Commande {

  private _id: number;
  private _idUtilisateur: number;
  private _idProduit: number;
  private _total: number;
  private _quantite: number;
  private _numeroCommande: number;

  constructor(idUtilisateur: number = 0, idProduit: number = 0, total: number = 0, quantite: number = 0, numeroCommande = 0) {
    this._idUtilisateur = idUtilisateur;
    this._idProduit = idProduit;
    this._total = total;
    this._quantite = quantite;
    this._numeroCommande = numeroCommande;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get idUtilisateur(): number {
    return this._idUtilisateur;
  }

  set idUtilisateur(value: number) {
    this._idUtilisateur = value;
  }

  get idProduit(): number {
    return this._idProduit;
  }

  set idProduit(value: number) {
    this._idProduit = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get quantite(): number {
    return this._quantite;
  }

  set quantite(value: number) {
    this._quantite = value;
  }

  get numeroCommande(): number {
    return this._numeroCommande;
  }

  set numeroCommande(value: number) {
    this._numeroCommande = value;
  }

  public static fromJSON (rawCommande: any): Commande {
    const tmpCommande = new Commande(rawCommande['Id']);
    tmpCommande.idUtilisateur = rawCommande['IdUtilisateur'];
    tmpCommande.idProduit = rawCommande['IdProduit'];
    tmpCommande.total = rawCommande['Total'];
    tmpCommande.quantite = rawCommande['Quantite'];
    tmpCommande.numeroCommande = rawCommande['NumeroCommande'];
    return tmpCommande;
  }

  public static fromJSONs (rawCommande: any[]): Commande[] {
    return rawCommande.map(Commande.fromJSON);
  }

  public getCleanDataForSending(): any {
    return {
      'Id': this._id,
      'IdUtilisateur': this._idUtilisateur,
      'IdProduit': this._idProduit,
      'Total': this._total,
      'Quantite': this._quantite,
      'NumeroCommande': this._numeroCommande
    };
  }





}
