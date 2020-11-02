import { Component, OnInit } from "@angular/core";
import { Question, QuestionGroup } from "src/app/interfaces/question.interface";
import { QuestionListService } from "src/app/services/question-services/question-list.service";
import { translations } from "src/app/services/language-service/translations";
import { NavService } from "src/app/services/nav.service";
import { NavType } from "src/app/components/prev-next/prev-next.component";
import { QuestionGroupService } from "src/app/services/question-services/question-group.service";
import { MomentService } from "src/app/services/moment.service";
import { APIQuizEventService } from "src/app/services/dynamo/api.quiz-event.service";
import { v4 as uuid } from "uuid";
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
  isCorrect: boolean = false;
  questionHeader: string = translations.en.questions.caseBackground;
  urlParams: string;
  email: string;
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
  async retrieveQuestionData(data: any) {
    console.log("selectedOptions: ", data);
    const { questionId, selectedOptionId, correctAnswerId, isCorrect } = data;
    console.log(isCorrect, questionId, selectedOptionId, correctAnswerId);
    await this.questionEventService.createAnsweredQuestions({
      instanceId: `${this.questionGroupId}-${uuid()}`,
      caseId: this.questionGroupId,
      questionsId: questionId,
      optionId: selectedOptionId,
      isCorrect,
      createdAt: this.moment.getMoment(),
      updatedAt: this.moment.getMoment(),
    });
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
      this.endTest();
    }
    return this.setCurrentQuestion();
  }

  async endTest() {
    let firstName = this.urlParams["firstName"] || "imc";
    let lastName = this.urlParams["lastName"] || "imcQuiz";
    this.email = this.urlParams["email"] || "imc.quiz@imcpt.com";
    this.nav.setRoot("review", {
      queryParams: { score: this.score, total: this.questions.length },
    });
    await this.questionEventService.createQuizEvent({
      caseId: this.questionGroupId,
      instanceId: `${this.questionGroupId}-${uuid()}`,
      userEmail: this.email,
      first: firstName,
      last: lastName,
      score: this.score,
      finished: this.answered === this.questions.length ? true : false,
    });
    console.log(
      firstName,
      lastName,
      this.email,
      this.questionGroupId,
      this.score,
      this.answered,
      this.questions.length
    );
    return true;
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
