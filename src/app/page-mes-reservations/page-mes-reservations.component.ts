import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-mes-reservations',
  templateUrl: './page-mes-reservations.component.html',
  styleUrls: ['./page-mes-reservations.component.scss']
})
export class PageMesReservationsComponent implements OnInit {

  public listeReservations:any;

  constructor(private client: HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.rafraichirListeEmpruntEnCours()
  }

  rafraichirListeEmpruntEnCours(){
    this.client.get("http://"+environment.adresseServeur+"/emprunt")
    .subscribe(reponse => this.listeReservations = reponse)
  }

  dysfonctionnement(id:number){
    this.route.navigateByUrl("/dysfonctionnement/"+id)
  }

}
