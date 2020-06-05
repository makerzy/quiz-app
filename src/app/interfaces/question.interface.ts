export interface Question {
  id: string;
  groupId: string;
  caseStudy?: string;
  order: number;
  text: string;
  responseId?: string;
  correctAnswerId: string;
  isCorrect?: boolean;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  info: string;
  userSelectionPercentage?: number;
  content?: ContentObject[];
}

export interface ContentObject {
  type: "video" | "youtube" | "image" | "text" | "header" | "subHeader";
  order: number;
  text?: string;
  url?: string;
}
