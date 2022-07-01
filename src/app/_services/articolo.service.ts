import { Router } from "@angular/router";
import { HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Articolo } from "../_models/articolo";

@Injectable({ providedIn: 'root' })
export class ArticoloService {

  


  constructor(
    private router: Router,
    private http: HttpClient
  ) {  }

  getAllArticoli() {
    return this.http.get<any>(`${environment.apiUrl}/articolo/getArticoli`)
  }
  getArticoliById(id:any) {
    return this.http.get<any>(`${environment.apiUrl}/articolo/findArticolo/${id}`)
  }
  

  createArticolo(articolo: Articolo) {
    return this.http.post(`${environment.apiUrl}/articolo/addArticolo`, articolo)
  }

  deleteArticolo(id:any) {
    return this.http.delete<any>(`${environment.apiUrl}/articolo/deleteArticolo/${id}`)
  }

  modificaArticolo(articolo:Articolo) {
    return this.http.put(`${environment.apiUrl}/articolo/modificaArticolo`, articolo)
  }

}
