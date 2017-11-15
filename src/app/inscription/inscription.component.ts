import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Utilisateur} from "../utilisateur";
import {UtilisateurManagerServiceService} from "../utilisateur-manager-service.service";


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public tmpInscription: string = "";
  public u: Utilisateur;

  @Output() private todosChange:EventEmitter<Utilisateur> = new EventEmitter();

  constructor(public utilisateurService: UtilisateurManagerServiceService) { }

  ngOnInit() {
    this.utilisateurService.getAllTodos().subscribe(u => {
      this.u = Utilisateur.fromJSON(u);
      this.emitUtilisateur();
    });
  }
  public emitUtilisateur() {
    this.todosChange.next(this.u);
  }

  public creerUtilisateur(){
    const tmpUtilisateur = new Utilisateur(this.tmpInscription);
    this
      .utilisateurService
      .createUtilisateur(tmpUtilisateur)
      .subscribe(u => tmpUtilisateur.id = Utilisateur.fromJSON(u).id);
    this.tmpInscription = "";
    this.emitUtilisateur();
    //this.tmpInscription = new Utilisateur();
  }



}
