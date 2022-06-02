import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-admin-reservations',
  templateUrl: './page-admin-reservations.component.html',
  styleUrls: ['./page-admin-reservations.component.scss']
})
export class PageAdminReservationsComponent implements OnInit {
  public listeEmprunt:any;
  public listeEmpruntValide:any;
  displayedColumns: string[] = ['dateDebutPret','dateFinPret'];

  constructor(private client: HttpClient,private dateAdapter:DateAdapter<Date>) {
    this.dateAdapter.setLocale('fr')
  }

  ngOnInit(): void {
    this.rafraichir()
  }

  valideEmprunt(id:number){
    this.client.post("http://"+environment.adresseServeur+"/admin/valideemprunt",id)
    .subscribe(reponse => this.rafraichir())
  }

  rafraichirListeEmpruntNonValide(){
    this.client.get("http://"+environment.adresseServeur+"/admin/empruntnonvalide")
    .subscribe(reponse => this.listeEmprunt = reponse)
  }

  supprimeEmprunt(id:number){
    this.client.delete("http://"+environment.adresseServeur+"/admin/supprimeEmprunt/"+id)
    .subscribe(reponse => this.rafraichir())
  }

  rafraichirListeEmpruntEnCours(){
    this.client.get("http://"+environment.adresseServeur+"/admin/empruntencours")
    .subscribe(reponse => this.listeEmpruntValide = reponse)
  }

  retourEmprunt(id:number){
    this.client.post("http://"+environment.adresseServeur+"/admin/retouremprunt",id)
    .subscribe(reponse => this.rafraichir())
  }

  rafraichir(){
    this.rafraichirListeEmpruntEnCours()
    this.rafraichirListeEmpruntNonValide()
  }
}
