export interface QuestionGroup {
  topic: string;
  case: string;
  id: string;
  questionIds: string[];
  questions?: Question[];
}

export interface Question {
  id: string;
  groupId: string;
  order: number;
  text: string;
  responseId?: string;
  correctAnswerId: string;
  isCorrect?: boolean;
  options: Option[];
  bonusContent?: ContentObject[];
  bonusButtonText?: string;
}

export interface Option {
  id: string;
  text: string;
  info: string;
  userSelectionPercentage?: number;
  content?: ContentObject[];
  buttonText: string;
}

export interface ContentObject {
  type: "video" | "youtube" | "image" | "text" | "header" | "subHeader";
  order: number;
  text?: string;
  url?: string;
}

export interface URLParams {
  questionGroupId?: string;
  userEmail?: string;
  firstName?: string;
  lastName?: string;
}
