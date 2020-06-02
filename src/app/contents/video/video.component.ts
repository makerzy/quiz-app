import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { VideoPlayer, VideoOptions } from "@ionic-native/video-player";

import { ContentService } from "../content.service";
import { DomSanitizer } from "@angular/platform-browser";
import { Plugins } from "@capacitor/core";
import * as PluginsLibrary from "capacitor-video-player";
import { Content } from "src/app/interfaces/content.interface";

const { CapacitorVideoPlayer, Device } = Plugins;
@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {
  _url: string =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  videoPlayer: any;
  url: string;
  count: number = 0;
  currentVideo: any;
  @Input()
  contents: Content;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.url = this.contents.video;
    this.currentVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  async ngAfterViewInit() {
    const info = await Device.getInfo();
    if (info.platform === "ios" || info.platform === "android") {
      this.videoPlayer = CapacitorVideoPlayer;
      this.playNative(this.url);
    } else {
      this.videoPlayer = PluginsLibrary.CapacitorVideoPlayer;
      this.play(this._url);
    }
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
  }
  async playNative(_url: string) {
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
      mode: "fullscreen",
      playerId: "vp-container",
      url: _url,
      componentTag: "app-video",
    });
  }
}
