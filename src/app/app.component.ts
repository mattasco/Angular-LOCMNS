import { Component } from '@angular/core';
import { TokenIdentificationService } from './token-identification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private tokenIdentification: TokenIdentificationService) { }

  public login: string = "";

  ngOnInit() {

    this.tokenIdentification.utilisateur.subscribe(
      utilisateur => {
        if (utilisateur != null) {
          this.login = utilisateur.sub
        } else {
          this.login = "";
        }
      }
    );
    this.tokenIdentification.rafraichir();
  }
}
