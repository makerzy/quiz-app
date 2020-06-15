import { Component, OnInit } from "@angular/core";
import { Question, QuestionGroup } from "../interfaces/question.interface";
import { QuestionListService } from "../services/question-services/question-list.service";

import { NavService } from "../services/nav.service";
import { NavType } from "../components/prev-next/prev-next.component";
import { QuestionGroupService } from "../services/question-services/question-group.service";

@Component({
  selector: "app-question",
  templateUrl: "./question.page.html",
  styleUrls: ["./question.page.scss"],
})
export class QuestionPage implements OnInit {
  questionGroupId: string;
  questionGroup: QuestionGroup;
  questions: Question[];
  currentQuestion: Question;
  score: number = 0;
  count: number;
  open: boolean = true;
  constructor(
    private questionListService: QuestionListService,
    private nav: NavService,
    private questionGrpService: QuestionGroupService
  ) {}

  ngOnInit() {
    console.log("URL: ", document.URL);
    this.questionGroupId = this.nav.get("questionGroupId")["id"];
    console.log("QuestionGroupId: ", this.questionGroupId);
    if (!this.questionGroupId) return this.returnToHome();
    this.questions = this.questionListService.getQuestionsByGroupId(
      this.questionGroupId.split("-")[0]
    );
    this.getQuestionGroup();

    this.reset();
  }

  getQuestionGroup() {
    this.questionGroup = this.questionGrpService.getQuestionGroup(
      this.questionGroupId
    )[0];
  }

  reset() {
    this.count = 0;
    this.setCurrentQuestion();
  }

  setCurrentQuestion() {
    this.currentQuestion = this.questions[this.count];
  }

  returnToHome() {
    this.nav.setRoot("home");
  }

  getScore(currentScore: number) {
    this.score = currentScore;
  }
  getCount(event: number) {
    this.count = event;
  }

  retrieveNavType(navType: NavType) {
    if (navType === NavType.back) {
      this.count--;
    } else {
      this.count++;
    }
    this.open = true;
    if (this.count > this.questions.length - 1)
      return this.nav.push("review", {
        queryParams: { score: this.score, total: this.questions.length },
      });
    return this.setCurrentQuestion();
  }
  retrieveQuestionResponse(question: Question) {
    const index = this.questions.findIndex(({ id }) => id === question.id);
    this.questions[index] = question;
  }

  retrieveNavRequest({ url, data }) {
    this.nav.push(url, data);
  }
}
