import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleBlockComponent } from './title-block/title-block.component';
import { GraphicComponent } from './graphic/graphic.component';
import { SubtitleBlockComponent } from './subtitle-block/subtitle-block.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleBlockComponent,
    GraphicComponent,
    SubtitleBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
