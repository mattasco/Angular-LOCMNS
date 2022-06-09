import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageAdminReservationsComponent } from './page-admin-reservations/page-admin-reservations.component';
import { PageAjouterMarqueComponent } from './page-ajouter-marque/page-ajouter-marque.component';
import { PageAjouterMaterielComponent } from './page-ajouter-materiel/page-ajouter-materiel.component';
import { PageAjouterModeleComponent } from './page-ajouter-modele/page-ajouter-modele.component';
import { PageAjouterTypeComponent } from './page-ajouter-type/page-ajouter-type.component';
import { PageAjouterUtilisateurComponent } from './page-ajouter-utilisateur/page-ajouter-utilisateur.component';
import { PageConfirmationComponent } from './page-confirmation/page-confirmation.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageDysfonctionnementComponent } from './page-dysfonctionnement/page-dysfonctionnement.component';
import { PageEmpruntComponent } from './page-emprunt/page-emprunt.component';
import { PageMarquesComponent } from './page-marques/page-marques.component';
import { PageMesReservationsComponent } from './page-mes-reservations/page-mes-reservations.component';
import { PageModeleComponent } from './page-modele/page-modele.component';
import { PageModifierMarqueComponent } from './page-modifier-marque/page-modifier-marque.component';
import { PageModifierMaterielComponent } from './page-modifier-materiel/page-modifier-materiel.component';
import { PageModifierModeleComponent } from './page-modifier-modele/page-modifier-modele.component';
import { PageModifierTypeComponent } from './page-modifier-type/page-modifier-type.component';
import { PageModifierUtilisateurComponent } from './page-modifier-utilisateur/page-modifier-utilisateur.component';
import { PageParcMaterielComponent } from './page-parc-materiel/page-parc-materiel.component';
import { PageParcModeleComponent } from './page-parc-modele/page-parc-modele.component';
import { PageParcComponent } from './page-parc/page-parc.component';
import { PageTypeMaterielComponent } from './page-type-materiel/page-type-materiel.component';
import { PageUtilisateursComponent } from './page-utilisateurs/page-utilisateurs.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {path:"connexion",component:PageConnexionComponent},
  {path:"",component:PageConnexionComponent},
  {path:"accueil",component:PageAccueilComponent,canActivate:[UserGuard]},
  {path:"modele/:id",component:PageModeleComponent,canActivate:[UserGuard]},
  {path:"emprunt/:id",component:PageEmpruntComponent,canActivate:[UserGuard]},
  {path:"confirmation",component:PageConfirmationComponent,canActivate:[UserGuard]},
  {path:"admin-reservations",component:PageAdminReservationsComponent,canActivate:[AdminGuard]},
  {path:"mes-reservations",component:PageMesReservationsComponent,canActivate:[UserGuard]},
  {path:"dysfonctionnement/:id",component:PageDysfonctionnementComponent,canActivate:[UserGuard]},
  {path:"admin-utilisateurs",component:PageUtilisateursComponent,canActivate:[AdminGuard]},
  {path:"ajouter-utilisateur",component:PageAjouterUtilisateurComponent,canActivate:[AdminGuard]},
  {path:"modifier-utilisateur/:id",component:PageModifierUtilisateurComponent,canActivate:[AdminGuard]},
  {path:"gestion-parc",component:PageParcComponent,canActivate:[AdminGuard]},
  {path:"gestion-type-materiel",component:PageTypeMaterielComponent,canActivate:[AdminGuard]},
  {path:"ajouter-type",component:PageAjouterTypeComponent,canActivate:[AdminGuard]},
  {path:"modifier-type/:id",component:PageModifierTypeComponent,canActivate:[AdminGuard]},
  {path:"gestion-marque",component:PageMarquesComponent,canActivate:[AdminGuard]},
  {path:"ajouter-marque",component:PageAjouterMarqueComponent,canActivate:[AdminGuard]},
  {path:"modifier-marque/:id",component:PageModifierMarqueComponent,canActivate:[AdminGuard]},
  {path:"gestion-modele",component:PageParcModeleComponent,canActivate:[AdminGuard]},
  {path:"modifier-modele/:id",component:PageModifierModeleComponent,canActivate:[AdminGuard]},
  {path:"ajouter-modele",component:PageAjouterModeleComponent,canActivate:[AdminGuard]},
  {path:"gestion-materiel",component:PageParcMaterielComponent,canActivate:[AdminGuard]},
  {path:"ajouter-materiel",component:PageAjouterMaterielComponent,canActivate:[AdminGuard]},
  {path:"modifier-materiel/:id",component:PageModifierMaterielComponent,canActivate:[AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
