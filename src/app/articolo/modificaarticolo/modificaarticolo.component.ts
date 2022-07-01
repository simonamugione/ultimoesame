import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticoloService } from 'src/app/_services/articolo.service';
import { Articolo } from 'src/app/_models/articolo';

@Component({
  selector: 'app-modificaarticolo',
  templateUrl: './modificaarticolo.component.html',
  styleUrls: ['./modificaarticolo.component.scss']
})
export class ModificaarticoloComponent implements OnInit {
  articoli!: Articolo;
  form !: FormGroup;
  loading = false;
  submitted = false;
  isLoadingData = true;
  id: any | null | undefined;  
  recensioni: any = [];



  constructor(
    //private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private articoloService: ArticoloService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.getArticoliById(this.id);

    this.form = this.formBuilder.group({
      id: ['0'],
      nomeArticolo: [''],
      prezzo: [''],
      recensioni: [''],
   
    })


  }
  getArticoliById(id:any){
    this.articoloService.getArticoliById(id)
    .subscribe(
      data => {
        this.form.patchValue(data)
  
        this.ref.detectChanges();
        this.isLoadingData = false;
      }
    )
  }
  


  




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