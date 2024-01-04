import { Component, OnDestroy, OnInit, ViewChild, ElementRef, Renderer2  } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userId: string = '';
  // Personality trait properties
  agreeableness = 0;
  conscientiousness = 0;
  emotional_stability = 0;
  extraversion = 0;
  openness = 0;

  showPersonalityForm = false;

  constructor(private router: Router, private dataService: DataService) { }

  togglePersonalityForm(): void {
    this.showPersonalityForm = !this.showPersonalityForm;
  }

  onSubmitPersonalityForm(): void {
    const personalityData = {
      agreeableness: this.agreeableness,
      conscientiousness: this.conscientiousness,
      emotional_stability: this.emotional_stability,
      extraversion: this.extraversion,
      openness: this.openness
    };

    this.dataService.createNewUser(personalityData).subscribe(response => {
      const newUserId = response.user_id;
      this.onGetRecommendation(newUserId);
    });
  }

  onGetRecommendation(userId: string): void {
    if (userId) {
      this.router.navigate(['/recommendations', userId]);
    } 
  }

}
