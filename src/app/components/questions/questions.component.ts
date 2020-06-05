import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { Question } from "src/app/interfaces/question.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
})
export class QuestionsComponent implements OnChanges {
  @Input()
  questions: Question[];
  @Output()
  sendQuestions: EventEmitter<Question[]> = new EventEmitter();
  @Output()
  sendScore: EventEmitter<number> = new EventEmitter();
  @Output()
  sendCount: EventEmitter<number> = new EventEmitter();
  route: string;
  count: number = 1;
  isSubmitted: boolean = false;

  currentQuestion: Question;
  selectedOption: string;
  score: number = 0;

  constructor(private router: Router) {}

  ngOnChanges() {
    if (!this.currentQuestion) this.setCurrentQuestion();
    this.sendScore.emit(this.score);
    this.sendCount.emit(this.count);
    console.log(this.questions);
  }

  setCurrentQuestion() {
    this.currentQuestion = this.questions[this.count - 1];
  }

  setRoute(id: string) {
    console.log(id);
    this.route = `content/${id}`;
    this.router.navigate([`/content/${id}/`], {
      queryParams: { page: this.currentQuestion.id },
    });
  }

  setSelectedOption() {
    if (this.currentQuestion.responseId) {
      this.selectedOption = this.currentQuestion.options.find(
        ({ id }) => id === this.currentQuestion.responseId
      ).id;
    }
  }

  back() {
    this.count--;
    this.setCurrentQuestion();
    this.setSelectedOption();
    this.sendCount.emit(this.count);
  }

  forward() {
    this.isSubmitted = false;
    this.count++;
    if (this.count === this.questions.length + 1) {
      return this.sendQuestions.emit(this.questions);
    }
    this.sendCount.emit(this.count);
    this.setCurrentQuestion();
  }

  submit(question: Question) {
    this.isSubmitted = true;
    question.isCorrect = this.determineIsCorrect();
    this.sendScore.emit(this.score);
    question.responseId = this.selectedOption;
  }

  determineIsCorrect() {
    const correctAnswerId = this.currentQuestion.correctAnswerId;
    const selectedAnswerId = this.selectedOption;
    if (correctAnswerId === selectedAnswerId) {
      this.score++;
      return true;
    }
    return false;
  }
}
