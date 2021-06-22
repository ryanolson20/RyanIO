import { Component, Input} from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";
import {
  fadeIn,
  fadeOut,
  scaleIn,
  scaleOut,
  tScaleIn,
  tScaleOut
} from "./carousel.animations";
import {SheetsService} from '../sheets.service';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [SheetsService],
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, {params: { time: '1300ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1300ms' }})]),
    ]),
    trigger("slideAnimation", [
      /* scale */
      transition("void => *", [useAnimation(scaleIn, {params: { time: '500ms' }} )]),
      transition("* => void", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
    ]),
    trigger("titleAnimation", [
      /* scale */
      transition("void => *", [useAnimation(tScaleIn, {params: { time: '500ms' }} )]),
      transition("* => void", [useAnimation(tScaleOut, {params: { time: '500ms' }})]),
    ])
  ]
})
export class CarouselComponent{

  @Input() slides;

  currentSlide = 0;

  currentWord = "null";

  sheetArray = [];

  titles = ["July 28th", "July 3rd", "June 22nd"];

  currentTitle = this.titles[0];

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    this.currentTitle = this.titles[this.currentSlide];
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    this.currentTitle = this.titles[this.currentSlide];
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}