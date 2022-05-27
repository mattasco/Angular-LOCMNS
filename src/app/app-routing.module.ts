import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageEmpruntComponent } from './page-emprunt/page-emprunt.component';
import { PageModeleComponent } from './page-modele/page-modele.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {path:"connexion",component:PageConnexionComponent},
  {path:"accueil",component:PageAccueilComponent,canActivate:[UserGuard]},
  {path:"modele/:id",component:PageModeleComponent,canActivate:[UserGuard]},
  {path:"emprunt/:id",component:PageEmpruntComponent,canActivate:[UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
