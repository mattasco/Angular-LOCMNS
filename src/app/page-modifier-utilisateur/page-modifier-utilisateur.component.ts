import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-modifier-utilisateur',
  templateUrl: './page-modifier-utilisateur.component.html',
  styleUrls: ['./page-modifier-utilisateur.component.scss']
})
export class PageModifierUtilisateurComponent implements OnInit {
  public utilisateur:any;
  public id:any;

  public formControl: FormGroup= this.formBuilder.group(
    {
      "login": ["", [Validators.required]],
      "nom": ["", [Validators.required]],
      "prenom": ["", [Validators.required]],
      "telephone": ["", [Validators.required,Validators.pattern('[- +()0-9]+')]],
      "email": ["", [Validators.required,Validators.email]],
      "password": ["", [Validators.required]],
      "adresse": ["", [Validators.required]]
    }
  )



  constructor(private activatedRoute:ActivatedRoute,private client:HttpClient,private route:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (parametres:any) => {
        this.id=parametres.id
        this.client.get("http://"+environment.adresseServeur+"/admin/utilisateur/"+parametres.id)
        .subscribe(reponse => this.utilisateur = reponse)
      }
    )
    console.log(this.utilisateur)
  }

  onValid(){
    if (this.formControl.valid) {
      const utilisateur = this.formControl.value
      console.log(utilisateur)
      this.client.post("http://localhost:8080/admin/modifierutilisateur/"+this.id, utilisateur).subscribe(utilisateur => {
        if (utilisateur) {
          this.route.navigateByUrl("/admin-utilisateurs")
        } else {
          alert("Un problème est survenu")
          this.route.navigateByUrl("/admin-utilisateurs")
        }
      })
    }else{
      console.log("erreur")
    }
  }

}
