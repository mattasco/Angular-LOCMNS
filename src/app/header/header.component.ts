import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public admin: boolean=false;

  constructor(private tokenIdentification: TokenIdentificationService, private router:Router,private client:HttpClient) { }

  ngOnInit(): void {
    this.tokenIdentification.utilisateur.subscribe(utilisateur => {
      this.admin = utilisateur != null && utilisateur.droits.includes("ROLE_ADMIN")
    })
  }

  onAdmin(){
    this.router.navigateByUrl("admin")
  }

  onDeconnexion(){
      this.client.get("http://"+environment.adresseServeur+"deconnexion")
      this.tokenIdentification.deconnexion();
      this.router.navigateByUrl("connexion")
    }

    adminReservations(){
      this.router.navigateByUrl("admin-reservations")
    }
}