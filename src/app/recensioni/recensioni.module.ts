import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { RecensioneRoutingModule } from './recensioni-routing.module';

import { RecensioneComponent } from './recensioni.component';
import { NuovaRecensioneComponent } from './nuovarecensione/nuovarecensione.component';
import { ModificaRecensioneComponent } from './modificarecensione/modificarecensione.component';




@NgModule({
  declarations:   [RecensioneComponent, NuovaRecensioneComponent, ModificaRecensioneComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecensioneRoutingModule,
    TableModule
  ],
  providers: [ ],
})
export class RecensioneModule { }
