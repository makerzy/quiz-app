import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import { YoutubePlayerWeb } from "capacitor-youtube-player";

import { Plugins, Capacitor } from "@capacitor/core";
import { Content } from "src/app/interfaces/content.interface";

@Component({
  selector: "app-youtube",
  templateUrl: "./youtube.component.html",
  styleUrls: ["./youtube.component.scss"],
})
export class YoutubeComponent implements OnInit {
  @Input() contents: Content;
  youtubeId: string;
  constructor() {}

  ngOnInit() {
    let arr = this.contents.video.split("/");
    console.log(arr);
    this.youtubeId = this.contents.video.split("/")[arr.length - 1];
  }
  ngAfterViewInit() {
    if (Capacitor.platform === "web") {
      this.initializeYoutubePlayerPluginWeb();
    } else {
      this.initializeYoutubePlayerNative();
    }
  }

  async initializeYoutubePlayerPluginWeb() {
    const options = {
      playerId: "youtube-player",
      playerSize: { width: 640, height: 420 },
      videoId: this.youtubeId,
    };
    const result = await YoutubePlayerWeb.initialize(options);
    console.log("playerReady", result);
  }

  async destroyYoutubePlayerPluginWeb() {
    const result = await YoutubePlayerWeb.destroy("youtube-player");
    console.log("destroyYoutubePlayer", result);
  }

  async initializeYoutubePlayerNative() {
    const { YoutubePlayer } = Plugins;
    const options = { width: 640, height: 360, videoId: this.youtubeId };
    const playerReady = await YoutubePlayer.initialize(options);

    console.log("playReady", playerReady);
  }
}
