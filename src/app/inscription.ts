export class Inscription {
  private _nom: string;
  private _prenom: string;
  private _dateNaissance: string;
  private _ville: string;
  private _cp: number;
  private _rue: string;
  private _num: number;
  private _gsm: number;
  private _mail: string;
  private _pseudos: string;
  private _mp: string;
  private _cmp: string;

  constructor(nom: string = '',prenom: string = '',dateNaissance: string = '',ville: string = '',cp: number = 0,rue: string = '',
              num: number = 0,gsm: number = 0,mail: string = '',pseudos: string = '',mp: string = '',cmp: string = ''){

    this._nom=nom;
    this._prenom=prenom;
    this._dateNaissance=dateNaissance;
    this._ville=ville;
    this._cp=cp;
    this._rue=rue;
    this._num=num;
    this._gsm=gsm;
    this._mail=mail;
    this._pseudos=pseudos;
    this._mp=mp;
    this._cmp=cmp;
  }

  get cmp(): string {
    return this._cmp;
  }

  set cmp(value: string) {
    this._cmp = value;
  }
  get mp(): string {
    return this._mp;
  }

  set mp(value: string) {
    this._mp = value;
  }
  get pseudos(): string {
    return this._pseudos;
  }

  set pseudos(value: string) {
    this._pseudos = value;
  }
  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }
  get gsm(): number {
    return this._gsm;
  }

  set gsm(value: number) {
    this._gsm = value;
  }
  get num(): number {
    return this._num;
  }

  set num(value: number) {
    this._num = value;
  }
  get rue(): string {
    return this._rue;
  }

  set rue(value: string) {
    this._rue = value;
  }
  get cp(): number {
    return this._cp;
  }

  set cp(value: number) {
    this._cp = value;
  }
  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }
  get dateNaissance(): string {
    return this._dateNaissance;
  }

  set dateNaissance(value: string) {
    this._dateNaissance = value;
  }
  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }
  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

}
