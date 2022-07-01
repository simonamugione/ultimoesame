import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RecensioneService } from 'src/app/_services/recensione.service';
import { Recensione } from 'src/app/_models/recensione';

@Component({
  selector: 'app-nuovarecensione',
  templateUrl: './nuovarecensione.component.html',
  styleUrls: ['./nuovarecensione.component.scss']
})
export class NuovaRecensioneComponent implements OnInit {
  recensione: Recensione | undefined;
  form!: FormGroup; 
  loading = false;
  submitted = false;
  isLoadingData = true;
    articoli: any;

  idArticoloRiferimento: any;
    articoloService: any;


    


  constructor(
    //private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recensioneService: RecensioneService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

   


    this.form = this.formBuilder.group({
      id: ['0'],
      testo: [''],
      articolo: [''],
     

      articoloRiferimento: ([''][this.articoli]),
      
    })


  }

  

//   getAllArticoli() {
//     this.articoloService.getAllArticoli()
//       .subscribe(
//         data => {
//           this.articoli = data
//         })
//   }

  




  onSubmit() {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.recensioneService.createRecensione(this.form.value)
    .subscribe() 
        
       
          
          this.router.navigate(['/recensione'], { relativeTo: this.route });
      

        
        
          
    
  }
  goBack(){
    this.router.navigate(['/recensione'])
  }
}