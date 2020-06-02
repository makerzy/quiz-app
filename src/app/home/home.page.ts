import { Component, OnInit } from "@angular/core";
import { Question } from "../interfaces/question.interface";
import { QuestionListService } from "../services/question-list/question-list.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  questions: Question[];

  questionGroupId = 123;
  score: number;
  constructor(private questionListService: QuestionListService) {}

  ngOnInit() {
    this.questions = this.questionListService.getQuestionsByGroupId(
      this.questionGroupId,
    );
  }

  getScore(event: number) {
    this.score = event;
  }
  retrieveQuestions(questions: Question[]) {
    console.log(questions);
    // send data to database
  }
}
