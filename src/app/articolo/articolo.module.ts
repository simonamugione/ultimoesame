import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ArticoloComponent } from './articolo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { ArticoloRoutingModule } from './articolo-routing.module';
import { ArticoloComponent } from './articolo.component';
import { NuovoarticoloComponent } from './nuovoarticolo/nuovoarticolo.component';
import { ModificaarticoloComponent } from './modificaarticolo/modificaarticolo.component';



@NgModule({
  declarations:   [ArticoloComponent, NuovoarticoloComponent, ModificaarticoloComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArticoloRoutingModule,
    TableModule
  ],
  providers: [ ],
})
export class ArticoloModule { }
