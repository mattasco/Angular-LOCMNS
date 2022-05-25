import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenIdentificationService {

  constructor() { }

  public utilisateur: BehaviorSubject<any> = new BehaviorSubject(null);

  public rafraichir() {

    if (localStorage.getItem("token") != null) {
      const token: any = localStorage.getItem("token");
      try {
        this.utilisateur.next(JSON.parse(atob(token.split(".")[1])));
      } catch {
        this.utilisateur.next(null)
      }
    } else {
      this.utilisateur.next(null)
    }
  }
}
