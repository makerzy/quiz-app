import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

export interface URLParams {
  questionGroupId?: string;
  userEmail?: string;
}

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  urlParams = {} as URLParams;

  constructor(private navCtrl: NavController) {
    this.initializeApp();
  }

  async initializeApp() {
    this.getUrlParms();

    if (this.urlParams.userEmail) {
      // save email to database
    }

    if (this.urlParams.questionGroupId) {
      // navigate to question page with the questionId as a param
    }
  }

  getUrlParms() {
    if (document.URL.indexOf("?") > 0) {
      const paramString = document.URL.split("?")[1];
      const params = paramString.split("&");
      const paramMap = params.map((param) => {
        const splitParam = param.split("=");
        return {
          key: splitParam[0],
          value: splitParam[1],
        };
      });
      const findEmail = paramMap.find(({ key }) => key === "email");
      if (findEmail) this.urlParams.userEmail = findEmail.value;

      const findQuestionGroupId = paramMap.find(
        ({ key }) => key === "questionGroupId"
      );
      if (findQuestionGroupId)
        this.urlParams.questionGroupId = findQuestionGroupId.value;
    }
  }
}
