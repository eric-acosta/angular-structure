import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import { Pagina2Component } from './otherPages/pages/pagina2/pagina2.component';

const routes: Routes = [
  {
    path: 'saludo', component:SaludoComponent , children:[
      { path: 'pagina2', component: Pagina2Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
