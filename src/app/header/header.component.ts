import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public admin: boolean=false;

  constructor(private tokenIdentification: TokenIdentificationService, private router:Router) { }

  ngOnInit(): void {
    this.tokenIdentification.utilisateur.subscribe(utilisateur => {
      this.admin = utilisateur != null && utilisateur.droits.includes("ROLE_ADMIN")
    })
  }

}
