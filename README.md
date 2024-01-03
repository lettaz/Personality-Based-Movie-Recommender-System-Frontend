# PBMRSFE (Personality-Based Movie Recommender System Frontend)

This project is the frontend for the Personality-Based Movie Recommender System (PBMRS), developed with Angular. PBMRS is an application that offers movie recommendations based on the user's personality traits.

## Description

PBMRSFE consists of two main pages:

### Page 1: User ID Input or Personality Trait Form
- **Function**: Allows existing users to enter their user_id or new users to fill out a form for personality traits.
- **Components**: User ID input field, personality trait questionnaire.
- **Process**: Submitting the form generates a new user_id for new users and then generates recommendation. Existing users proceed to the recommendation page.

### Page 2: Recommendation Results
- **Function**: Displays recommended movies or genres.
- **Components**: List of movies/genres, user ID display (especially for new users), options to modify preferences (number of recommendations, k nearest neighbors, number of genre).
- **Process**: Users can interact with the list, change preferences, and request updated recommendations.

## Development Setup

### Prerequisites
- Node.js and npm (Node Package Manager)

### Local Deployment
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
5. The application will automatically reload if you change any of the source files.

### Backend API
The backend API for this project can be found on GitHub: [Personality-Based Movie Recommender System Backend](https://github.com/lettaz/Personality-Based-Movie-Recommender-System).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Further Help
For more help on the Angular CLI, use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Contributing
Contributions to PBMRSFE are welcome! Please ensure you follow the guidelines and standards set in the project documentation. If you have new features or bug fixes, feel free to fork the repository, make your changes, and submit a pull request.