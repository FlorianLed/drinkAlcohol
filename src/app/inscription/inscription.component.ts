import { Component, OnInit } from '@angular/core';
import {Inscription} from "../inscription";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public tmpInscription: Inscription = new Inscription();

  constructor() { }

  ngOnInit() {
  }

  public creerUtilisateur(){
    this.tmpInscription = new Inscription();
  }



}
