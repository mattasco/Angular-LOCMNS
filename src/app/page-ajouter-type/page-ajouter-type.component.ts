import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-ajouter-type',
  templateUrl: './page-ajouter-type.component.html',
  styleUrls: ['./page-ajouter-type.component.scss']
})
export class PageAjouterTypeComponent implements OnInit {
  public formControl: FormGroup= this.formBuilder.group(
    {
      "nom": ["", [Validators.required]]
    }
  )

  constructor(private route:Router,private client:HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  onValid() {
    if (this.formControl.valid) {
      const type = this.formControl.value
      this.client.post("http://"+environment.adresseServeur+"/admin/typemateriel", type).subscribe(type => {
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
