import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-parc-modele',
  templateUrl: './page-parc-modele.component.html',
  styleUrls: ['./page-parc-modele.component.scss']
})
export class PageParcModeleComponent implements OnInit {
  public listeModele: any;
  public value: string = '';

  constructor(private client: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.rafraichirListeModele()
  }

  rafraichirListeModele() {
    this.client.get("http://" + environment.adresseServeur + "/admin/liste-modele")
      .subscribe(reponse => this.listeModele = reponse)
  }

  supprimermodele(id: number) {
    this.client.delete("http://" + environment.adresseServeur + "/admin/deletemodele/" + id)
    .subscribe(modele=> {
      if(modele){
        this.rafraichirListeModele()
      }else{
        alert("Impossible car au moins un materiel est associé")
      }
    })
  }

  ajoutermodele() {
    this.route.navigateByUrl("ajouter-modele")
  }

  modifiermodele(id: number) {
    this.route.navigateByUrl("modifier-modele/" + id)
  }

  onKey() {
    this.rafraichirRecherche(this.value)
  }

  rafraichirRecherche(value: string) {
    if (value != null && value != '') {
      this.client.get("http://" + environment.adresseServeur + "/admin/recherchemodele/"+value)
        .subscribe(reponse => this.listeModele = reponse)
      
    } else {
      this.rafraichirListeModele()
    }
  }
}
