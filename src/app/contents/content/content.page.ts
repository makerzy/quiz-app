import { Component, OnInit } from "@angular/core";
import { ContentObject } from "../../interfaces/question.interface";
import { NavService } from "src/app/services/nav.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.page.html",
  styleUrls: ["./content.page.scss"],
})
export class ContentPage implements OnInit {
  currentContents: ContentObject[];
  topic: string;

  constructor(private nav: NavService) {}

  ngOnInit() {
    this.currentContents = this.nav.get("content");
    this.topic = this.nav.get("topic");
    console.log(this.currentContents);
  }
}
