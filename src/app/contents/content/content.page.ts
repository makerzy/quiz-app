import { Component, OnInit } from "@angular/core";
import { ContentService } from "../content.service";
import { Content } from "../../interfaces/content.interface";

@Component({
  selector: "app-content",
  templateUrl: "./content.page.html",
  styleUrls: ["./content.page.scss"],
})
export class ContentPage implements OnInit {
  contents: Content;
  count: number;
  groupId: number = 123;
  header: string;
  introduction: string;
  subHeader: string;
  mainContent: string;
  conclusion: string;
  diseases;

  constructor(private contentService: ContentService) {
    this.getCount();
  }

  ngOnInit() {
    this.contents = this.contentService.getContentByGroupId(this.groupId)[
      this.count - 1
    ];
    this.setContents();
    this.getContent();
  }

  getCount() {
    if (document.URL.indexOf("?") > 0) {
      const params = document.URL.split("?")[1];
      this.count = parseInt(params.split("=")[1]);
    }
  }

  setContents() {
    this.header = this.contents.header;
    this.introduction = this.contents.introduction;
    this.subHeader = this.contents.subHeader;
    this.mainContent = this.contents.mainContent;
    this.conclusion = this.contents.conclusion;
  }

  getContent() {
    this.diseases = this.contentService.getContentByCategoryName(
      "heartDiseaseContent"
    );
  }
}
