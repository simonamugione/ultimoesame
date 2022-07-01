import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RecensioneService } from 'src/app/_services/recensione.service';
import { Recensione} from 'src/app/_models/recensione';

@Component({
  selector: 'app-modificarecensione',
  templateUrl: './modificarecensione.component.html',
  styleUrls: ['./modificarecensione.component.scss']
})
export class ModificaRecensioneComponent implements OnInit {
  recensione!: Recensione;
  form !: FormGroup;
  loading = false;
  submitted = false;
  isLoadingData = true;
  id: any | null | undefined;  



  constructor(
    //private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private articoloService: RecensioneService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.getRecensioneById(this.id);

    this.form = this.formBuilder.group({
      id: ['0'],
      testo: [''],
      articolo: [''],
      
   
    })


  }
  getRecensioneById(id:any){
    this.articoloService.getRecensioniById(id)
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

    this.articoloService.createRecensione(this.form.value)
    .subscribe() 
        
       
          
          this.router.navigate(['/recensione'], { relativeTo: this.route });
      

        
        
          
    
  }
  goBack(){
    this.router.navigate(['/recensione'])
  }
}