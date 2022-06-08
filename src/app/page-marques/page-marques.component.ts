import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-marques',
  templateUrl: './page-marques.component.html',
  styleUrls: ['./page-marques.component.scss']
})
export class PageMarquesComponent implements OnInit {

 public listeMarques: any;
  public value: string = '';

  constructor(private client: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.rafraichirListeMarques()
  }

  rafraichirListeMarques() {
    this.client.get("http://" + environment.adresseServeur + "/admin/liste-marques")
      .subscribe(reponse => this.listeMarques = reponse)
  }

  supprimerMarque(id: number) {
    this.client.delete("http://" + environment.adresseServeur + "/admin/marque/" + id)
    .subscribe(marque=> {
      if(marque){
        this.rafraichirListeMarques()
      }else{
        alert("Impossible car au moins un modèle est associé")
      }
    })
  }

  ajouterMarque() {
    this.route.navigateByUrl("ajouter-marque")
  }

  modifierMarque(id: number) {
    this.route.navigateByUrl("modifier-marque/" + id)
  }

  onKey() {
    this.rafraichirRecherche(this.value)
  }

  rafraichirRecherche(value: string) {
    if (value != null && value != '') {
      this.client.get("http://" + environment.adresseServeur + "/admin/recherchemarque/" + value)
        .subscribe(reponse => this.listeMarques = reponse)
    } else {
      this.rafraichirListeMarques()
    }
  }
}
