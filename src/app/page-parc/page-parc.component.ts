import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-parc',
  templateUrl: './page-parc.component.html',
  styleUrls: ['./page-parc.component.scss']
})
export class PageParcComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onType(){
    this.router.navigateByUrl("gestion-type-materiel")
  }

  onMarques(){
    this.router.navigateByUrl("gestion-marque")
  }

  onModeles(){
    this.router.navigateByUrl("gestion-modele")
  }

}
