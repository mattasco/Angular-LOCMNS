import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-modifier-modele',
  templateUrl: './page-modifier-modele.component.html',
  styleUrls: ['./page-modifier-modele.component.scss']
})
export class PageModifierModeleComponent implements OnInit {
  public modele: any;
  public id: any;
  public listeMarques: any;
  public listeTypes: any;



  public formControl: FormGroup = this.formBuilder.group(
    {
      "nom": ["", [Validators.required]],
      "documentation": ["", [Validators.required]],
      "caution": ["", [Validators.required]],
      "marque": ["", [Validators.required]],
      "type": ["", [Validators.required]]
    }
  )



  constructor(private activatedRoute: ActivatedRoute, private client: HttpClient, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (parametres: any) => {
        this.id = parametres.id
        this.client.get("http://" + environment.adresseServeur + "/admin/modele/" + parametres.id)
          .subscribe(reponse => this.modele = reponse)
      }
    )
    this.client.get("http://" + environment.adresseServeur + "/admin/liste-type-materiel")
      .subscribe(reponse => this.listeTypes = reponse);

    this.client.get("http://" + environment.adresseServeur + "/admin/liste-marques")
      .subscribe(reponse => this.listeMarques = reponse);
  }

  onValid() {
    if (this.formControl.valid) {
      const modele = {
        typeMateriel: {nom: this.formControl.get('type')?.value}, 
        marque: {nom: this.formControl.get('marque')?.value}, 
        documentation: this.formControl.get('documentation')?.value, 
        caution: this.formControl.get('caution')?.value,
        nom: this.formControl.get('nom')?.value
    };

      console.log(modele)
      this.client.post("http://" + environment.adresseServeur + "/admin/modifiermodele/" + this.id, modele).subscribe(modele => {
        if (modele) {
          this.route.navigateByUrl("/gestion-modele")
          
        } else {
          alert("Un probl??me est survenu")
          this.route.navigateByUrl("/gestion-modele")
        }
      })
    }else{
      console.log("maaan")
    }
  }

}
