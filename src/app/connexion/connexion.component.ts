import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UtilisateurManagerService} from '../utilisateur-manager.service';
import {Utilisateur} from '../utilisateur';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilisateurService} from "../utilisateur.service";


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public tmpEmail= '';
  public tmpMP= '';

  public listeUtilisateurs: Utilisateur[] = [];

  @Output() public listeUtilisateurChange: EventEmitter<Utilisateur []> = new EventEmitter();

  constructor(public utilisateurService: UtilisateurManagerService, private router: Router, private route: ActivatedRoute, private user: UtilisateurService) { }

  ngOnInit() {
    this.utilisateurService
      .getAllUtilisateurs()
      .subscribe(utilisateurs => {
        this.listeUtilisateurs = Utilisateur.fromJSONs(utilisateurs);
        this.emitUtilisateurs();
      });
  }


  public emitUtilisateurs() {
    this.listeUtilisateurChange.next(this.listeUtilisateurs);
  }

  seConnecter() {
    for (let i = 0; i < this.listeUtilisateurs.length; i++) {
      if (this.tmpEmail === this.listeUtilisateurs[i].mail && this.tmpMP === this.listeUtilisateurs[i].mp) {
        console.log(this.listeUtilisateurs.length);
        console.log(this.listeUtilisateurs[i].nom);
        console.log(this.listeUtilisateurs[i].admin);
        if (this.listeUtilisateurs[i].admin === true) {
          this.router.navigate(['../admin-page-principal'], { relativeTo: this.route });
          this.tmpEmail = '';
          this.tmpMP = '';
          this.user.changeMessage(this.listeUtilisateurs[i].nom);
          return;
        }
        else if(this.listeUtilisateurs[i].admin === false) {
          this.router.navigate(['../accueil'], { relativeTo: this.route });
          this.tmpEmail = '';
          this.tmpMP = '';
          this.user.changeMessage(this.listeUtilisateurs[i].nom);
          this.user.changeMessageId(this.listeUtilisateurs[i].id);
          return;
        }
      }

      console.error('error');
      this.emitUtilisateurs();
    }

    this.tmpEmail = '';
    this.tmpMP = '';
  }






}
