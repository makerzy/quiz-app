import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { NavService } from "src/app/services/nav.service";

@Component({
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.scss"],
})
export class ScoreComponent implements OnInit {
  userScore: number;
  totalQuestion: number;
  percentagePassed: number;
  percentageFailed: number;

  @ViewChild("container") public container: ElementRef;
  @ViewChild("container2") public container2: ElementRef;

  constructor(private nav: NavService) {}

  ngOnInit() {
    this.getScoreFromUrl();
  }

  getScoreFromUrl() {
    const params = this.nav.get("queryParams");
    console.log(params);
    this.userScore = parseInt(params["score"]);
    this.totalQuestion = parseInt(params["total"]);
    console.log(this.userScore, this.totalQuestion);
    const difference = this.totalQuestion - this.userScore;
    this.percentagePassed = Math.round(
      (this.userScore / this.totalQuestion) * 100
    );
  }
  goBack() {
    this.nav.setRoot("home");
  }
}
