import { Router } from "@angular/router";
import { HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Recensione } from "../_models/recensione";

@Injectable({ providedIn: 'root' })
export class RecensioneService {




  constructor(
    private router: Router,
    private http: HttpClient
  ) {  }

  getAllRecensioni() {
    return this.http.get<any>(`${environment.apiUrl}/recensione/getRecensioni`)
  }
  getRecensioniById(id:any) {
    return this.http.get<any>(`${environment.apiUrl}/recensione/findRecensioni/${id}`)
  }
  

  createRecensione(recensione: Recensione) {
    return this.http.post(`${environment.apiUrl}/recensione/addRecensione`, recensione)
  }

  deleteRecensione(id:any) {
    return this.http.delete<any>(`${environment.apiUrl}/recensione/deleteRecensione/${id}`)
  }

  modificaRecensione(recensione:Recensione) {
    return this.http.put(`${environment.apiUrl}/recensione/modificaRecensione`, recensione)
  }

}
