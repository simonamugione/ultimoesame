import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticoloComponent } from './articolo.component';
import { ModificaarticoloComponent } from './modificaarticolo/modificaarticolo.component';
import { NuovoarticoloComponent } from './nuovoarticolo/nuovoarticolo.component';





const routes: Routes = [
  {
    path:'',
    data: {
      title: 'Articolo'
    },
    children: [
      {
        path:'',
        component:ArticoloComponent,
        data: {
          title:'',
        }
      },
      {
        path:'nuovoarticolo',
        component: NuovoarticoloComponent,
        data: {
          title:'',
        }
      },
       {
         path: 'modificaarticolo/:id',
         component: ModificaarticoloComponent,
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
export class ArticoloRoutingModule { }
