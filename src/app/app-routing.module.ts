import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreComponent } from './webSite/pages/store/store.component';
import { HomeComponent } from './webSite/pages/home/home.component';
import { ProductCarouselComponent } from './webSite/pages/home/product-carousel/product-carousel.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'store',
        component: StoreComponent,
      },
      {
        path: 'contact',
        component: StoreComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
