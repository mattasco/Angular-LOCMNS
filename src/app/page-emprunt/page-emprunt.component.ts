import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-emprunt',
  templateUrl: './page-emprunt.component.html',
  styleUrls: ['./page-emprunt.component.scss']
})
export class PageEmpruntComponent implements OnInit {
  private idModele: number=0;


  public formControl : FormGroup = this.formbuilder.group(
    {
      "dateDebutPret":["",[Validators.required]],
      "dateFinPret":["",[Validators.required]],
      "utilisation":["",Validators.required]
    }
  )

  constructor(private router: ActivatedRoute,private client: HttpClient,private formbuilder:FormBuilder,private route:Router,private tokenIdentification:TokenIdentificationService) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (parametres:any)=>{
        this.idModele=parametres.id
      }
    )
  }

  onValid(){
    if(this.formControl.valid){
      const emprunt =  this.formControl.value
      emprunt.modeleid=this.idModele
      this.tokenIdentification.utilisateur.subscribe(utilisateur=>{
        emprunt.emprunteur_id=utilisateur.id
      })

      this.client.post("http://localhost:8050/emprunt",emprunt)
    }else{
      alert("problemo amigo")
    }
  }

}
