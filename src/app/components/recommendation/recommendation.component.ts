import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { DataService } from '../../services/data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'] // Correct the property name
})
export class RecommendationComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement!: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  userId: string = '';
  personalityData: any;
  movieRecommendations: any;
  genreRecommendations: any;
  topN: number = 10; // Default value for topN
  kValue: number = 50; // Default value for k
  num_genre: number = 10; // Default value for number of genre
  isLoading: boolean = true; // Loading state indicator
  isDtInitialized: boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      paging: true
    };

    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId') || '';
      if (this.userId) {
        this.fetchData();
      }
    });
  }

  ngAfterViewInit(): void {
    this.isDtInitialized = true;
    this.dtTrigger.next(null);
  }

  fetchData(): void {
    this.isLoading = true;
    this.dataService.getUserPersonalityData(this.userId).subscribe(data => {
      this.personalityData = data;
      this.fetchMovieRecommendations();
      this.fetchGenreRecommendations();
    });
  }

  fetchMovieRecommendations(): void {
    this.isLoading = true; // Start loading
    this.dataService.getMovieRecommendations(this.userId, this.topN, this.kValue).subscribe(data => {
      this.movieRecommendations = data;
      this.isLoading = false; // Stop loading once data is fetched
      this.rerenderTable();
    }, error => {
      console.error('Error fetching movie recommendations:', error);
      this.isLoading = false; // Also stop loading in case of error
    });
  }

  fetchGenreRecommendations(): void {
    this.isLoading = true; // Start loading
    this.dataService.getGenreRecommendations(this.userId, this.num_genre, this.kValue).subscribe(data => {
      this.genreRecommendations = data;
      this.isLoading = false; // Stop loading once data is fetched
    }, error => {
      console.error('Error fetching movie recommendations:', error);
      this.isLoading = false; // Also stop loading in case of error
    });
  }



  rerenderTable(): void {
    if (this.dtElement && this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next(null);
      });
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
