import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
  public listeTypes:any;

  constructor(private tokenIdentification: TokenIdentificationService, private router: Router,private client: HttpClient) { }

  ngOnInit(): void {
    this.client.get("http://" + environment.adresseServeur + "/admin/liste-type-materiel")
      .subscribe(reponse => this.listeTypes = reponse);
  }

  onChoice(id:number){
    this.router.navigateByUrl("modele/"+id)
  }

}
