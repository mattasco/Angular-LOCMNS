import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-modele',
  templateUrl: './page-modele.component.html',
  styleUrls: ['./page-modele.component.scss']
})
export class PageModeleComponent implements OnInit {
  public listeModeles:any;
  private id : number=0;
  constructor(private client:HttpClient,private router: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (parametres :any) => {
        this.id=parametres.id
        this.client.get("http://localhost:8050/liste-modele/"+this.id)
        .subscribe(reponse => this.listeModeles = reponse)
      }
    )
  }

  onChoice(id :number){
    this.route.navigateByUrl("/emprunt/"+id)
  }

}
