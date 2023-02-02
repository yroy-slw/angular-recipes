import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeersComponent } from './beers/beers.component';

const routes: Routes = [
  {
    path: 'beers',
    component: BeersComponent,
  },
  {
    path: 'beer/:id',
    component: BeerDetailComponent,
  },
  {
    path: '',
    redirectTo: '/beers',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
