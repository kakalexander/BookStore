import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FooterComponent } from './webSite/footer/footer.component';
import { HeaderComponent } from './webSite/header/header.component';
import { HomeComponent } from './webSite/pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductCarouselComponent } from './webSite/pages/home/product-carousel/product-carousel.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductCarouselComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
