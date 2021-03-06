import { Injectable } from "@angular/core";
import { Question } from "src/app/interfaces/question.interface";
import { translations } from "../language-service/translations";
const questions = translations.en.questions;
const options = translations.en.options;
const shoulderPainOptions = translations.en.shoulderPain_options;

@Injectable({
  providedIn: "root",
})
export class QuestionListService {
  questionList: Question[] = [
    {
      id: "1",
      groupId: "thighKneePain_01",
      order: 1,
      text: questions["Text1"],
      correctAnswerId: "a1",
      bonusButtonText: options["bonusButtonText"],
      bonusContent: [
        {
          type: "video",
          order: 1,
          text: options["bonusContentText_a1"],
          url: "https://education-videos.s3.amazonaws.com/OAC_5_Funnel1.mp4",
        },
        {
          type: "video",
          order: 2,
          text: options["bonusContentText_a2"],
          url: "https://education-videos.s3.amazonaws.com/OAC_5_Funnel2.mp4",
        },
      ],
      options: [
        {
          id: "a1",
          text: options["a1Text"],
          info: options["a1Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_a1"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_LSFunnel.mp4",
            },
          ],
          buttonText: options["a1_buttonText"],
        },
        {
          id: "a2",
          text: options["a2Text"],
          info: options["a2Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_a2"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_LSStenosis.mp4",
            },
          ],
          buttonText: options["a2_buttonText"],
        },
        {
          id: "a3",
          text: options["a3Text"],
          info: options["a3Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_a3"],
              url: "https://education-videos.s3.amazonaws.com/OAC_6_LSANR.mp4",
            },
          ],
          buttonText: options["a3_buttonText"],
        },
        {
          id: "a4",
          text: options["a4Text"],
          info: options["a4Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_a4"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_PJContractileDysfunction.mp4",
            },
          ],
          buttonText: options["a4_buttonText"],
        },
      ],
    },
    {
      id: "2",
      order: 2,
      groupId: "thighKneePain_01",
      correctAnswerId: "b3",
      text: questions["Text2"],
      bonusContent: [],
      options: [
        {
          id: "b1",
          text: options["b1Text"],
          info: options["b1Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_b1"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_BaselineHighlights1.mp4",
            },
            {
              type: "video",
              order: 2,
              text: options["contentText_b1_2"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_BaselineHighlights3.mp4",
            },
          ],
          buttonText: options["b1_buttonText"],
        },
        {
          id: "b2",
          text: options["b2Text"],
          info: options["b2Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_b2"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_BaselineHighlights5.mp4",
            },
          ],
          buttonText: options["b2_buttonText"],
        },
        {
          id: "b3",
          text: options["b3Text"],
          info: options["b3Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_b3"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_BaselineHighlights2.mp4",
            },
          ],
          buttonText: options["b3_buttonText"],
        },
        {
          id: "b4",
          text: options["b4Text"],
          info: options["b4Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_b4"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_BaselineHighlights2.mp4",
            },
          ],
          buttonText: options["b4_buttonText"],
        },
      ],
    },
    {
      id: "3",
      order: 3,
      groupId: "thighKneePain_01",
      correctAnswerId: "c2",
      text: questions["Text3"],
      bonusButtonText: options["bonusButtonText"],
      bonusContent: [
        {
          type: "video",
          order: 1,
          text: options["bonusContentText_c1"],
          url:
            "https://education-videos.s3.amazonaws.com/OAC_9_KneeIntroWithSpineScreen.mp4",
        },
      ],
      options: [
        {
          id: "c1",
          text: options["c1Text"],
          info: options["c1Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_c1"],
              url:
                "https://education-videos.s3.amazonaws.com/SGIS_R(Final).mp4",
            },
          ],
          buttonText: options["c1_buttonText"],
        },
        {
          id: "c2",
          text: options["c2Text"],
          info: options["c2Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_c2"],
              url:
                "https://education-videos.s3.amazonaws.com/Lumbar-EIL-homeinterventions(final).mp4",
            },
          ],
          buttonText: options["c2_buttonText"],
        },
        {
          id: "c3",
          text: options["c3Text"],
          info: options["c3Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_c3"],
              url:
                "https://education-videos.s3.amazonaws.com/Knee_Ext_Unloaded(Final).mp4",
            },
          ],
          buttonText: options["c3_buttonText"],
        },
        {
          id: "c4",
          text: options["c4Text"],
          info: options["c4Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_c4"],
              url:
                "https://education-videos.s3.amazonaws.com/Lumbar-ExtFulcrum-homeinterventions(Final).mp4",
            },
          ],
          buttonText: options["c4_buttonText"],
        },
      ],
    },
    {
      id: "4",
      order: 4,
      groupId: "thighKneePain_01",
      correctAnswerId: "d3",
      text: questions["Text4"],
      bonusContent: [],
      options: [
        {
          id: "d1",
          text: options["d1Text"],
          info: options["d1Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_d1"],
              url:
                "https://education-videos.s3.amazonaws.com/SGIS_R(Final).mp4",
            },
          ],
          buttonText: options["d1_buttonText"],
        },
        {
          id: "d2",
          text: options["d2Text"],
          info: options["d2Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_d2"],
              url:
                "https://education-videos.s3.amazonaws.com/Manual_Shift_Correction_R.mp4",
            },
          ],
          buttonText: options["d2_buttonText"],
        },
        {
          id: "d3",
          text: options["d3Text"],
          info: options["d3Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: options["contentText_d3"],
              url:
                "https://education-videos.s3.amazonaws.com/UpperLumbar-OP(Final).mp4",
            },
          ],
          buttonText: options["d3_buttonText"],
        },
        {
          id: "d4",
          text: options["d4Text"],
          info: options["d4Info"],
          userSelectionPercentage: 0,
          content: [],
          buttonText: options["d4_buttonText"],
        },
      ],
    },
    /************************************************************************************************************************************************************************************************************************************************************************######################################################################################################################################*/
    {
      id: "1",
      groupId: "shoulderPain_01",
      order: 1,
      text: questions["Text1_shoulderPain"],
      correctAnswerId: "a3",
      bonusButtonText: shoulderPainOptions["bonusButtonText"],
      bonusContent: [
        {
          type: "video",
          order: 1,
          text: shoulderPainOptions["bonusContentText_a1"],
          url: "https://education-videos.s3.amazonaws.com/OAC_5_Funnel1.mp4",
        },
        {
          type: "video",
          order: 2,
          text: shoulderPainOptions["bonusContentText_a2"],
          url: "https://education-videos.s3.amazonaws.com/OAC_5_Funnel2.mp4",
        },
      ],
      options: [
        {
          id: "a1",
          text: shoulderPainOptions["a1Text"],
          info: shoulderPainOptions["a1Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_a1"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_LSFunnel.mp4",
            },
          ],
          buttonText: shoulderPainOptions["a1_buttonText"],
        },
        {
          id: "a2",
          text: shoulderPainOptions["a2Text"],
          info: shoulderPainOptions["a2Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_a2"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_LSStenosis.mp4",
            },
          ],
          buttonText: shoulderPainOptions["a2_buttonText"],
        },
        {
          id: "a3",
          text: shoulderPainOptions["a3Text"],
          info: shoulderPainOptions["a3Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_a3"],
              url: "https://education-videos.s3.amazonaws.com/OAC_6_LSANR.mp4",
            },
          ],
          buttonText: shoulderPainOptions["a3_buttonText"],
        },
        {
          id: "a4",
          text: shoulderPainOptions["a4Text"],
          info: shoulderPainOptions["a4Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_a4"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_PJContractileDysfunction.mp4",
            },
          ],
          buttonText: shoulderPainOptions["a4_buttonText"],
        },
      ],
    },
    {
      id: "2",
      order: 2,
      groupId: "shoulderPain_01",
      correctAnswerId: "b3",
      text: questions["Text2_shoulderPain"],
      bonusContent: [],
      options: [
        {
          id: "b1",
          text: shoulderPainOptions["b1Text"],
          info: shoulderPainOptions["b1Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_b1"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_BaselineHighlights1.mp4",
            },
            {
              type: "video",
              order: 2,
              text: shoulderPainOptions["contentText_b1_2"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_BaselineHighlights3.mp4",
            },
          ],
          buttonText: shoulderPainOptions["b1_buttonText"],
        },
        {
          id: "b2",
          text: shoulderPainOptions["b2Text"],
          info: shoulderPainOptions["b2Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_b2"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_BaselineHighlights5.mp4",
            },
          ],
          buttonText: shoulderPainOptions["b2_buttonText"],
        },
        {
          id: "b3",
          text: shoulderPainOptions["b3Text"],
          info: shoulderPainOptions["b3Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_b3"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_BaselineHighlights2.mp4",
            },
          ],
          buttonText: shoulderPainOptions["b3_buttonText"],
        },
        {
          id: "b4",
          text: shoulderPainOptions["b4Text"],
          info: shoulderPainOptions["b4Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_b4"],
              url:
                "https://education-videos.s3.amazonaws.com/OAC_6_BaselineHighlights2.mp4",
            },
          ],
          buttonText: shoulderPainOptions["b4_buttonText"],
        },
      ],
    },
    {
      id: "3",
      order: 3,
      groupId: "shoulderPain_01",
      correctAnswerId: "c2",
      text: questions["Text3_shoulderPain"],
      bonusButtonText: shoulderPainOptions["bonusButtonText"],
      bonusContent: [
        {
          type: "video",
          order: 1,
          text: shoulderPainOptions["bonusContentText_c1"],
          url:
            "https://education-videos.s3.amazonaws.com/OAC_9_KneeIntroWithSpineScreen.mp4",
        },
      ],
      options: [
        {
          id: "c1",
          text: shoulderPainOptions["c1Text"],
          info: shoulderPainOptions["c1Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_c1"],
              url:
                "https://education-videos.s3.amazonaws.com/SGIS_R(Final).mp4",
            },
          ],
          buttonText: shoulderPainOptions["c1_buttonText"],
        },
        {
          id: "c2",
          text: shoulderPainOptions["c2Text"],
          info: shoulderPainOptions["c2Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_c2"],
              url:
                "https://education-videos.s3.amazonaws.com/Lumbar-EIL-homeinterventions(final).mp4",
            },
          ],
          buttonText: shoulderPainOptions["c2_buttonText"],
        },
        {
          id: "c3",
          text: shoulderPainOptions["c3Text"],
          info: shoulderPainOptions["c3Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_c3"],
              url:
                "https://education-videos.s3.amazonaws.com/Knee_Ext_Unloaded(Final).mp4",
            },
          ],
          buttonText: shoulderPainOptions["c3_buttonText"],
        },
        {
          id: "c4",
          text: shoulderPainOptions["c4Text"],
          info: shoulderPainOptions["c4Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_c4"],
              url:
                "https://education-videos.s3.amazonaws.com/Lumbar-ExtFulcrum-homeinterventions(Final).mp4",
            },
          ],
          buttonText: shoulderPainOptions["c4_buttonText"],
        },
      ],
    },
    {
      id: "4",
      order: 4,
      groupId: "shoulderPain_01",
      correctAnswerId: "d1",
      text: questions["Text4_shoulderPain"],
      bonusContent: [],
      questionExtrasTop: [
        questions["Text4_shoulderPain_extra_1"],
        questions["Text4_shoulderPain_extra_2"],
        questions["Text4_shoulderPain_extra_3"],
        questions["Text4_shoulderPain_extra_4"],
        questions["Text4_shoulderPain_extra_5"],
      ],
      options: [
        {
          id: "d1",
          text: shoulderPainOptions["d1Text"],
          info: shoulderPainOptions["d1Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_d1"],
              url:
                "https://education-videos.s3.amazonaws.com/SGIS_R(Final).mp4",
            },
          ],
          buttonText: shoulderPainOptions["d1_buttonText"],
        },
        {
          id: "d2",
          text: shoulderPainOptions["d2Text"],
          info: shoulderPainOptions["d2Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_d2"],
              url:
                "https://education-videos.s3.amazonaws.com/Manual_Shift_Correction_R.mp4",
            },
          ],
          buttonText: shoulderPainOptions["d2_buttonText"],
        },
        {
          id: "d3",
          text: shoulderPainOptions["d3Text"],
          info: shoulderPainOptions["d3Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_d3"],
              url:
                "https://education-videos.s3.amazonaws.com/UpperLumbar-OP(Final).mp4",
            },
          ],
          buttonText: shoulderPainOptions["d3_buttonText"],
        },
        {
          id: "d4",
          text: shoulderPainOptions["d4Text"],
          info: shoulderPainOptions["d4Info"],
          userSelectionPercentage: 0,
          content: [],
          buttonText: shoulderPainOptions["d4_buttonText"],
        },
      ],
    },
    {
      id: "5",
      order: 5,
      groupId: "shoulderPain_01",
      correctAnswerId: "e2",
      text: questions["Text5_shoulderPain"],
      bonusContent: [],
      options: [
        {
          id: "e1",
          text: shoulderPainOptions["d1Text"],
          info: shoulderPainOptions["d1Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_d1"],
              url:
                "https://education-videos.s3.amazonaws.com/SGIS_R(Final).mp4",
            },
          ],
          buttonText: shoulderPainOptions["d1_buttonText"],
        },
        {
          id: "e2",
          text: shoulderPainOptions["d2Text"],
          info: shoulderPainOptions["d2Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_d2"],
              url:
                "https://education-videos.s3.amazonaws.com/Manual_Shift_Correction_R.mp4",
            },
          ],
          buttonText: shoulderPainOptions["d2_buttonText"],
        },
        {
          id: "e3",
          text: shoulderPainOptions["d3Text"],
          info: shoulderPainOptions["d3Info"],
          userSelectionPercentage: 0,
          content: [
            {
              type: "video",
              order: 1,
              text: shoulderPainOptions["contentText_d3"],
              url:
                "https://education-videos.s3.amazonaws.com/UpperLumbar-OP(Final).mp4",
            },
          ],
          buttonText: shoulderPainOptions["d3_buttonText"],
        },
        {
          id: "e4",
          text: shoulderPainOptions["d4Text"],
          info: shoulderPainOptions["d4Info"],
          userSelectionPercentage: 0,
          content: [],
          buttonText: shoulderPainOptions["d4_buttonText"],
        },
      ],
    },
  ];

  constructor() {}

  getQuestionsByGroupId(id: string) {
    return this.questionList.filter(({ groupId }) => groupId === id);
  }

  getQuestionById(_id: string) {
    return this.questionList.find(({ id }) => id === _id);
  }

  getAllQuestions() {
    return [...this.questionList];
  }
}
