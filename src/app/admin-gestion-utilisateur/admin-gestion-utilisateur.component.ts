import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Utilisateur} from '../utilisateur';
import {UtilisateurManagerService} from '../utilisateur-manager.service';

@Component({
  selector: 'app-admin-gestion-utilisateur',
  templateUrl: './admin-gestion-utilisateur.component.html',
  styleUrls: ['./admin-gestion-utilisateur.component.css']
})
export class AdminGestionUtilisateurComponent implements OnInit {

  public tmpNom = '';
  public tmpPrenom = '';
  public tmpDateNaiss = '';
  public tmpVille = '';
  public tmpCp: number;
  public tmpRue = '';
  public tmpNum: number;
  public tmpGsm: number;
  public tmpMail = '';
  public tmpPseudo = '';
  public tmpMp = '';

  public listeUtilisateurs: Utilisateur[] = [];

  @Output() public listeUtilisateurChange: EventEmitter<Utilisateur []> = new EventEmitter();

  constructor(public utilisateurService: UtilisateurManagerService) { }

  ngOnInit() {
    this.utilisateurService
      .getAllUtilisateurs()
      .subscribe(utilisateurs => {
        this.listeUtilisateurs = Utilisateur.fromJSONs(utilisateurs);
        this.emitUtilisateurs();
      });
  }

  public createUtilisateur() {
    const tmpUtilisateur = new Utilisateur(this.tmpNom, this.tmpPrenom, this.tmpDateNaiss, this.tmpVille, this.tmpCp, this.tmpRue, this.tmpNum, this.tmpGsm, this.tmpMail, this.tmpPseudo, this.tmpMp);
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
    this.tmpPseudo = '';
    this.tmpMp = '';
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

}
