import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImageComponent } from "../image/image.component";
import { VideoComponent } from "../video/video.component";
import { YoutubeComponent } from "../youtube/youtube.component";
import { MaterialModule } from "src/app/material.module";
const components = [ImageComponent, VideoComponent, YoutubeComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MaterialModule],
  exports: [components, MaterialModule],
})
export class MediaContentModule {}
