import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Utilisateur} from './utilisateur';

@Injectable()
export class UtilisateurService {

  /*private messageSource = new BehaviorSubject<Utilisateur[]>([]);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  change(user: Utilisateur[]) {
    this.messageSource.next(user);
  }*/



  private messageSource = new BehaviorSubject<string>('Connexion');
  currentMessage = this.messageSource.asObservable();

  private messageSourceId = new BehaviorSubject<number>(0);
  currentMessageId = this.messageSourceId.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeMessageId(messageId: number) {
    this.messageSourceId.next(messageId);
  }
}
