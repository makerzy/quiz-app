import { Component, OnInit } from "@angular/core";
import { Question } from "../interfaces/question.interface";
import { QuestionListService } from "../services/question-services/question-list.service";

import { Router } from "@angular/router";

@Component({
  selector: "app-question",
  templateUrl: "./question.page.html",
  styleUrls: ["./question.page.scss"],
})
export class QuestionPage implements OnInit {
  questions: Question[];

  questionGroupId: string = "pain";
  score: number;
  count: number;
  constructor(
    private questionListService: QuestionListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getParams();
    this.questions = this.questionListService.getQuestionsByGroupId(
      this.questionGroupId
    );
  }

  getParams() {
    if (document.URL.includes("?")) {
      const urlParams = document.URL.split("?")[1];
      const question = urlParams.split("=")[1];
      this.questionGroupId = question.split("-")[0];
      console.log(urlParams, this.questionGroupId);
    } else {
      this.router.navigate(["question"]);
    }
  }

  getScore(event: number) {
    this.score = event;
  }
  getCount(event: number) {
    this.count = event;
  }
  retrieveQuestions(questions: Question[]) {
    console.log(questions);
    // send data to database
  }
}
