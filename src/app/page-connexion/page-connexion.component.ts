import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.scss']
})
export class PageConnexionComponent implements OnInit {

  public formControl: FormGroup= this.formBuilder.group(
    {
      "login": ["", [Validators.required]],
      "password": ["", [Validators.required]]
    })

  constructor(private client :HttpClient,private router:Router,private formBuilder:FormBuilder,private tokenIdentification:TokenIdentificationService) { }

  ngOnInit(): void {
  }

  onConnexion(): void {

    if (this.formControl.valid) {
      
      const utilisateur = this.formControl.value

      this.client
        .post("http://localhost:8050/connexion", utilisateur)
        .subscribe((resultat: any) => {
          if (resultat.erreur) {
            alert(resultat.erreur);
          } else {
            localStorage.setItem('token', resultat.token)
            this.tokenIdentification.rafraichir()
            this.router.navigateByUrl("accueil")
          }
        })
    }
  }
}
