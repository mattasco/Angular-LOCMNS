import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-ajouter-utilisateur',
  templateUrl: './page-ajouter-utilisateur.component.html',
  styleUrls: ['./page-ajouter-utilisateur.component.scss']
})
export class PageAjouterUtilisateurComponent implements OnInit {

  public isChecked:boolean=false;

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

  constructor(private route:Router,private client:HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  OnChange($event:any){
    this.isChecked=$event.checked
}


  onValid() {
    if (this.formControl.valid) {
      const utilisateur = this.formControl.value
      utilisateur.admin=this.isChecked
      this.client.post("http://localhost:8080/admin/utilisateur", utilisateur).subscribe(utilisateur => {
        if (utilisateur) {
          this.route.navigateByUrl("/admin-utilisateurs")
        } else {
          alert("Un problème est survenu")
          this.route.navigateByUrl("/admin-utilisateurs")
        }
      })
    }
  }
}
