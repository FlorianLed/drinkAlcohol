import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminComponent } from './admin/admin.component';
import {UtilisateurManagerServiceService} from "./utilisateur-manager-service.service";
import {HttpModule} from "@angular/http";


const routes: Routes= [
  {
    path: "accueil", component: AccueilComponent
  },
  {
    path: "catégorie", component: AccueilComponent
  },
  {
    path: "à_propos", component: AccueilComponent
  },
  {
    path: "mon_panier", component: AccueilComponent
  },
  {
    path: "header", component: HeaderComponent
  },
  {
    path: "connexion", component: ConnexionComponent
  },
  {
    path: "inscription", component: InscriptionComponent
  },
  {
    path: "admin", component: AdminComponent
  },
  {
    path: "", redirectTo: "/accueil", pathMatch: "full"
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnexionComponent,
    AccueilComponent,
    InscriptionComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [UtilisateurManagerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
