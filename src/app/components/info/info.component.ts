import { Component, OnInit } from "@angular/core";
import { QuestionGroupService } from "src/app/services/question-services/question-group.service";
import { QuestionGroup } from "src/app/interfaces/question.interface";
import { Router } from "@angular/router";

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
    private router: Router
  ) {}

  ngOnInit() {
    this.getQuestionGroups();
  }

  getQuestionGroups() {
    this.questionGroups = this.questionGroupService.getAllQuestionGroups();
  }

  seeQuestion(id: string) {
    console.log(id);
    this.router.navigate(["question"], {
      queryParams: { question: id },
    });
  }
}
