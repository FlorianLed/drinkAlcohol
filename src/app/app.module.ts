import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminComponent } from './admin-gestion-produit/admin.component';
import {ProduitManagerService} from './produit-manager.service';
import { AdminGestionUtilisateurComponent } from './admin-gestion-utilisateur/admin-gestion-utilisateur.component';
import {UtilisateurManagerService} from './utilisateur-manager.service';
import { AdminPagePrincipalComponent } from './admin-page-principal/admin-page-principal.component';
import { PanierComponent } from './panier/panier.component';
import { FilterPrixPipe } from './filter-prix.pipe';
import {PanierService} from './panier.service';
import { FilterPipe } from './filter.pipe';
import {UtilisateurService} from './utilisateur.service';
import { UtilisateurPipe } from './utilisateur.pipe';
import {AgmCoreModule} from '@agm/core';



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
    path: 'admin-gestion-utilisateur', component: AdminGestionUtilisateurComponent
  },
  {
    path: 'panier', component: PanierComponent
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
    AdminGestionUtilisateurComponent,
    AdminPagePrincipalComponent,
    PanierComponent,
    FilterPrixPipe,
    FilterPipe,
    UtilisateurPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC4yFqM3P61cGLXIj6NQ12RnfTvgU6H7hk '
    })

  ],
  providers: [UtilisateurManagerService, ProduitManagerService, PanierService, UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
