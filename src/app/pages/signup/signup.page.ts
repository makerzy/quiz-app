import { Component, OnInit } from "@angular/core";
import { NavService } from "src/app/services/nav.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  input: string = "";
  password: string = "imcptquiztestteam";
  wrongPassword: boolean = false;
  submitted: boolean = false;
  constructor(private nav: NavService) {}

  ngOnInit() {}

  validate() {
    if (this.input === "") return;
    console.log(this.input);
    this.submitted = true;
    this.input === this.password
      ? this.nav.setRoot("test-page", { urlParams: "shoulderPain_01" })
      : (this.wrongPassword = true);
  }

  handleSubmit(event) {
    if (event.keyCode == 13) this.validate();
  }
}
