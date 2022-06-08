import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-dysfonctionnement',
  templateUrl: './page-dysfonctionnement.component.html',
  styleUrls: ['./page-dysfonctionnement.component.scss']
})
export class PageDysfonctionnementComponent implements OnInit {
  public idEmprunt: number = 0;
  public emprunt: any;
  public formControl: FormGroup = this.formBuilder.group(
    {
      "dysfonctionnement": ["", [Validators.required]]
    }
  )

  constructor(private activatedRoute: ActivatedRoute, private client: HttpClient, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (parametres: any) => {
        this.idEmprunt = parametres.id
        this.client.get("http://" + environment.adresseServeur + "/empruntByIdEmprunt/" + this.idEmprunt)
          .subscribe(reponse => this.emprunt = reponse)
        console.log(this.emprunt)
      }
    )
  }

  signaler() {
    if (this.formControl.valid) {
      const empruntId = this.idEmprunt
      const emprunt = this.formControl.value
      this.client.post("http://"+environment.adresseServeur+"/dysfonctionnement/" + empruntId, emprunt).subscribe(emprunt => {
        if (emprunt) {
          this.router.navigateByUrl("/confirmation")
        } else {
          alert("Un problème est survenu")
          this.router.navigateByUrl("/accueil")
        }
      })
    }
  }
}