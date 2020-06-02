import { Component, OnInit, Input } from "@angular/core";
import { ContentService } from "../content.service";
import { Content } from "../../interfaces/content.interface";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.scss"],
})
export class ImageComponent implements OnInit {
  count: number = 0;

  currentImage: string;
  @Input()
  contents: Content;
  constructor(private contentService: ContentService) {}

  ngOnInit() {
    if (!this.currentImage) this.getCurrentImage();
  }
  getCurrentImage() {
    this.currentImage = this.contents.image;
  }
}
