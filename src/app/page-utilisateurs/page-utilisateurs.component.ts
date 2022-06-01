import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-utilisateurs',
  templateUrl: './page-utilisateurs.component.html',
  styleUrls: ['./page-utilisateurs.component.scss']
})
export class PageUtilisateursComponent implements OnInit {
  public listeUtilisateurs: any;

  constructor(private client: HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.rafraichirListeUtilisateurs()
  }

  rafraichirListeUtilisateurs() {
    this.client.get("http://" + environment.adresseServeur + "/liste-utilisateur")
      .subscribe(reponse => this.listeUtilisateurs = reponse)
  }

  supprimerUtilisateur(id:number){
    this.client.delete("http://" + environment.adresseServeur + "/utilisateur/"+id)
    .subscribe(reponse => this.rafraichirListeUtilisateurs())
  }

  //modifierUtilisateur

  ajouterUtilisateur(){
    this.route.navigateByUrl("ajouter-utilisateur")
  }
}
