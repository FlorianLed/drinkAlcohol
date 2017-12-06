import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Utilisateur} from '../utilisateur';
import {UtilisateurManagerService} from '../utilisateur-manager.service';
import {FormControl} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-admin-gestion-utilisateur',
  templateUrl: './admin-gestion-utilisateur.component.html',
  styleUrls: ['./admin-gestion-utilisateur.component.css']
})
export class AdminGestionUtilisateurComponent implements OnInit {

  public term;

  public tmpNom = '';
  public tmpPrenom = '';
  public tmpDateNaiss = '';
  public tmpVille = '';
  public tmpCp: number;
  public tmpRue = '';
  public tmpNum: number;
  public tmpGsm: number;
  public tmpMail = '';
  public tmpMp = '';
  public tmpAdmin = false;

  public listeUtilisateurs: Utilisateur[] = [];

  @Output() public listeUtilisateurChange: EventEmitter<Utilisateur []> = new EventEmitter();

  private url = 'http://localhost:65281/api/utilisateur';

  constructor(public utilisateurService: UtilisateurManagerService, public http: HttpClient) { }

  ngOnInit() {
    this.utilisateurService
      .getAllUtilisateurs()
      .subscribe(utilisateurs => {
        this.listeUtilisateurs = Utilisateur.fromJSONs(utilisateurs);
        this.emitUtilisateurs();
      });

  }

  public createUtilisateur() {
    const tmpUtilisateur = new Utilisateur(this.tmpNom, this.tmpPrenom, this.tmpDateNaiss, this.tmpVille, this.tmpCp, this.tmpRue, this.tmpNum, this.tmpGsm, this.tmpMail, this.tmpMp, this.tmpAdmin);
    this.listeUtilisateurs.push(tmpUtilisateur);
    this
      .utilisateurService
      .createUtilisateur(tmpUtilisateur)
      .subscribe(utilisateur => tmpUtilisateur.id = Utilisateur.fromJSON(utilisateur).id);

    this.tmpNom = '';
    this.tmpPrenom = '';
    this.tmpDateNaiss = '';
    this.tmpVille = '';
    this.tmpCp = 0;
    this.tmpRue = '';
    this.tmpNum = 0;
    this.tmpGsm = 0;
    this.tmpMail = '';
    this.tmpMp = '';
    this.tmpAdmin = false;
    this.emitUtilisateurs();
  }

  public updateUtilisateur(utilisateur: Utilisateur) {
    this.utilisateurService.updateUtilisateur(utilisateur).subscribe();
  }


  public deleteUtilisateur(index: number) {
    const DELETE_UTILISATEUR = () => this.listeUtilisateurs.splice(index, 1);
    const DISPLAY_ERROR = (error) => console.error(error);
    this
      .utilisateurService
      .deleteUtilisateur(this.listeUtilisateurs[index].id)
      .subscribe(DELETE_UTILISATEUR, DISPLAY_ERROR);
  }

  public emitUtilisateurs() {
    this.listeUtilisateurChange.next(this.listeUtilisateurs);
  }


  public recherche(recherche: string) {
    this.listeUtilisateurs = [];
    for (let i = 0; i < this.listeUtilisateurs.length; i++) {
      const pos = this.listeUtilisateurs[i].nom.toLowerCase().search(recherche.toLowerCase());
      if (pos >= 0) {
        this.listeUtilisateurs.push(this.listeUtilisateurs[i]);
      }
    }
  }



}
