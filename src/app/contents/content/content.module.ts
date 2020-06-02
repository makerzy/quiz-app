import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ContentPageRoutingModule } from "./content-routing.module";

import { ContentPage } from "./content.page";
import { ImageComponent } from "../image/image.component";
import { VideoComponent } from "../video/video.component";
import { YoutubeComponent } from "../youtube/youtube.component";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    ContentPageRoutingModule,
  ],
  declarations: [ContentPage, ImageComponent, VideoComponent, YoutubeComponent],
})
export class ContentPageModule {}
