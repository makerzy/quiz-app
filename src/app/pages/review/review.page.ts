import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { NavService } from "src/app/services/nav.service";

@Component({
  selector: "app-review",
  templateUrl: "./review.page.html",
  styleUrls: ["./review.page.scss"],
})
export class ReviewPage implements OnInit {
  topRowHeight: number;
  bottomRowHeight: number;
  view: boolean = false;
  constructor(private platform: Platform, private navService: NavService) {}

  ngOnInit() {}
  goBack() {
    this.navService.setRoot("home");
  }
}
