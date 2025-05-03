import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit , AfterViewInit {
  carouselSlides = [
    {
      image: 'http://gajaashwa.com/Images/HomePage/fbdc8e206ce4c831e322b8cbcd160b77.jpg',
      caption: 'Professional Web Development',
      buttonText: 'View Details',
      buttonLink: '/projects/web-development'
    },
    {
      image: 'http://gajaashwa.com/Images/HomePage/truck%20driving%20school%20website.jpg',
      caption: 'Truck Driving School Website',
      buttonText: 'Learn More',
      buttonLink: '/projects/truck-school'
    },
    {
      image: 'http://gajaashwa.com/Images/HomePage/resturan.jpg',
      caption: 'Restaurant Showcase',
      buttonText: 'See Project',
      buttonLink: '/projects/restaurant'
    },
    {
      image: 'http://gajaashwa.com/Images/HomePage/truch%20teacher.jpg',
      caption: 'Truck Teaching Platform',
      buttonText: 'Explore',
      buttonLink: '/projects/truck-teacher'
    }
  ];

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,  
    touchDrag: true, 
    pullDrag: false,
    dots: true,
    navSpeed: 900,
    navText: [
      `<span class="material-icons">arrow_back_ios</span>`,
      `<span class="material-icons">arrow_forward_ios</span>`,
    ],
    nav: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 1 },
      992: { items: 1 },
      1200: { items: 1 }
    },
    autoplay: true,
    autoplayTimeout: 5000,  // Slightly longer timeout for better viewing
    autoplayHoverPause: true,
    autoHeight: false,  // Fixed height for better transitions
    lazyLoad: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    smartSpeed: 800,  // Balanced transition speed
    items: 1,
    fluidSpeed: true,  // Add fluid speed for smoother transitions
    stagePadding: 0,
    margin: 0,
    rewind: false,  // Turn off rewind since we're using loop
  };

  testimonialData = [
    {
      image: 'http://gajaashwa.com/Images/HomePage/2a6df69bd686fffea2f99b3c0fac13e8.jpg',
      title: 'Testimonials',
      description: 'Our customers are satisfied with our web development solutions and food delivery website software. Check out our testimonials!',
      points: [
        'Customer satisfaction',
        'Web development and food delivery software solutions are well-received',
        'Testimonials available for verification',
      ]
    },
    // Duplicate or add more custom entries as needed
    {
      image: 'http://gajaashwa.com/Images/HomePage/670c66936da64918e9044bf99b6fed9f.jpg',
      title: 'Client Feedback',
      description: 'We provide excellent results for our clients.',
      points: [
        'Excellent results',
        'Efficient delivery',
        'Client-centric process',
      ]
    },
    {
      image: 'http://gajaashwa.com/Images/HomePage/fbdc8e206ce4c831e322b8cbcd160b77.jpg',
      title: 'Client Feedback',
      description: 'We provide excellent results for our clients.',
      points: [
        'Excellent results',
        'Efficient delivery',
        'Client-centric process',
      ]
    },
    {
      image: 'http://gajaashwa.com/Images/HomePage/a41d474e-f175-4d0e-a426-1d6cb0948ad6.jpg',
      title: 'Client Feedback',
      description: 'We provide excellent results for our clients.',
      points: [
        'Excellent results',
        'Efficient delivery',
        'Client-centric process',
      ]
    }
    // Add 5 more if you want a total of 7
  ];
  constructor() {}

  ngOnInit() {
    this.preloadImages();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.applyCarouselFixes();
    }, 500);
  }

  preloadImages() {
    this.carouselSlides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }

  applyCarouselFixes() {
    const carouselElement = document.querySelector('.owl-carousel');
    if (carouselElement) {
      carouselElement.classList.add('no-flash-carousel');
      carouselElement.addEventListener('translated.owl.carousel', () => {
      });
    }
  }

  handleImageError(event: any) {
    event.target.src = 'assets/images/placeholder.jpg';
  }
}


