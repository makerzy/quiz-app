import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { ScoreService } from "./score.service";
import { ActivatedRoute } from "@angular/router";
import { NavService } from "src/app/services/nav.service";

@Component({
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.scss"],
})
export class ScoreComponent implements OnInit, AfterViewInit {
  userScore: number;
  totalQuestion: number;
  percentagePassed: number;
  percentageFailed: number;

  @ViewChild("container") public container: ElementRef;
  @ViewChild("container2") public container2: ElementRef;

  constructor(private scoreService: ScoreService, private nav: NavService) {}

  ngOnInit() {
    this.getScoreFromUrl();
  }
  ngAfterViewInit() {
    this.createChart();
    this.setAverage();
  }

  createChart() {
    this.scoreService.createChart(this.container.nativeElement);
  }
  getScoreFromUrl() {
    const params = this.nav.get("queryParams");
    console.log(params);
    this.userScore = parseInt(params["score"]);
    this.totalQuestion = parseInt(params["total"]);
    console.log(this.userScore, this.totalQuestion);
    const difference = this.totalQuestion - this.userScore;
    this.scoreService.chatOptions.series[0].data = [
      ["", 0],
      ["", 0],
      ["Pass", Math.round((this.userScore / this.totalQuestion) * 100)],
      ["", 0],
      ["", 0],
      ["Fail", Math.round((difference / this.totalQuestion) * 100)],
    ];
    this.scoreService.chatOptions.title.text = `Test<br>Performance<br><br><div style="margin-bottom:10px;">Your Score: ${this.userScore}</div><br><div style="margin-bottom:10px;">Total Attempt: ${this.totalQuestion} questions</div>`;
  }

  setAverage() {
    this.scoreService.chatOptions.series[0].data = [
      ["", 0],
      ["", 0],
      ["Pass", Math.round((30 / 34) * 100)],
      ["", 0],
      ["", 0],
      ["Fail", Math.round((4 / 34) * 100)],
    ];
    this.scoreService.chatOptions.title.text = `Average Performance`;
    this.scoreService.createChart(this.container2.nativeElement);
  }
}
