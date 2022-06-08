import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-type-materiel',
  templateUrl: './page-type-materiel.component.html',
  styleUrls: ['./page-type-materiel.component.scss']
})
export class PageTypeMaterielComponent implements OnInit {
  public listeTypes:any;
  public value:string="";

  constructor(private client: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.rafraichirListeTypes()
  }

  rafraichirListeTypes() {
    this.client.get("http://" + environment.adresseServeur + "/admin/liste-type-materiel")
      .subscribe(reponse => this.listeTypes = reponse)
  }

  ajouterType(){
    this.router.navigateByUrl("ajouter-type")
  }

  supprimerType(id:number){
    this.client.delete("http://" + environment.adresseServeur + "/admin/type-materiel/" + id)
    .subscribe(type => {
      if(type){
        this.rafraichirListeTypes()
      }else{
        alert("Impossible car au moins un modèle est associé")
      }
    })
  }

  modifierType(id:number){
    this.router.navigateByUrl("/modifier-type/" + id)
  }

}