import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { Question } from "src/app/interfaces/question.interface";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
})
export class QuestionsComponent implements OnChanges, OnDestroy {
  @Input()
  questions: Question[];
  @Output()
  sendQuestions: EventEmitter<Question[]> = new EventEmitter();
  @Output()
  sendScore: EventEmitter<number> = new EventEmitter();
  @Output()
  sendCount: EventEmitter<number> = new EventEmitter();

  count: number = 1;
  isSubmitted: boolean = false;
  open: boolean = true;

  currentQuestion: Question;
  selectedOption: string;
  score: number = 0;
  platform: any;
  platformWidth: number;

  constructor(private router: Router, private devicePlatform: Platform) {}

  ngOnChanges() {
    this.getPlatformSize();
    if (!this.currentQuestion) this.setCurrentQuestion();
    this.sendScore.emit(this.score);
    this.sendCount.emit(this.count);
  }

  ngOnDestroy() {
    this.devicePlatform.resize.unsubscribe();
  }

  getPlatformSize() {
    this.platformWidth = this.devicePlatform.width();
    this.devicePlatform.resize.subscribe(() => {
      this.platformWidth = this.devicePlatform.width();
    });
  }
  setCurrentQuestion() {
    this.currentQuestion = this.questions[this.count - 1];
  }

  setRoute(id: string) {
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
    this.open = true;

    this.setCurrentQuestion();
    this.setSelectedOption();
    this.sendCount.emit(this.count);
  }

  forward() {
    this.isSubmitted = false;
    this.open = true;
    this.count++;
    if (this.count === this.questions.length + 1) {
      this.router.navigate(["/review"], {
        queryParams: {
          score: `${this.score}`,
          "total-attempts": `${this.questions.length}`,
        },
      });
      return this.sendQuestions.emit(this.questions);
    }
    this.sendCount.emit(this.count);
    this.setCurrentQuestion();
  }

  submit(question: Question) {
    this.isSubmitted = true;
    this.open = false;
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
