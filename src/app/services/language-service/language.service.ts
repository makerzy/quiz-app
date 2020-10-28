import { Injectable } from "@angular/core";
import { translations } from "./translations";
import { BehaviorSubject, Observable } from "rxjs";
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

export interface LanguageText {
  [key: string]: { [key: string]: string };
}

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  translations = translations;
  currentLanguage: string;

  text$ = new BehaviorSubject<LanguageText | null>(null);

  constructor() {
    this.getDeviceLanguage();
    this.changeLocalLanguageText(this.currentLanguage);
  }

  getDeviceLanguage() {
    Device.getLanguageCode()
      .then((lang) => {
        this.currentLanguage = lang.value.split("-")[0];
      })
      .then(() => this.currentLanguage && this.currentLanguage.match(/en|fr/))
      ? this.changeLocalLanguageText(this.currentLanguage)
      : (this.currentLanguage = this.setDefaultLanguage());
  }

  setDefaultLanguage() {
    return "en";
  }

  getLanguageTextObservable(): Observable<LanguageText> {
    return this.text$;
  }

  changeLocalLanguageText(languageId: string) {
    this.currentLanguage = languageId;
    const newText = this.getTranslations(languageId);
    this.text$.next(newText);
  }

  getTranslations(languageId: string) {
    return this.translations[languageId];
  }
}
