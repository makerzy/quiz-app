import {
  Component,
  OnChanges,
  Input,
  ViewChild,
  ElementRef,
} from "@angular/core";
import {
  PlatformService,
  ScreenDimensions,
} from "src/app/services/platform.service";
import { Observable } from "rxjs";

export interface VideoPlayerData {
  src: string;
  type: string;
  loop?: boolean;
  autoplay?: boolean;
  controls?: boolean;
}

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnChanges {
  @Input() data: VideoPlayerData;
  maximumWidthThreshold = 600;
  platformData$: Observable<ScreenDimensions>;
  @ViewChild("video") video: ElementRef;
  constructor(private platformService: PlatformService) {
    this.setWidthAndHeight(this.platformService.getCurrentPlatformData());
    this.platformData$ = this.platformService.getPlatformDataObservable();
  }

  ngOnChanges() {}

  setWidthAndHeight(platformData: ScreenDimensions) {
    if (platformData && platformData.width) {
      return {
        width: this.setWidth(platformData.width),
        height: this.setWidth(platformData.width) * 0.56,
      };
    }
  }

  setWidth(width: number) {
    return width > this.maximumWidthThreshold
      ? this.maximumWidthThreshold
      : width;
  }
}
