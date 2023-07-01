import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'card/:id', component: DetailComponent}
  //importante /:id para recibir los id de las cartas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
