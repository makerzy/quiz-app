import { Component, OnInit } from "@angular/core";
import { Question, QuestionGroup } from "src/app/interfaces/question.interface";
import { QuestionListService } from "src/app/services/question-services/question-list.service";

import { NavService } from "src/app/services/nav.service";
import { NavType } from "src/app/components/prev-next/prev-next.component";
import { QuestionGroupService } from "src/app/services/question-services/question-group.service";

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
  completed: boolean = false;
  answered: number;
  constructor(
    private questionListService: QuestionListService,
    private nav: NavService,
    private questionGrpService: QuestionGroupService
  ) {}

  ngOnInit() {
    this.reset();
    const questionGrp = this.nav.get("questionGroupId");
    if (!questionGrp) return this.returnToHome();
    this.questionGroupId = questionGrp.id;
    /* console.log("Question Group ID: ", this.questionGroupId); */
    this.questionGroup = this.questionGrpService.getQuestionGroup(
      this.questionGroupId
    );
    this.questions = this.questionGroup.questions;
    /* console.log(this.questionGroup, this.questions); */
    this.setCurrentQuestion();
  }
  ionViewWillEnter() {}

  reset() {
    this.count = 0;
    this.questionGroupId = null;
    this.questionGroup = null;
    this.questions = null;
    this.currentQuestion = null;
    this.score = 0;
    this.answered = 0;
  }
  retrieveAnswered(_answered: number) {
    this.answered = _answered;
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
    if (this.count === this.questions.length - 1) {
      this.completed = true;
    }
    if (
      this.count === this.questions.length &&
      this.answered === this.questions.length
    ) {
      // this.count = 0;
      // this.setCurrentQuestion();

      this.endTest();
    }
    return this.setCurrentQuestion();
  }

  endTest() {
    return this.nav.setRoot("review", {
      queryParams: { score: this.score, total: this.questions.length },
    });
  }
  retrieveQuestionResponse(question: Question) {
    const index = this.questions.findIndex(({ id }) => id === question.id);
    this.questions[index] = question;
    /* console.log(this.questionListService.questionList); */
  }

  retrieveNavRequest({ url, data }) {
    this.nav.push(url, data);
  }
}
