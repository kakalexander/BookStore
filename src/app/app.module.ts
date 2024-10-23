import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FooterComponent } from './webSite/footer/footer.component';
import { HeaderComponent } from './webSite/header/header.component';
import { HomeComponent } from './webSite/home/home.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
