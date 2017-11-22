import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminComponent } from './admin-gestion-produit/admin.component';
import {UtilisateurManagerServiceService} from './utilisateur-manager-service.service';
import {HttpModule} from '@angular/http';
import {ProduitManagerService} from './produit-manager.service';
import { AdminPagePrincipalComponent } from './admin-page-principal/admin-page-principal.component';


const routes: Routes = [
  {
    path: 'accueil', component: AccueilComponent
  },
  {
    path: 'catégorie', component: AccueilComponent
  },
  {
    path: 'à_propos', component: AccueilComponent
  },
  {
    path: 'mon_panier', component: AccueilComponent
  },
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'connexion', component: ConnexionComponent
  },
  {
    path: 'inscription', component: InscriptionComponent
  },
  {
    path: 'admin-gestion-produit', component: AdminComponent
  },
  {
    path: 'admin-page-principal', component: AdminPagePrincipalComponent
  },
  {
    path: '', redirectTo: '/accueil', pathMatch: 'full'
  }];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnexionComponent,
    AccueilComponent,
    InscriptionComponent,
    AdminComponent,
    AdminPagePrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UtilisateurManagerServiceService, ProduitManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
