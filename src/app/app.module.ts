import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { PageModeleComponent } from './page-modele/page-modele.component';
import {MatIconModule} from '@angular/material/icon';
import { TokenInterceptor } from './token.interceptor';
import { PageEmpruntComponent } from './page-emprunt/page-emprunt.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MatOption, MatPseudoCheckboxModule } from '@angular/material/core';
import { PageConfirmationComponent } from './page-confirmation/page-confirmation.component';
import {MatTableModule} from '@angular/material/table';
import { PageAdminReservationsComponent } from './page-admin-reservations/page-admin-reservations.component';
import { DatePipe } from '@angular/common';
import { PageMesReservationsComponent } from './page-mes-reservations/page-mes-reservations.component';
import { PageDysfonctionnementComponent } from './page-dysfonctionnement/page-dysfonctionnement.component';
import { PageUtilisateursComponent } from './page-utilisateurs/page-utilisateurs.component';
import { PageAjouterUtilisateurComponent } from './page-ajouter-utilisateur/page-ajouter-utilisateur.component';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PageModifierUtilisateurComponent } from './page-modifier-utilisateur/page-modifier-utilisateur.component';
import { PageParcComponent } from './page-parc/page-parc.component';
import { PageTypeMaterielComponent } from './page-type-materiel/page-type-materiel.component';
import { PageAjouterTypeComponent } from './page-ajouter-type/page-ajouter-type.component';
import { PageModifierTypeComponent } from './page-modifier-type/page-modifier-type.component';
import { PageMarquesComponent } from './page-marques/page-marques.component';
import { PageAjouterMarqueComponent } from './page-ajouter-marque/page-ajouter-marque.component';
import { PageModifierMarqueComponent } from './page-modifier-marque/page-modifier-marque.component';
import { PageParcModeleComponent } from './page-parc-modele/page-parc-modele.component';
import { PageModifierModeleComponent } from './page-modifier-modele/page-modifier-modele.component';
import { PageAjouterModeleComponent } from './page-ajouter-modele/page-ajouter-modele.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAccueilComponent,
    PageConnexionComponent,
    HeaderComponent,
    PageModeleComponent,
    PageEmpruntComponent,
    PageConfirmationComponent,
    PageAdminReservationsComponent,
    PageMesReservationsComponent,
    PageMesReservationsComponent,
    PageDysfonctionnementComponent,
    PageUtilisateursComponent,
    PageAjouterUtilisateurComponent,
    PageModifierUtilisateurComponent,
    PageParcComponent,
    PageTypeMaterielComponent,
    PageAjouterTypeComponent,
    PageModifierTypeComponent,
    PageMarquesComponent,
    PageAjouterMarqueComponent,
    PageModifierMarqueComponent,
    PageParcModeleComponent,
    PageModifierModeleComponent,
    PageAjouterModeleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [DatePipe,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
