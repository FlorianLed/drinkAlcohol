import {current} from "codelyzer/util/syntaxKind";

export class Produit {

  private _nom: string;
  private _prix: number;
  private _stock: number;
  private _variationStock: number = 0;
  private _urlImage: string;
  private _description: string;
  private _pourcentage: number;
  private _id: number;


  constructor(nom: string = '', prix: number = 0, stock: number = 0, urlImage: string = '', description: string = '', pourcentage: number = 0) {
    this._nom = nom;
    this._prix = prix;
    this._stock = stock;
    this._urlImage = urlImage;
    this._description = description;
    this._pourcentage = pourcentage;
  }


  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prix(): number {
    return this._prix;
  }

  set prix(value: number) {
    this._prix = (value < 0) ? 0 : value;
  }

  get stock(): number {
    return this._stock;
  }

  set stock(value: number) {
    this._stock = (value < 0) ? 0 : value;
  }

  get variationStock(): number {
    return this._variationStock;
  }

  set variationStock(value: number) {
    this._variationStock = value;
  }

  get urlImage(): string {
    return this._urlImage;
  }

  set urlImage(value: string) {
    this._urlImage = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get pourcentage(): number {
    return this._pourcentage;
  }

  set pourcentage(value: number) {
    this._pourcentage = value;
  }

  public modifierParentVariationStock(value: number){
    this._variationStock +=value;
  }

  public dimVariation(){
    this._variationStock--;
  }

  public augmVariation(){
    this._variationStock++;
  }

  public misAJourStockAvecVariation(){
    this.stock = this.stockDisponible();
  }

  public stockDisponible() : number{
    return this.stock - this._variationStock;
  }

  public isDiponible() : boolean{
    return this.stockDisponible() > 0;
  }

  public isDiminuer() : boolean{
    return this.variationStock > 0;
  }

  public isRuptureStock(): boolean {
    return this.stock === 0 && this.variationStock === 0;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  public static fromJSON (rawProduit:any) : Produit{
    const tmpProduit = new Produit(rawProduit["nom"]);
    tmpProduit.id = rawProduit["Id"];
    tmpProduit.prix = rawProduit["prix"];
    tmpProduit.stock = rawProduit["stock"];
    tmpProduit.urlImage = rawProduit["urlImage"];
    tmpProduit.description = rawProduit["description"];
    tmpProduit.pourcentage = rawProduit["pourcentage"];
    return tmpProduit;
  }

  public static fromJSONs (rawsProduit:any[]) : Produit[]{
    return rawsProduit.reduce((listeProduit,currentElement) => {
      listeProduit.push(Produit.fromJSON(currentElement));
      return listeProduit;
    }, []);
  }

  public getCleanDataSending(): any{
    return {
      "nom":this.nom,
      "prix":this.prix,
      "stock":this.stock,
      "urlImage":this.urlImage,
      "description":this.description,
      "pourcentage":this.pourcentage,
      "Id":this._id
    };
  }



}
