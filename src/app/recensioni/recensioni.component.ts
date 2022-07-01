import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recensione } from '../_models/recensione';
import { RecensioneService } from '../_services/recensione.service';

@Component({
  selector: 'app-recensione',
  templateUrl: './recensione.component.html',
  styleUrls: ['./recensione.component.scss']
})
export class RecensioneComponent implements OnInit {

isLoadingData= true;
    recensioni: any;

 

  constructor(
    private recensioneService : RecensioneService,
    private ref : ChangeDetectorRef,
    private router : Router
  ) { }
   

  ngOnInit(): void {
    
    this.getAllRecensioni()
  }


  getAllRecensioni() {
    this.recensioneService.getAllRecensioni()
    .subscribe(recensione => {
       console.log(recensione)
      this.recensioni = recensione;
      this.isLoadingData = false;
      this.ref.detectChanges();
    })
  }
  
  deleteRecensione(){
    this.recensioneService.deleteRecensione(this.recensioni.id)
    .subscribe(recensione => {
      this.isLoadingData = false;
      this.ref.detectChanges();
    })
  }
      
 
}
