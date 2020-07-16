import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Question, ContentObject } from "src/app/interfaces/question.interface";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
})
export class QuestionsComponent {
  @Input()
  currentQuestion: Question;
  @Input() currentScore: number;
  @Input() count: number;
  @Output()
  sendQuestionResponse: EventEmitter<Question> = new EventEmitter();
  @Output()
  sendScore: EventEmitter<number> = new EventEmitter();
  @Output()
  sendAnswered: EventEmitter<number> = new EventEmitter();
  @Output() sendNavRequest: EventEmitter<{
    url: string;
    data: any;
  }> = new EventEmitter();

  isSubmitted: boolean = false;
  open: boolean = true;
  selectedOption: string;
  answered: number = 0;
  constructor() {}

  navigateToContent(content: ContentObject[]) {
    this.sendNavRequest.emit({ url: "content", data: { content } });
  }

  setSelectedOption() {
    if (this.currentQuestion.responseId) {
      this.selectedOption = this.currentQuestion.options.find(
        ({ id }) => id === this.currentQuestion.responseId
      ).id;
    }
  }

  setOpen() {
    if (!this.currentQuestion.responseId) this.open = false;
  }

  submit(question: Question) {
    this.isSubmitted = true;
    this.open = false;
    this.answered++;
    this.sendAnswered.emit(this.answered);
    question.isCorrect = this.determineIsCorrect();
    this.sendScore.emit(this.currentScore);
    question.responseId = this.selectedOption;
  }

  determineIsCorrect() {
    const correctAnswerId = this.currentQuestion.correctAnswerId;
    const selectedAnswerId = this.selectedOption;
    if (correctAnswerId === selectedAnswerId) {
      this.currentScore++;

      return true;
    }
    return false;
  }
}
