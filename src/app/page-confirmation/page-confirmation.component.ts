import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-confirmation',
  templateUrl: './page-confirmation.component.html',
  styleUrls: ['./page-confirmation.component.scss']
})
export class PageConfirmationComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  onMenu(){
    this.route.navigateByUrl("accueil")
  }

}
