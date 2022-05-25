import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenIdentificationService } from '../token-identification.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  constructor(private tokenIdentification: TokenIdentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  onChoice(id:number){
    this.router.navigateByUrl("modele/"+id)
  }

}
