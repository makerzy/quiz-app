import { Injectable } from "@angular/core";
import { Question } from "src/app/interfaces/question.interface";
import { translations } from "../../translations";
const questions = translations.en.questions;
const options = translations.en.options;

@Injectable({
  providedIn: "root",
})
export class QuestionListService {
  questionList: Question[] = [
    {
      id: 1,
      groupId: 123,
      order: 1,
      text: questions["Text1"],
      correctAnswerId: "a1",
      options: [
        {
          id: "a1",
          text: options["a1Text"],
          info: options["a1Info"],
          userSelectionPercentage: 8,
        },
        {
          id: "a2",
          text: options["a2Text"],
          info: options["a2Info"],
          userSelectionPercentage: 9,
        },
        {
          id: "a3",
          text: options["a3Text"],
          info: options["a3Info"],
          userSelectionPercentage: 51,
        },
        {
          id: "a4",
          text: options["a4Text"],
          info: options["a4Info"],
          userSelectionPercentage: 32,
        },
      ],
    },
    {
      id: 2,
      order: 2,
      groupId: 123,
      correctAnswerId: "b1",
      text: questions["Text2"],
      options: [
        {
          id: "b1",
          text: options["b1Text"],
          info: options["b1Info"],
          userSelectionPercentage: 12,
        },
        {
          id: "b2",
          text: options["b2Text"],
          info: options["b2Info"],
          userSelectionPercentage: 29,
        },
        {
          id: "b3",
          text: options["b3Text"],
          info: options["b3Info"],
          userSelectionPercentage: 28,
        },
        {
          id: "b4",
          text: options["b4Text"],
          info: options["b4Info"],
          userSelectionPercentage: 31,
        },
      ],
    },
    {
      id: 3,
      order: 3,
      groupId: 123,
      correctAnswerId: "c1",
      text: questions["Text3"],
      options: [
        {
          id: "c1",
          text: options["c1Text"],
          info: options["c1Info"],
          userSelectionPercentage: 24,
        },
        {
          id: "c2",
          text: options["c2Text"],
          info: options["c2Info"],
          userSelectionPercentage: 17,
        },
        {
          id: "c3",
          text: options["c3Text"],
          info: options["c3Info"],
          userSelectionPercentage: 18,
        },
        {
          id: "c4",
          text: options["c4Text"],
          info: options["c4Info"],
          userSelectionPercentage: 41,
        },
      ],
    },
  ];

  constructor() {}

  getQuestionsByGroupId(id: number) {
    return this.questionList.filter(({ groupId }) => groupId === id);
  }

  getAllQuestions() {
    return [...this.questionList];
  }
}
