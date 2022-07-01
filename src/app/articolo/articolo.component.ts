import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articolo } from '../_models/articolo';
import { ArticoloService } from '../_services/articolo.service';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.scss']
})
export class ArticoloComponent implements OnInit {

isLoadingData= true;
    articoli: any;

 

  constructor(
    private articoloService : ArticoloService,
    private ref : ChangeDetectorRef,
    private router : Router
  ) { }
   

  ngOnInit(): void {
    
    this.getAllArticoli()
  }


  getAllArticoli() {
    this.articoloService.getAllArticoli()
    .subscribe(articolo => {
       console.log(articolo)
      this.articoli = articolo;
      this.isLoadingData = false;
      this.ref.detectChanges();
    })
  }
  
  deleteArticolo(){
    this.articoloService.deleteArticolo(this.articoli.id)
    .subscribe(articolo => {
      this.isLoadingData = false;
      this.ref.detectChanges();
    })
  }
      


}
