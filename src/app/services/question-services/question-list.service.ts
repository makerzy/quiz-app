import { Injectable } from "@angular/core";
import { v4 as uuid } from "uuid";
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
      id: uuid(),
      groupId: `pain-${uuid()}`,
      caseStudy: questions["caseStudy"],
      order: 1,
      text: questions["Text1"],
      correctAnswerId: "a1",
      options: [
        {
          id: "a1",
          text: options["a1Text"],
          info: options["a1Info"],
          userSelectionPercentage: 8,
          content: [
            {
              type: "video",
              order: 1,
              text: "(IMC 1006 - Funnel Movements: L/S Derangement).  ",
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_PJArticularDysfunction.mp4",
            },
          ],
        },
        {
          id: "a2",
          text: options["a2Text"],
          info: options["a2Info"],
          userSelectionPercentage: 9,
          content: [
            {
              type: "video",
              order: 1,
              text: "(IMC 1006 - Funnel Movements: L/S Stenosis).  ",
              url:
                "https://www.dropbox.com/s/29apw8ro6qtihw7/OAC_6_LSStenosis.mp4?dl=0",
            },
          ],
        },
        {
          id: "a3",
          text: options["a3Text"],
          info: options["a3Info"],
          userSelectionPercentage: 51,
          content: [
            {
              type: "video",
              order: 1,
              text: "(IMC 1006 - Funnel Movements: L/S ANR).",
              url:
                "https://www.dropbox.com/s/c5pi5zs7tu3fzl5/OAC_6_LSANR.mp4?dl=0 ",
            },
          ],
        },
        {
          id: "a4",
          text: options["a4Text"],
          info: options["a4Info"],
          userSelectionPercentage: 32,
          content: [
            {
              type: "video",
              order: 1,
              text: "(IMC 1006 - Peripheral Jt Contractile Dysfunction).  ",
              url:
                "https://www.dropbox.com/s/zh4x7pwoizmjpxt/OAC_6_PJContractileDysfunction.mp4?dl=0",
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      order: 2,
      groupId: `pain-${uuid()}`,
      correctAnswerId: "b3",
      text: questions["Text2"],
      options: [
        {
          id: "b1",
          text: options["b1Text"],
          info: options["b1Info"],
          userSelectionPercentage: 12,
          content: [
            {
              type: "video",
              order: 1,
              text: "(IMC 1006 - Baseline Highlights 1,3).",
              url:
                "https://www.dropbox.com/s/hz8cq2p2a1wxrfm/OAC_6_BaselineHighlights1.mp4?dl=0 ",
            },
            {
              type: "video",
              order: 2,
              text: "",
              url:
                "https://www.dropbox.com/s/i5rrl9x1jk71xjp/OAC_6_BaselineHighlights3.mp4?dl=0",
            },
          ],
        },
        {
          id: "b2",
          text: options["b2Text"],
          info: options["b2Info"],
          userSelectionPercentage: 29,
          content: [
            {
              type: "video",
              order: 1,
              text: "(IMC 1006 - Baseline Highlights 5).",
              url:
                "https://www.dropbox.com/s/dhfo471nfru1bne/OAC_6_BaselineHighlights5.mp4?dl=0",
            },
          ],
        },
        {
          id: "b3",
          text: options["b3Text"],
          info: options["b3Info"],
          userSelectionPercentage: 28,
          content: [
            {
              type: "video",
              order: 1,
              text: "(IMC 1006 - Baseline Highlights 2).",
              url:
                "https://www.dropbox.com/s/zyj22x90tucbkbq/OAC_6_BaselineHighlights2.mp4?dl=0",
            },
          ],
        },
        {
          id: "b4",
          text: options["b4Text"],
          info: options["b4Info"],
          userSelectionPercentage: 31,
          content: [
            {
              type: "video",
              order: 1,
              text: "(IMC 1006 - Baseline Highlights 2).",
              url: "(IMC 1006 - Baseline Highlights 2).",
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      order: 3,
      groupId: `pain-${uuid()}`,
      correctAnswerId: "c2",
      text: questions["Text3"],
      options: [
        {
          id: "c1",
          text: options["c1Text"],
          info: options["c1Info"],
          userSelectionPercentage: 24,
          content: [
            {
              type: "video",
              order: 1,
              text: "",
              url:
                "https://www.dropbox.com/s/0i7sps1m41tipyg/OAC_5_Funnel1.mp4?dl=0",
            },
          ],
        },
        {
          id: "c2",
          text: options["c2Text"],
          info: options["c2Info"],
          userSelectionPercentage: 17,
          content: [
            {
              type: "video",
              order: 1,
              text: "",
              url:
                "https://www.dropbox.com/s/te8si03i5shndht/OAC_5_Funnel2.mp4?dl=0",
            },
          ],
        },
        {
          id: "c3",
          text: options["c3Text"],
          info: options["c3Info"],
          userSelectionPercentage: 18,
          content: [
            {
              type: "video",
              order: 1,
              text: "IMC 1009 - Knee Introduction and Spine Screen.",
              url:
                "https://www.dropbox.com/s/3tmrmy92zoadea8/IntroSpineScreen.mp4?dl=0",
            },
          ],
        },
        {
          id: "c4",
          text: options["c4Text"],
          info: options["c4Info"],
          userSelectionPercentage: 41,
          content: [
            {
              type: "video",
              order: 1,
              text: "",
              url: "",
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      order: 4,
      groupId: `pain-${uuid()}`,
      correctAnswerId: "d3",
      text: questions["Text4"],
      options: [
        {
          id: "d1",
          text: options["d1Text"],
          info: options["d1Info"],
          userSelectionPercentage: 24,
          content: [
            {
              type: "video",
              order: 1,
              text: "",
              url: "",
            },
          ],
        },
        {
          id: "d2",
          text: options["d2Text"],
          info: options["d2Info"],
          userSelectionPercentage: 17,
          content: [
            {
              type: "video",
              order: 1,
              text: "",
              url: "",
            },
          ],
        },
        {
          id: "d3",
          text: options["d3Text"],
          info: options["d3Info"],
          userSelectionPercentage: 18,
          content: [
            {
              type: "video",
              order: 1,
              text: "",
              url: "",
            },
          ],
        },
        {
          id: "d4",
          text: options["d4Text"],
          info: options["d4Info"],
          userSelectionPercentage: 41,
          content: [
            {
              type: "video",
              order: 1,
              text: "",
              url: "",
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  getQuestionsByGroupId(id: string) {
    return this.questionList.filter(
      ({ groupId }) => groupId.split("-")[0] === id
    );
  }

  getQuestionById(_id: string) {
    return this.questionList.find(({ id }) => id === _id);
  }

  getAllQuestions() {
    return [...this.questionList];
  }
}
