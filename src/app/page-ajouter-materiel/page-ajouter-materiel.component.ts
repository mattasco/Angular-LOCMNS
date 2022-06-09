import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-ajouter-materiel',
  templateUrl: './page-ajouter-materiel.component.html',
  styleUrls: ['./page-ajouter-materiel.component.scss']
})
export class PageAjouterMaterielComponent implements OnInit {
    public listeTypes:any;

  public formControl: FormGroup = this.formBuilder.group(
    {
      "numSerie": ["", [Validators.required]],
      "type": ["", [Validators.required]]
    }
  )

  constructor(private client: HttpClient, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.client.get("http://" + environment.adresseServeur + "/admin/liste-type-materiel")
      .subscribe(reponse => this.listeTypes = reponse);
      
  }

  onValid() {
    if (this.formControl.valid) {
      console.log("ok")
      const materiel = {
        modele: { nom: this.formControl.get('type')?.value },
        numSerie: this.formControl.get('numSerie')?.value
      };
      this.client.post("http://" + environment.adresseServeur + "/admin/ajoutermateriel", materiel).subscribe(materiel => {
        if (materiel) {
          this.route.navigateByUrl("/gestion-materiel")
        } else {
          alert("Un problème est survenu")
          this.route.navigateByUrl("/gestion-materiel")
        }
      })
    }else{
      console.log("man")
    }
  }
}
