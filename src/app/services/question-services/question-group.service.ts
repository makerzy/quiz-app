import { Injectable } from "@angular/core";
import { v1 as uuid } from "uuid";
import { QuestionGroup, Question } from "src/app/interfaces/question.interface";
import { translations } from "src/app/translations";
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
      id: `pain-${uuid()}`,
      questionIds: [`1`, `2`, `3`, `4`],
    },
    {
      topic: questionGroup["topic_2"],
      case: questionGroup["case_2"],
      id: `pain-body-${uuid()}`,
      questionIds: [`1`, `2`, `3`, `4`],
    },
    {
      topic: questionGroup["topic_3"],
      case: questionGroup["case_3"],
      id: `pain-back-${uuid()}`,
      questionIds: [`1`, `2`, `3`, `4`],
    },
    {
      topic: questionGroup["topic_4"],
      case: questionGroup["case_4"],
      id: `pain-leg-${uuid()}`,
      questionIds: [`1`, `2`, `3`, `4`],
    },
    {
      topic: questionGroup["topic_5"],
      case: questionGroup["case_5"],
      id: `pain-chest-${uuid()}`,
      questionIds: [`1`, `2`, `3`, `4`],
    },
    {
      topic: questionGroup["topic_6"],
      case: questionGroup["case_6"],
      id: `pain-leg-${uuid()}`,
      questionIds: [`1`, `2`, `3`, `4`],
    },
    {
      topic: questionGroup["topic_7"],
      case: questionGroup["case_7"],
      id: `pain-chest-${uuid()}`,
      questionIds: [`1`, `2`, `3`, `4`],
    },
  ];
  constructor(private questionService: QuestionListService) {}

  getAllQuestionGroups() {
    return [...this.questionGroups];
  }

  getQuestionGroup(_id: string) {
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
