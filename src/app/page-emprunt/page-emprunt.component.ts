import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';
import {formatDate} from '@angular/common';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-page-emprunt',
  templateUrl: './page-emprunt.component.html',
  styleUrls: ['./page-emprunt.component.scss']
})
export class PageEmpruntComponent implements OnInit {
  
  private idModele: number = 0;
  public materiel:any;

  public formControl: FormGroup = this.formbuilder.group(
    {
      "dateDebutPret": ["", [Validators.required]],
      "dateFinPret": ["", [Validators.required]],
      "utilisation": ["", Validators.required]
    }
  )

  constructor(private router: ActivatedRoute,private dateAdapter:DateAdapter<Date>, private client: HttpClient, private formbuilder: FormBuilder, private route: Router) {
    this.dateAdapter.setLocale('fr')
  }


  ngOnInit(): void {
    this.router.params.subscribe(
      (parametres: any) => {
        this.idModele = parametres.id
        this.client.get("http://"+environment.adresseServeur+"/materiel/"+this.idModele)
        .subscribe(reponse => this.materiel=reponse)
        console.log(this.materiel)
      }
    )
  }

  onValid() {
    if (this.formControl.valid) {
      const modeleId = this.idModele
      const emprunt = this.formControl.value
      this.client.post("http://"+environment.adresseServeur+"/emprunt/"+modeleId, emprunt).subscribe(emprunt => {
        if(emprunt) {
          this.route.navigateByUrl("/confirmation")
        } else {
          alert("Un problème est survenu")
          this.route.navigateByUrl("/accueil")
        }
      })
    }
  }

}
