import { Component, OnDestroy, OnInit, ViewChild, ElementRef, Renderer2  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userId: string = '';

  constructor(private router: Router) { }

  onGetRecommendation(): void {
    if (this.userId) {
      this.router.navigate(['/recommendations', this.userId]); // Update as per your route
    }
  }

}
