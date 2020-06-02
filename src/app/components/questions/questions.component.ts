import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import {
  Question,
  QuestionOption,
} from "src/app/interfaces/question.interface";
import { ActivatedRoute, Router } from "@angular/router";

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
  route: string;
  count: number = 1;

  currentQuestion: Question;
  selectedOption: string;
  score: number = 0;

  constructor(private router: Router) {}

  ngOnChanges() {
    if (!this.currentQuestion) this.setCurrentQuestion();
    this.sendScore.emit(this.score);
    console.log(this.questions);
  }

  setCurrentQuestion() {
    this.currentQuestion = this.questions[this.count - 1];
  }

  setRoute() {
    this.route = `content/${this.currentQuestion.id}`;
    this.router.navigate(["/content/"], {
      queryParams: { page: this.currentQuestion.id },
    });
    console.log(this.route);
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
  }

  forward() {
    this.count++;
    if (this.count === this.questions.length + 1) {
      return this.sendQuestions.emit(this.questions);
    }
    this.setCurrentQuestion();
  }

  submit(question: Question) {
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
