import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleBlockComponent } from './title-block/title-block.component';
import { GraphicComponent } from './graphic/graphic.component';
import { SubtitleBlockComponent } from './subtitle-block/subtitle-block.component';
import { CanvasBackgroundComponent } from './canvas-background/canvas-background.component';
import { RowItemComponent } from './row-item/row-item.component';
import { MessageBlockComponent } from './message-block/message-block.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleBlockComponent,
    GraphicComponent,
    SubtitleBlockComponent,
    CanvasBackgroundComponent,
    RowItemComponent,
    MessageBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
