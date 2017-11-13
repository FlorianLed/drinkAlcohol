export class Utilisateur {
  private _nom: string;
  private _prenom: string;
  //private _dateNaissance: ;
  private _codePostal: number;
  private _ville: string;
  private _rue: string;
  private _numero: number;
  private _email: string;
  private _gsm: number;
  private _pseudo: string;
  private _motDePasse: string;





  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }


  get codePostal(): number {
    return this._codePostal;
  }

  set codePostal(value: number) {
    this._codePostal = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }

  get rue(): string {
    return this._rue;
  }

  set rue(value: string) {
    this._rue = value;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get gsm(): number {
    return this._gsm;
  }

  set gsm(value: number) {
    this._gsm = value;
  }

  get pseudo(): string {
    return this._pseudo;
  }

  set pseudo(value: string) {
    this._pseudo = value;
  }

  get motDePasse(): string {
    return this._motDePasse;
  }

  set motDePasse(value: string) {
    this._motDePasse = value;
  }
}
