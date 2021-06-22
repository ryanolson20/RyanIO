import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ElementContainerComponent } from './element-container/element-container.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {SheetsService} from './sheets.service';

@NgModule({
  declarations: [
    AppComponent,
    ElementContainerComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [SheetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
