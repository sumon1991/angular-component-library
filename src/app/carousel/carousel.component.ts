import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { owlDefault, owlWithDots } from '../app-constant';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  isDragging = true;

  owlDefault: OwlOptions = owlDefault;
  owlWithDots: OwlOptions = owlWithDots;

  slidesStore: any = [
    {
      id: 1,
      title: 'carnivore-style-VIoydd_-vYA-unsplash',
      alt: 'carnivore-style-VIoydd_-vYA-unsplash',
      src: 'assets/images/carnivore-style-VIoydd_-vYA-unsplash.jpg'
    },
    {
      id: 2,
      title: 'keagan-henman-jr6P9SoJMNs-unsplash',
      alt: 'keagan-henman-jr6P9SoJMNs-unsplash',
      src: 'assets/images/keagan-henman-jr6P9SoJMNs-unsplash.jpg'
    },
    {
      id: 3,
      title: 'konstantinos-papadopoulos-bTZRESZHNGU-unsplash',
      alt: 'konstantinos-papadopoulos-bTZRESZHNGU-unsplash',
      src: 'assets/images/konstantinos-papadopoulos-bTZRESZHNGU-unsplash.jpg'
    },
    {
      id: 1,
      title: 'carnivore-style-VIoydd_-vYA-unsplash',
      alt: 'carnivore-style-VIoydd_-vYA-unsplash',
      src: 'assets/images/carnivore-style-VIoydd_-vYA-unsplash.jpg'
    },
    {
      id: 2,
      title: 'keagan-henman-jr6P9SoJMNs-unsplash',
      alt: 'keagan-henman-jr6P9SoJMNs-unsplash',
      src: 'assets/images/keagan-henman-jr6P9SoJMNs-unsplash.jpg'
    },
    {
      id: 3,
      title: 'konstantinos-papadopoulos-bTZRESZHNGU-unsplash',
      alt: 'konstantinos-papadopoulos-bTZRESZHNGU-unsplash',
      src: 'assets/images/konstantinos-papadopoulos-bTZRESZHNGU-unsplash.jpg'
    },
  ]
}
