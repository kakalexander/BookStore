import { Component, AfterViewInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct';
import Swiper from 'swiper';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent implements AfterViewInit {
  books: IProduct[] = [
    { name: 'Acotar', description: 'Descrição do Produto 1', price: 100, image: './assets/img/Product photo (1).png' },
    { name: 'Diario de um vampiro', description: 'Descrição do Produto 2', price: 200, image: './assets/img/Product photo (2).png' },
    { name: 'Diario de um banana', description: 'Descrição do Produto 3', price: 300, image: './assets/img/Product photo.png' },
    { name: 'Novo Livro', description: 'Descrição do Produto 4', price: 400, image: './assets/img/Product photo.png' },
  ];

  buy(product: IProduct): void {
    console.log(`Comprando: ${product.name}`);
  }

  favorite(product: IProduct): void {
    console.log(`Favoritando: ${product.name}`);
  }

  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 5,
        }
      }
    });
  }
}
