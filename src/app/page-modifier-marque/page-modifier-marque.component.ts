import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-modifier-marque',
  templateUrl: './page-modifier-marque.component.html',
  styleUrls: ['./page-modifier-marque.component.scss']
})
export class PageModifierMarqueComponent implements OnInit {

  public marque:any;
  public id:any;

  public formControl: FormGroup= this.formBuilder.group(
    {
      "nom": ["", [Validators.required]]
    }
  )

  constructor(private activatedRoute:ActivatedRoute,private client:HttpClient,private route:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (parametres:any) => {
        this.id=parametres.id
        this.client.get("http://"+environment.adresseServeur+"/admin/marque/"+parametres.id)
        .subscribe(reponse => this.marque = reponse)
      }
    )
  }

  onValid(){
    if (this.formControl.valid) {
      const marque = this.formControl.value
      this.client.post("http://" + environment.adresseServeur + "/admin/modifiermarque/"+this.id, marque).subscribe(type => {
        if (type) {
          this.route.navigateByUrl("/gestion-marque")
        } else {
          alert("Un problème est survenu")
          this.route.navigateByUrl("/gestion-marque")
        }
      })
    }
  }

}
