import { Component } from "@angular/core";
import { NavService } from "./services/nav.service";

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

  constructor(private navService: NavService) {
    this.initializeApp();
  }

  async initializeApp() {
    this.getUrlParms();

    if (this.urlParams.userEmail) {
      // save email to database
    }

    if (this.urlParams.questionGroupId) {
      return this.navService.setRoot("question", {
        questionGroupId: this.urlParams.questionGroupId,
      });
      // navigate to question page with the questionId as a param
    }
    return this.navService.setRoot("home");
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
