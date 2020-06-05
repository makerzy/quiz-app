import { Component, OnInit } from "@angular/core";
import { ContentObject } from "../../interfaces/question.interface";
import { QuestionListService } from "src/app/services/question-list/question-list.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.page.html",
  styleUrls: ["./content.page.scss"],
})
export class ContentPage implements OnInit {
  param: string;
  optionId: string;
  currentContents: ContentObject[];

  constructor(private questionListService: QuestionListService) {
    this.getContent();
  }

  ngOnInit() {
    this.getQuestionContent();
  }

  getQuestionContent() {
    const question = this.questionListService.getQuestionById(this.param);
    const activeOption = question.options.find(
      ({ id }) => id === this.optionId
    );
    this.currentContents = activeOption.content;
  }

  getContent() {
    if (document.URL.indexOf("?") > 0) {
      const params = document.URL.split("?");
      this.param = params[1].split("=")[1];
      const id = params[0].split("/");
      this.optionId = id[id.length - 1];
    }
  }
}
