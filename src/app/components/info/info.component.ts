import { Component, OnInit } from "@angular/core";
import { QuestionGroupService } from "src/app/services/question-services/question-group.service";
import { QuestionGroup } from "src/app/interfaces/question.interface";
import { Router } from "@angular/router";
import { NavService } from "src/app/services/nav.service";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
})
export class InfoComponent implements OnInit {
  questionGroups: QuestionGroup[];
  questionId: string;
  constructor(
    private questionGroupService: QuestionGroupService,
    private navService: NavService
  ) {}

  ngOnInit() {
    this.getQuestionGroups();
  }

  getQuestionGroups() {
    this.questionGroups = this.questionGroupService.getAllQuestionGroups();
  }

  seeQuestion(params: any) {
    // console.log(id);
    this.navService.push("question", { questionGroupId: params });
  }
}
