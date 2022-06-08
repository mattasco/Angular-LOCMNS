import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-modifier-type',
  templateUrl: './page-modifier-type.component.html',
  styleUrls: ['./page-modifier-type.component.scss']
})
export class PageModifierTypeComponent implements OnInit {

  public type:any;
  public id:any;

  public formControl: FormGroup = this.formBuilder.group(
    {
      "nom": ["", [Validators.required]]
    }
  )

  constructor(private activatedRoute:ActivatedRoute,private client:HttpClient,private route:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (parametres:any) => {
        this.id=parametres.id
        this.client.get("http://"+environment.adresseServeur+"/admin/type-materiel/"+parametres.id)
        .subscribe(reponse => this.type = reponse)
      }
    )
  }

  onValid(){
    if (this.formControl.valid) {
      const type = this.formControl.value
      this.client.post("http://" + environment.adresseServeur + "/admin/modifiertype/"+this.id, type).subscribe(type => {
        if (type) {
          this.route.navigateByUrl("/gestion-type-materiel")
        } else {
          alert("Un problème est survenu")
          this.route.navigateByUrl("/gestion-type-materiel")
        }
      })
    }
  }

}
