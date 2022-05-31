import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageAdminReservationsComponent } from './page-admin-reservations/page-admin-reservations.component';
import { PageConfirmationComponent } from './page-confirmation/page-confirmation.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageEmpruntComponent } from './page-emprunt/page-emprunt.component';
import { PageModeleComponent } from './page-modele/page-modele.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {path:"connexion",component:PageConnexionComponent},
  {path:"accueil",component:PageAccueilComponent,canActivate:[UserGuard]},
  {path:"modele/:id",component:PageModeleComponent,canActivate:[UserGuard]},
  {path:"emprunt/:id",component:PageEmpruntComponent,canActivate:[UserGuard]},
  {path:"confirmation",component:PageConfirmationComponent,canActivate:[UserGuard]},
  {path:"admin-reservations",component:PageAdminReservationsComponent,canActivate:[AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
