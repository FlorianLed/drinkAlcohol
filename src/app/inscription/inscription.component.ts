import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Utilisateur} from '../utilisateur';
import {UtilisateurManagerService} from '../utilisateur-manager.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

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

  public u: Utilisateur;

  constructor(public utilisateurService: UtilisateurManagerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.utilisateurService
      .getAllUtilisateurs()
      .subscribe(utilisateurs => {
        this.listeUtilisateurs = Utilisateur.fromJSONs(utilisateurs);
        this.emitUtilisateurs();
      });
  }

  public creerUtilisateur() {
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
    this.router.navigate(['../connexion'], { relativeTo: this.route });
  }

  public emitUtilisateurs() {
    this.listeUtilisateurChange.next(this.listeUtilisateurs);
  }

}
