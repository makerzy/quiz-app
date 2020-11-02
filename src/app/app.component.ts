import { Component } from "@angular/core";
import { NavService } from "./services/nav.service";
import { URLParams } from "src/app/interfaces/question.interface";
import { AuthService } from "./services/auth.service";

//https://jseducation-dev.web.app?questionGroupId=pain

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  urlParams = {} as URLParams;

  constructor(private navService: NavService, private auth: AuthService) {
    this.getUrlParms();
    this.initializeApp();
  }

  async initializeApp() {
    document.URL.includes("login")
      ? this.navService.setRoot("login")
      : this.navService.setRoot("home");

    const user = await this.auth.guestLogin();

    console.log(user);

    // const res = await this.auth.submitNewPassword(user, 'guest167-', []);
    // console.log(res);

    if (this.urlParams.questionGroupId) {
      return this.navService.setRoot("question", {
        urlParams: this.urlParams,
      });
      // navigate to question page with the questionId as a param
    }
  }

  getUrlParms() {
    console.log(document.URL.indexOf("?"));
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
      const findFirst = paramMap.find(({ key }) => key === "firstname");
      if (findFirst) this.urlParams.firstName = findFirst.value;

      const findLast = paramMap.find(({ key }) => key === "lastname");
      if (findLast) this.urlParams.lastName = findLast.value;

      const findQuestionGroupId = paramMap.find(
        ({ key }) => key === "questionGroupId"
      );
      if (findQuestionGroupId)
        this.urlParams.questionGroupId = findQuestionGroupId.value;
      console.log("URLParams: ", this.urlParams);
    } else return;
  }
}
