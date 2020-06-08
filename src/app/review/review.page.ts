import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-review",
  templateUrl: "./review.page.html",
  styleUrls: ["./review.page.scss"],
})
export class ReviewPage implements OnInit {
  topRowHeight: number;
  bottomRowHeight: number;
  constructor(private platform: Platform) {
    platform.ready().then(() => {
      this.topRowHeight = Math.round(platform.height() * 0.7);
      this.bottomRowHeight = Math.round(platform.height() * 0.3);
      platform.resize.subscribe(() => {
        this.topRowHeight = Math.round(platform.height() * 0.7);
        this.bottomRowHeight = Math.round(platform.height() * 0.3);
        console.log(
          "BottomHeight",
          this.bottomRowHeight,
          "TopHeight",
          this.topRowHeight
        );
      });
    });
  }

  ngOnInit() {}
}
