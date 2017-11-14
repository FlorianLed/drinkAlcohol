import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../utilisateur";


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public tmpInscription: Utilisateur = new Utilisateur();

  constructor() { }

  ngOnInit() {
  }

  public creerUtilisateur(){
    this.tmpInscription = new Utilisateur();
  }



}
