import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RyanIO';

  public slides = [
    { src: "assets/home-card-1.svg" },
    { src: "assets/home-card-2.svg" },
    { src: "assets/home-card-3.svg" }
  ];

}
