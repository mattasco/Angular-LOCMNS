import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-emprunt',
  templateUrl: './page-emprunt.component.html',
  styleUrls: ['./page-emprunt.component.scss']
})
export class PageEmpruntComponent implements OnInit {
  private idModele: number = 0;


  public formControl: FormGroup = this.formbuilder.group(
    {
      "dateDebutPret": ["", [Validators.required]],
      "dateFinPret": ["", [Validators.required]],
      "utilisation": ["", Validators.required]
    }
  )

  constructor(private router: ActivatedRoute, private client: HttpClient, private formbuilder: FormBuilder, private route: Router, private tokenIdentification: TokenIdentificationService) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (parametres: any) => {
        this.idModele = parametres.id
      }
    )
  }

  onValid() {
    if (this.formControl.valid) {
      const modeleId = this.idModele
      const emprunt = this.formControl.value
      this.client.post("http://localhost:8080/emprunt/" + modeleId, emprunt).subscribe(emprunt => {
        if (emprunt) {
          this.route.navigateByUrl("/accueil")
        } else {
          alert("problemo")
        }
      })
    }
  }

}
