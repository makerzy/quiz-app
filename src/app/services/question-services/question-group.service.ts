import { Injectable } from "@angular/core";
import { v1 as uuid } from "uuid";
import { QuestionGroup } from "src/app/interfaces/question.interface";

@Injectable({
  providedIn: "root",
})
export class QuestionGroupService {
  questionGroups: QuestionGroup[] = [
    {
      topic: "Pain",
      case:
        "A 28 year-old male has complaints of right anterior thigh and knee pain. Symptoms began 3 weeks ago without mechanism. The symptoms are intermittent and appear to be worse with prolong sitting, rising, the first few steps of ambulation, and with ADLs requiring bending (bathing, grooming, dressing, etc.). When questioned, the patient does describe obstruction with his current condition.",
      id: `pain-${uuid()}`,
      questionIds: [
        `pain-${uuid()}`,
        `pain-${uuid()}`,
        `pain-${uuid()}`,
        `pain-${uuid()}`,
      ],
    },
    {
      topic: "Body Pain",
      case:
        "A 40 year-old male has complaints of right anterior thigh and knee pain. Symptoms began 3 weeks ago without mechanism. The symptoms are intermittent and appear to be worse with prolong sitting, rising, the first few steps of ambulation, and with ADLs requiring bending (bathing, grooming, dressing, etc.). When questioned, the patient does describe obstruction with his current condition.",
      id: `pain-body-${uuid()}`,
      questionIds: [
        `pain-body-${uuid()}`,
        `pain-body-${uuid()}`,
        `pain-body-${uuid()}`,
        `pain-body-${uuid()}`,
      ],
    },
    {
      topic: "Back Pain",
      case:
        "A 12 year-old male has complaints of right anterior thigh and knee pain. Symptoms began 3 weeks ago without mechanism. The symptoms are intermittent and appear to be worse with prolong sitting, rising, the first few steps of ambulation, and with ADLs requiring bending (bathing, grooming, dressing, etc.). When questioned, the patient does describe obstruction with his current condition.",
      id: `pain-back-${uuid()}`,
      questionIds: [
        `pain-back-${uuid()}`,
        `pain-back-${uuid()}`,
        `pain-back-${uuid()}`,
        `pain-back-${uuid()}`,
      ],
    },
    {
      topic: "Leg Pain",
      case:
        "A 50 year-old male has complaints of right anterior thigh and knee pain. Symptoms began 3 weeks ago without mechanism. The symptoms are intermittent and appear to be worse with prolong sitting, rising, the first few steps of ambulation, and with ADLs requiring bending (bathing, grooming, dressing, etc.). When questioned, the patient does describe obstruction with his current condition.",
      id: `pain-leg-${uuid()}`,
      questionIds: [
        `pain-leg-${uuid()}`,
        `pain-leg-${uuid()}`,
        `pain-leg-${uuid()}`,
        `pain-leg-${uuid()}`,
      ],
    },
    {
      topic: "Chest Pain",
      case:
        "A 32 year-old male has complaints of right anterior thigh and knee pain. Symptoms began 3 weeks ago without mechanism. The symptoms are intermittent and appear to be worse with prolong sitting, rising, the first few steps of ambulation, and with ADLs requiring bending (bathing, grooming, dressing, etc.). When questioned, the patient does describe obstruction with his current condition.",
      id: `pain-chest-${uuid()}`,
      questionIds: [
        `pain-chest-${uuid()}`,
        `pain-chest-${uuid()}`,
        `pain-chest-${uuid()}`,
        `pain-chest-${uuid()}`,
      ],
    },
    {
      topic: "Leg Pain",
      case:
        "A 50 year-old male has complaints of right anterior thigh and knee pain. Symptoms began 3 weeks ago without mechanism. The symptoms are intermittent and appear to be worse with prolong sitting, rising, the first few steps of ambulation, and with ADLs requiring bending (bathing, grooming, dressing, etc.). When questioned, the patient does describe obstruction with his current condition.",
      id: `pain-leg-${uuid()}`,
      questionIds: [
        `pain-leg-${uuid()}`,
        `pain-leg-${uuid()}`,
        `pain-leg-${uuid()}`,
        `pain-leg-${uuid()}`,
      ],
    },
    {
      topic: "Chest Pain",
      case:
        "A 32 year-old male has complaints of right anterior thigh and knee pain. Symptoms began 3 weeks ago without mechanism. The symptoms are intermittent and appear to be worse with prolong sitting, rising, the first few steps of ambulation, and with ADLs requiring bending (bathing, grooming, dressing, etc.). When questioned, the patient does describe obstruction with his current condition.",
      id: `pain-chest-${uuid()}`,
      questionIds: [
        `pain-chest-${uuid()}`,
        `pain-chest-${uuid()}`,
        `pain-chest-${uuid()}`,
        `pain-chest-${uuid()}`,
      ],
    },
  ];
  constructor() {}

  getAllQuestionGroups() {
    return [...this.questionGroups];
  }
}
