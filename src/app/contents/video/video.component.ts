import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { VideoPlayer, VideoOptions } from "@ionic-native/video-player";

import { DomSanitizer } from "@angular/platform-browser";
import { Plugins } from "@capacitor/core";
import * as PluginsLibrary from "capacitor-video-player";

const { CapacitorVideoPlayer, Device } = Plugins;
@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {
  videoPlayer: any;
  @Input() url: string;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  async ngAfterViewInit() {
    const info = await Device.getInfo();
    if (info.platform === "ios" || info.platform === "android") {
      this.videoPlayer = CapacitorVideoPlayer;
    } else {
      this.videoPlayer = PluginsLibrary.CapacitorVideoPlayer;
    }
    this.play(this.url);
    console.log(this.url);
  }
  async play(_url: string) {
    document.addEventListener(
      "jeepCapVideoPlayerPlay",
      (e: CustomEvent) => {
        console.log("Event jeepCapVideoPlayerPlay ", e.detail);
      },
      false
    );
    document.addEventListener(
      "jeepCapVideoPlayerPause",
      (e: CustomEvent) => {
        console.log("Event jeepCapVideoPlayerPause ", e.detail);
      },
      false
    );
    document.addEventListener(
      "jeepCapVideoPlayerEnded",
      (e: CustomEvent) => {
        console.log("Event jeepCapVideoPlayerEnded ", e.detail);
      },
      false
    );
    const res: any = await this.videoPlayer.initPlayer({
      mode: "embedded",
      playerId: "vp-container",
      width: 640,
      height: 360,
      url: _url,
      componentTag: "app-video",
    });
    console.log(res);
  }
}
