import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DialogValideComponent } from '../dialog-valide/dialog-valide.component';

@Component({
  selector: 'app-page-parc-materiel',
  templateUrl: './page-parc-materiel.component.html',
  styleUrls: ['./page-parc-materiel.component.scss']
})
export class PageParcMaterielComponent implements OnInit {
  public listeMateriel: any;
  public value: string = '';

  constructor(private client: HttpClient, private route: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.rafraichirListeMateriel()
  }

  rafraichirListeMateriel() {
    this.client.get("http://" + environment.adresseServeur + "/admin/liste-materiel")
      .subscribe(reponse => this.listeMateriel = reponse)
  }

  supprimermateriel(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width="50%";
    let dialRef:MatDialogRef<DialogValideComponent> = this.dialog.open(DialogValideComponent,dialogConfig)
    dialRef.componentInstance.id=id;
    dialRef.afterClosed().subscribe(() => {
      this.rafraichirListeMateriel()
  });
  }

  ajoutermateriel() {
    this.route.navigateByUrl("ajouter-materiel")
  }

  modifiermateriel(id: number) {
    this.route.navigateByUrl("modifier-materiel/" + id)
  }

  onKey() {
    this.rafraichirRecherche(this.value)
  }

  rafraichirRecherche(value: string) {
    if (value != null && value != '') {
      this.client.get("http://" + environment.adresseServeur + "/admin/recherchemateriel/" + value)
        .subscribe(reponse => this.listeMateriel = reponse)
    } else {
      this.rafraichirListeMateriel()
    }
  }
}
