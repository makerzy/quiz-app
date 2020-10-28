import { Injectable } from "@angular/core";
import { QuestionGroup, Question } from "src/app/interfaces/question.interface";
import { translations } from "src/app/services/language-service/translations";
import { QuestionListService } from "./question-list.service";

const questionGroup = translations.en.questionGroup;
@Injectable({
  providedIn: "root",
})
export class QuestionGroupService {
  questionGroups: QuestionGroup[] = [
    {
      topic: questionGroup["topic_1"],
      case: questionGroup["case_1"],
      id: `thighKneePain_01`,
      questionIds: [`1`, `2`, `3`, `4`],
    },
  ];
  constructor(private questionService: QuestionListService) {
    console.log("Question service");
  }

  getAllQuestionGroups() {
    console.log("All Questions");
    return [...this.questionGroups];
  }

  getQuestionGroupById(_id: string) {
    console.log("ID: ", _id);
    const questionGroup = Object.assign(
      {},
      this.questionGroups.find(({ id }) => id === _id)
    );
    const questions = [] as Question[];

    questionGroup.questionIds.forEach((id) =>
      questions.push(
        Object.assign({}, this.questionService.getQuestionById(id))
      )
    );
    questionGroup.questions = questions;
    return questionGroup;
  }
}
