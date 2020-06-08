import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import * as Highcharts from "highcharts";
import { ScoreService } from "./score.service";

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

  constructor(private scoreService: ScoreService) {}

  ngOnInit() {
    this.getScoreFromUrl();
  }
  ngAfterViewInit() {
    this.createChart();
    this.setAverage();
  }

  // chatOptions = {
  //   chart: {
  //     plotBackgroundColor: null,
  //     plotBorderWidth: 0,
  //     plotShadow: false,
  //   },
  //   title: {
  //     text: "",
  //     align: "center",
  //     verticalAlign: "middle",
  //     y: 60,
  //   },
  //   tooltip: {
  //     pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  //   },
  //   credits: {
  //     enabled: false,
  //   },
  //   plotOptions: {
  //     pie: {
  //       dataLabels: {
  //         enabled: true,
  //         distance: -50,
  //         style: {
  //           fontWeight: "bold",
  //           color: "white",
  //         },
  //       },
  //       slicedOffset: 45,
  //       startAngle: -90,
  //       endAngle: 90,
  //       center: ["50%", "50%"],
  //       size: "110%",
  //     },
  //   },
  //   series: [
  //     {
  //       type: "pie",
  //       name: "Test score",
  //       innerSize: "50%",
  //       data: [
  //         [],

  //         {
  //           name: "Other",
  //           dataLabels: {
  //             enabled: false,
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // };

  createChart() {
    console.log(this.container);
    this.scoreService.createChart(this.container.nativeElement);
  }
  getScoreFromUrl() {
    const params = document.URL;
    const urlParams = params.split("?");
    const scoreParams = urlParams[1].split("&")[0];
    const attemptParams = urlParams[1].split("&")[1];
    this.userScore = parseInt(scoreParams.split("=")[1]);
    this.totalQuestion = parseInt(attemptParams.split("=")[1]);

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
    console.log(this.percentagePassed, this.percentageFailed);
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
