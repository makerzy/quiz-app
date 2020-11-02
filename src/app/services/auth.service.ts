import { Injectable } from "@angular/core";
import { Auth } from "aws-amplify";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  async guestLogin() {
    return await Auth.signIn("quizGuest@gmail.com", "guest167-");
  }

  async submitNewPassword(user, password, []) {
    return await Auth.completeNewPassword(user, password, [])
  }

  logout() {
    Auth.signOut();
  }
}
