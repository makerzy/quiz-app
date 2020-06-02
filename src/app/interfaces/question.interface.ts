export interface Question {
  id: number;
  groupId: number;
  order: number;
  text: string;
  responseId?: string;
  correctAnswerId: string;
  isCorrect?: boolean;
  options: QuestionOption[];
}

export interface QuestionOption {
  id: string;
  text: string;
  info: string;
  userSelectionPercentage?: number;
}
