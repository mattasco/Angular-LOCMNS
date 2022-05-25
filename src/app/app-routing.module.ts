import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageEmpruntComponent } from './page-emprunt/page-emprunt.component';
import { PageModeleComponent } from './page-modele/page-modele.component';

const routes: Routes = [
  {path:"connexion",component:PageConnexionComponent},
  {path:"accueil",component:PageAccueilComponent},
  {path:"modele/:id",component:PageModeleComponent},
  {path:"emprunt/:id",component:PageEmpruntComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
