import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-ajouter-marque',
  templateUrl: './page-ajouter-marque.component.html',
  styleUrls: ['./page-ajouter-marque.component.scss']
})
export class PageAjouterMarqueComponent implements OnInit {
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
      const marque = this.formControl.value
      this.client.post("http://"+environment.adresseServeur+"/admin/marque", marque).subscribe(marque => {
        if (marque) {
          this.route.navigateByUrl("/gestion-marque")
        } else {
          alert("Un problème est survenu")
          this.route.navigateByUrl("/gestion-marque")
        }
      })
    }
  }

}
