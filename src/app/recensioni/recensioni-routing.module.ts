import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





import { NuovaRecensioneComponent } from './nuovarecensione/nuovarecensione.component';
import { ModificaRecensioneComponent } from './modificarecensione/modificarecensione.component';
import { RecensioneComponent } from './recensioni.component';

const routes: Routes = [
  {
    path:'',
    data: {
      title: 'recensioni'
    },
    children: [
      {
        path:'',
        component:RecensioneComponent,
        data: {
          title:'',
        }
      },
      {
        path:'nuovarecensione',
        component: NuovaRecensioneComponent,
        data: {
          title:'',
        }
      },
      {
        path: 'modificarecensione/:id',
        component: ModificaRecensioneComponent,
        data: {
          title: '',
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecensioneRoutingModule { }
