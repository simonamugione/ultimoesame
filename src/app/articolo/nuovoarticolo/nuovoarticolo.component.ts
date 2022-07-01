import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticoloService } from 'src/app/_services/articolo.service';
import { Articolo } from 'src/app/_models/articolo';

@Component({
  selector: 'app-nuovoarticolo',
  templateUrl: './nuovoarticolo.component.html',
  styleUrls: ['./nuovoarticolo.component.scss']
})
export class NuovoarticoloComponent implements OnInit {
  articoli: Articolo | undefined;
  form!: FormGroup; 
  loading = false;
  submitted = false;
  isLoadingData = true;
  recensione: any = [];



  constructor(
    //private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private articoloService: ArticoloService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

    //this.getAllDocenti();


    this.form = this.formBuilder.group({
      id: ['0'],
      nomeArticolo: [''],
      prezzo: [''],
      recensione: [''],
  
      
    })


  }

  

//   getAllDocenti() {
//     this.docenteService.getAllDocenti()
//       .subscribe(
//         data => {
//           this.docente = data
//         })
//   }

  




  onSubmit() {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.articoloService.createArticolo(this.form.value)
    .subscribe() 
        
       
          
          this.router.navigate(['/articolo'], { relativeTo: this.route });
      

        
        
          
    
  }
  goBack(){
    this.router.navigate(['/articolo'])
  }
}