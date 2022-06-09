import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dialog-valide',
  templateUrl: './dialog-valide.component.html',
  styleUrls: ['./dialog-valide.component.scss']
})
export class DialogValideComponent implements OnInit {
  public id:any;
  constructor(private client: HttpClient, private dialRef: MatDialogRef<DialogValideComponent>) {   }

  ngOnInit(): void {

  }

  close(){
    console.log(this.id)
    this.dialRef.close()
  }

  supprimermateriel(){
    this.client.delete("http://" + environment.adresseServeur + "/admin/deletemateriel/" + this.id)
      .subscribe(materiel=> {
        if(materiel){
          this.close()
        }else{
          alert("Une erreur est survenue")
        }
      })
  }

}
