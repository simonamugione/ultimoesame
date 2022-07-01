import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

{
  path: '',
  component: NavbarComponent,
  children: [
    {
      path: '',
      loadChildren: () =>
        import('./home/home.module').then((m) => m.HomeModule)
    },
    {
      path: 'articolo',
      loadChildren: () =>
        import('./articolo/articolo.module').then((m) => m.ArticoloModule)
    },

    {
      path: 'recensione',
      loadChildren: () =>
        import('./recensioni/recensioni.module').then((m) => m.RecensioneModule)
    },
  ]
},


    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
