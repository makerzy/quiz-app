import { Component, OnInit, Input } from "@angular/core";
import { ContentService } from "../content.service";
import { ContentObject } from "../../interfaces/question.interface";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.scss"],
})
export class ImageComponent implements OnInit {
  @Input() currentImage: string;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    // console.log(this.contents);
    // if (!this.currentImage) this.getCurrentImage();
  }
  // getCurrentImage() {
  //   for (let i = 0; i < this.contents.length; i++) {
  //     this.currentImage = this.contents[i].url;
  //   }
  // }
}
