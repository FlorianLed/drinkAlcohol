import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UtilisateurManagerService} from '../utilisateur-manager.service';
import {Utilisateur} from '../utilisateur';
import {ActivatedRoute, Router} from '@angular/router';


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

  constructor(public utilisateurService: UtilisateurManagerService, private router: Router, private route: ActivatedRoute) { }

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
        this.tmpEmail = '';
        this.tmpMP = '';
        this.router.navigate(['../admin-page-principal'], { relativeTo: this.route });
      }
      this.emitUtilisateurs();
    }
  }


}
