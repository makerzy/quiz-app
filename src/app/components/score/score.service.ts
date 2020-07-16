/* import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ScoreService {
  constructor() {}
  chatOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: "",
      align: "center",
      verticalAlign: "top",
      y: 60,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        slicedOffset: 45,
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "50%"],
        size: "75%",
      },
    },
    series: [
      {
        type: "pie",
        name: "Test score",
        innerSize: "50%",
        data: [
          [],

          {
            name: "Other",
            dataLabels: {
              enabled: false,
            },
          },
        ],
      },
    ],
  };

  createChart(container, option?: Object) {
    option = this.chatOptions;

    console.log(option);
    return Highcharts.chart(container, option);
  }
}
 */
