import { Component, OnInit } from "@angular/core";
import {
  Question,
  QuestionGroup,
  URLParams,
} from "src/app/interfaces/question.interface";
import { QuestionListService } from "src/app/services/question-services/question-list.service";
import { translations } from "src/app/services/language-service/translations";
import { NavService } from "src/app/services/nav.service";
import { NavType } from "src/app/components/prev-next/prev-next.component";
import { QuestionGroupService } from "src/app/services/question-services/question-group.service";
import { MomentService } from "src/app/services/moment.service";
import { APIQuizEventService } from "src/app/services/dynamo/api.quiz-event.service";

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
  selectedOptions: any[] = [];

  questionHeader: string = translations.en.questions.caseBackground;
  urlParams: string;
  constructor(
    private questionListService: QuestionListService,
    private nav: NavService,
    private questionGrpService: QuestionGroupService,
    private moment: MomentService,
    private questionEventService: APIQuizEventService
  ) {}

  ngOnInit() {
    this.reset();
    this.urlParams = this.nav.get("urlParams");
    console.log(this.urlParams);
    let questionId;
    typeof this.urlParams === "string"
      ? (questionId = this.urlParams)
      : (questionId = this.urlParams["questionGroupId"]);
    const questionGroupId = questionId;
    console.log("grpID: ", this.urlParams);
    if (!questionGroupId) return this.returnToHome();
    this.questionGroupId = questionId;
    this.questionGroup = this.questionGrpService.getQuestionGroupById(
      this.questionGroupId
    );
    this.questions = this.questionGroup.questions;

    console.log("Questions: ", this.questions);
    this.setCurrentQuestion();
  }

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
  retrieveQuestionData(data: any) {
    this.selectedOptions.push(data);
    console.log("selectedOptions: ", this.selectedOptions);
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
      this.count = 0;
      this.setCurrentQuestion();
      let firstName = this.urlParams["firstName"] || "";
      let lastName = this.urlParams["lastName"] || "";
      let email = this.urlParams["email"] || "";
      let questionGroupId = this.urlParams["questionGroupId"] || "";

      this.endTest();
      // this.questionEventService.createQuizEvent({
      //   caseId: questionGroupId,
      //   instanceId: `${this.questionGroupId}-${this.moment.getMoment()}`,
      //   createdAt: this.moment.getMoment(),
      //   userEmail,
      //   first: firstName,
      //   last: lastName,
      //   score: this.score,
      //   finished: this.count === this.questions.length ? true : false,
      //   questionData: this.selectedOptions;
      // });
    }
    return this.setCurrentQuestion();
  }

  endTest() {
    return this.nav.setRoot("review", {
      queryParams: { score: this.score, total: this.questions.length },
    });
  }
  retrieveQuestionResponse(question: Question) {
    console.log("question: ", question);
    const index = this.questions.findIndex(({ id }) => id === question.id);
    this.questions[index] = question;

    console.log(this.questionListService.questionList);
  }

  retrieveNavRequest({ url, data }) {
    this.nav.push(url, data);
  }
}
