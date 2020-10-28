/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateQuizEventInput = {
  id?: string | null;
  caseId: string;
  instanceId: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  userEmail?: string | null;
  first?: string | null;
  last?: string | null;
  finished?: boolean | null;
  score?: number | null;
};

export type ModelQuizEventConditionInput = {
  caseId?: ModelStringInput | null;
  instanceId?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  userEmail?: ModelStringInput | null;
  first?: ModelStringInput | null;
  last?: ModelStringInput | null;
  finished?: ModelBooleanInput | null;
  score?: ModelIntInput | null;
  and?: Array<ModelQuizEventConditionInput | null> | null;
  or?: Array<ModelQuizEventConditionInput | null> | null;
  not?: ModelQuizEventConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateQuizEventInput = {
  id: string;
  caseId?: string | null;
  instanceId?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  userEmail?: string | null;
  first?: string | null;
  last?: string | null;
  finished?: boolean | null;
  score?: number | null;
};

export type DeleteQuizEventInput = {
  id?: string | null;
};

export type CreateAnsweredQuestionsInput = {
  id?: string | null;
  instanceId: string;
  caseId: string;
  questionsId: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  optionId?: string | null;
  isCorrect?: boolean | null;
  questionData?: Array<QuestionDataInput | null> | null;
};

export type QuestionDataInput = {
  questionId?: string | null;
  selectedOptionId?: string | null;
  correctAnswerId?: string | null;
};

export type ModelAnsweredQuestionsConditionInput = {
  instanceId?: ModelStringInput | null;
  caseId?: ModelStringInput | null;
  questionsId?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  optionId?: ModelStringInput | null;
  isCorrect?: ModelBooleanInput | null;
  and?: Array<ModelAnsweredQuestionsConditionInput | null> | null;
  or?: Array<ModelAnsweredQuestionsConditionInput | null> | null;
  not?: ModelAnsweredQuestionsConditionInput | null;
};

export type UpdateAnsweredQuestionsInput = {
  id: string;
  instanceId?: string | null;
  caseId?: string | null;
  questionsId?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  optionId?: string | null;
  isCorrect?: boolean | null;
  questionData?: Array<QuestionDataInput | null> | null;
};

export type DeleteAnsweredQuestionsInput = {
  id?: string | null;
};

export type ModelQuizEventFilterInput = {
  id?: ModelIDInput | null;
  caseId?: ModelStringInput | null;
  instanceId?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  userEmail?: ModelStringInput | null;
  first?: ModelStringInput | null;
  last?: ModelStringInput | null;
  finished?: ModelBooleanInput | null;
  score?: ModelIntInput | null;
  and?: Array<ModelQuizEventFilterInput | null> | null;
  or?: Array<ModelQuizEventFilterInput | null> | null;
  not?: ModelQuizEventFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelAnsweredQuestionsFilterInput = {
  id?: ModelIDInput | null;
  instanceId?: ModelStringInput | null;
  caseId?: ModelStringInput | null;
  questionsId?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  optionId?: ModelStringInput | null;
  isCorrect?: ModelBooleanInput | null;
  and?: Array<ModelAnsweredQuestionsFilterInput | null> | null;
  or?: Array<ModelAnsweredQuestionsFilterInput | null> | null;
  not?: ModelAnsweredQuestionsFilterInput | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type CreateQuizEventMutation = {
  __typename: "QuizEvent";
  id: string;
  caseId: string;
  instanceId: string;
  createdAt: string | null;
  updatedAt: string | null;
  userEmail: string | null;
  first: string | null;
  last: string | null;
  answeredQuestions: {
    __typename: "ModelAnsweredQuestionsConnection";
    items: Array<{
      __typename: "AnsweredQuestions";
      id: string;
      instanceId: string;
      caseId: string;
      questionsId: string;
      createdAt: string | null;
      updatedAt: string | null;
      optionId: string | null;
      isCorrect: boolean | null;
      questionData: Array<{
        __typename: "QuestionData";
        questionId: string | null;
        selectedOptionId: string | null;
        correctAnswerId: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  finished: boolean | null;
  score: number | null;
};

export type UpdateQuizEventMutation = {
  __typename: "QuizEvent";
  id: string;
  caseId: string;
  instanceId: string;
  createdAt: string | null;
  updatedAt: string | null;
  userEmail: string | null;
  first: string | null;
  last: string | null;
  answeredQuestions: {
    __typename: "ModelAnsweredQuestionsConnection";
    items: Array<{
      __typename: "AnsweredQuestions";
      id: string;
      instanceId: string;
      caseId: string;
      questionsId: string;
      createdAt: string | null;
      updatedAt: string | null;
      optionId: string | null;
      isCorrect: boolean | null;
      questionData: Array<{
        __typename: "QuestionData";
        questionId: string | null;
        selectedOptionId: string | null;
        correctAnswerId: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  finished: boolean | null;
  score: number | null;
};

export type DeleteQuizEventMutation = {
  __typename: "QuizEvent";
  id: string;
  caseId: string;
  instanceId: string;
  createdAt: string | null;
  updatedAt: string | null;
  userEmail: string | null;
  first: string | null;
  last: string | null;
  answeredQuestions: {
    __typename: "ModelAnsweredQuestionsConnection";
    items: Array<{
      __typename: "AnsweredQuestions";
      id: string;
      instanceId: string;
      caseId: string;
      questionsId: string;
      createdAt: string | null;
      updatedAt: string | null;
      optionId: string | null;
      isCorrect: boolean | null;
      questionData: Array<{
        __typename: "QuestionData";
        questionId: string | null;
        selectedOptionId: string | null;
        correctAnswerId: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  finished: boolean | null;
  score: number | null;
};

export type CreateAnsweredQuestionsMutation = {
  __typename: "AnsweredQuestions";
  id: string;
  instanceId: string;
  caseId: string;
  questionsId: string;
  createdAt: string | null;
  updatedAt: string | null;
  optionId: string | null;
  isCorrect: boolean | null;
  questionData: Array<{
    __typename: "QuestionData";
    questionId: string | null;
    selectedOptionId: string | null;
    correctAnswerId: string | null;
  } | null> | null;
};

export type UpdateAnsweredQuestionsMutation = {
  __typename: "AnsweredQuestions";
  id: string;
  instanceId: string;
  caseId: string;
  questionsId: string;
  createdAt: string | null;
  updatedAt: string | null;
  optionId: string | null;
  isCorrect: boolean | null;
  questionData: Array<{
    __typename: "QuestionData";
    questionId: string | null;
    selectedOptionId: string | null;
    correctAnswerId: string | null;
  } | null> | null;
};

export type DeleteAnsweredQuestionsMutation = {
  __typename: "AnsweredQuestions";
  id: string;
  instanceId: string;
  caseId: string;
  questionsId: string;
  createdAt: string | null;
  updatedAt: string | null;
  optionId: string | null;
  isCorrect: boolean | null;
  questionData: Array<{
    __typename: "QuestionData";
    questionId: string | null;
    selectedOptionId: string | null;
    correctAnswerId: string | null;
  } | null> | null;
};

export type GetQuizEventQuery = {
  __typename: "QuizEvent";
  id: string;
  caseId: string;
  instanceId: string;
  createdAt: string | null;
  updatedAt: string | null;
  userEmail: string | null;
  first: string | null;
  last: string | null;
  answeredQuestions: {
    __typename: "ModelAnsweredQuestionsConnection";
    items: Array<{
      __typename: "AnsweredQuestions";
      id: string;
      instanceId: string;
      caseId: string;
      questionsId: string;
      createdAt: string | null;
      updatedAt: string | null;
      optionId: string | null;
      isCorrect: boolean | null;
      questionData: Array<{
        __typename: "QuestionData";
        questionId: string | null;
        selectedOptionId: string | null;
        correctAnswerId: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  finished: boolean | null;
  score: number | null;
};

export type ListQuizEventsQuery = {
  __typename: "ModelQuizEventConnection";
  items: Array<{
    __typename: "QuizEvent";
    id: string;
    caseId: string;
    instanceId: string;
    createdAt: string | null;
    updatedAt: string | null;
    userEmail: string | null;
    first: string | null;
    last: string | null;
    answeredQuestions: {
      __typename: "ModelAnsweredQuestionsConnection";
      items: Array<{
        __typename: "AnsweredQuestions";
        id: string;
        instanceId: string;
        caseId: string;
        questionsId: string;
        createdAt: string | null;
        updatedAt: string | null;
        optionId: string | null;
        isCorrect: boolean | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    finished: boolean | null;
    score: number | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetAnsweredQuestionsQuery = {
  __typename: "AnsweredQuestions";
  id: string;
  instanceId: string;
  caseId: string;
  questionsId: string;
  createdAt: string | null;
  updatedAt: string | null;
  optionId: string | null;
  isCorrect: boolean | null;
  questionData: Array<{
    __typename: "QuestionData";
    questionId: string | null;
    selectedOptionId: string | null;
    correctAnswerId: string | null;
  } | null> | null;
};

export type ListAnsweredQuestionssQuery = {
  __typename: "ModelAnsweredQuestionsConnection";
  items: Array<{
    __typename: "AnsweredQuestions";
    id: string;
    instanceId: string;
    caseId: string;
    questionsId: string;
    createdAt: string | null;
    updatedAt: string | null;
    optionId: string | null;
    isCorrect: boolean | null;
    questionData: Array<{
      __typename: "QuestionData";
      questionId: string | null;
      selectedOptionId: string | null;
      correctAnswerId: string | null;
    } | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type QuizEventsByCaseIdAndCreatedAtQuery = {
  __typename: "ModelQuizEventConnection";
  items: Array<{
    __typename: "QuizEvent";
    id: string;
    caseId: string;
    instanceId: string;
    createdAt: string | null;
    updatedAt: string | null;
    userEmail: string | null;
    first: string | null;
    last: string | null;
    answeredQuestions: {
      __typename: "ModelAnsweredQuestionsConnection";
      items: Array<{
        __typename: "AnsweredQuestions";
        id: string;
        instanceId: string;
        caseId: string;
        questionsId: string;
        createdAt: string | null;
        updatedAt: string | null;
        optionId: string | null;
        isCorrect: boolean | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    finished: boolean | null;
    score: number | null;
  } | null> | null;
  nextToken: string | null;
};

export type AnsweredQuestionsByCaseIdAndCreatedAtQuery = {
  __typename: "ModelAnsweredQuestionsConnection";
  items: Array<{
    __typename: "AnsweredQuestions";
    id: string;
    instanceId: string;
    caseId: string;
    questionsId: string;
    createdAt: string | null;
    updatedAt: string | null;
    optionId: string | null;
    isCorrect: boolean | null;
    questionData: Array<{
      __typename: "QuestionData";
      questionId: string | null;
      selectedOptionId: string | null;
      correctAnswerId: string | null;
    } | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateQuizEventSubscription = {
  __typename: "QuizEvent";
  id: string;
  caseId: string;
  instanceId: string;
  createdAt: string | null;
  updatedAt: string | null;
  userEmail: string | null;
  first: string | null;
  last: string | null;
  answeredQuestions: {
    __typename: "ModelAnsweredQuestionsConnection";
    items: Array<{
      __typename: "AnsweredQuestions";
      id: string;
      instanceId: string;
      caseId: string;
      questionsId: string;
      createdAt: string | null;
      updatedAt: string | null;
      optionId: string | null;
      isCorrect: boolean | null;
      questionData: Array<{
        __typename: "QuestionData";
        questionId: string | null;
        selectedOptionId: string | null;
        correctAnswerId: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  finished: boolean | null;
  score: number | null;
};

export type OnUpdateQuizEventSubscription = {
  __typename: "QuizEvent";
  id: string;
  caseId: string;
  instanceId: string;
  createdAt: string | null;
  updatedAt: string | null;
  userEmail: string | null;
  first: string | null;
  last: string | null;
  answeredQuestions: {
    __typename: "ModelAnsweredQuestionsConnection";
    items: Array<{
      __typename: "AnsweredQuestions";
      id: string;
      instanceId: string;
      caseId: string;
      questionsId: string;
      createdAt: string | null;
      updatedAt: string | null;
      optionId: string | null;
      isCorrect: boolean | null;
      questionData: Array<{
        __typename: "QuestionData";
        questionId: string | null;
        selectedOptionId: string | null;
        correctAnswerId: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  finished: boolean | null;
  score: number | null;
};

export type OnDeleteQuizEventSubscription = {
  __typename: "QuizEvent";
  id: string;
  caseId: string;
  instanceId: string;
  createdAt: string | null;
  updatedAt: string | null;
  userEmail: string | null;
  first: string | null;
  last: string | null;
  answeredQuestions: {
    __typename: "ModelAnsweredQuestionsConnection";
    items: Array<{
      __typename: "AnsweredQuestions";
      id: string;
      instanceId: string;
      caseId: string;
      questionsId: string;
      createdAt: string | null;
      updatedAt: string | null;
      optionId: string | null;
      isCorrect: boolean | null;
      questionData: Array<{
        __typename: "QuestionData";
        questionId: string | null;
        selectedOptionId: string | null;
        correctAnswerId: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  finished: boolean | null;
  score: number | null;
};

export type OnCreateAnsweredQuestionsSubscription = {
  __typename: "AnsweredQuestions";
  id: string;
  instanceId: string;
  caseId: string;
  questionsId: string;
  createdAt: string | null;
  updatedAt: string | null;
  optionId: string | null;
  isCorrect: boolean | null;
  questionData: Array<{
    __typename: "QuestionData";
    questionId: string | null;
    selectedOptionId: string | null;
    correctAnswerId: string | null;
  } | null> | null;
};

export type OnUpdateAnsweredQuestionsSubscription = {
  __typename: "AnsweredQuestions";
  id: string;
  instanceId: string;
  caseId: string;
  questionsId: string;
  createdAt: string | null;
  updatedAt: string | null;
  optionId: string | null;
  isCorrect: boolean | null;
  questionData: Array<{
    __typename: "QuestionData";
    questionId: string | null;
    selectedOptionId: string | null;
    correctAnswerId: string | null;
  } | null> | null;
};

export type OnDeleteAnsweredQuestionsSubscription = {
  __typename: "AnsweredQuestions";
  id: string;
  instanceId: string;
  caseId: string;
  questionsId: string;
  createdAt: string | null;
  updatedAt: string | null;
  optionId: string | null;
  isCorrect: boolean | null;
  questionData: Array<{
    __typename: "QuestionData";
    questionId: string | null;
    selectedOptionId: string | null;
    correctAnswerId: string | null;
  } | null> | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateQuizEvent(
    input: CreateQuizEventInput,
    condition?: ModelQuizEventConditionInput
  ): Promise<CreateQuizEventMutation> {
    const statement = `mutation CreateQuizEvent($input: CreateQuizEventInput!, $condition: ModelQuizEventConditionInput) {
        createQuizEvent(input: $input, condition: $condition) {
          __typename
          id
          caseId
          instanceId
          createdAt
          updatedAt
          userEmail
          first
          last
          answeredQuestions {
            __typename
            items {
              __typename
              id
              instanceId
              caseId
              questionsId
              createdAt
              updatedAt
              optionId
              isCorrect
              questionData {
                __typename
                questionId
                selectedOptionId
                correctAnswerId
              }
            }
            nextToken
          }
          finished
          score
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuizEventMutation>response.data.createQuizEvent;
  }
  async UpdateQuizEvent(
    input: UpdateQuizEventInput,
    condition?: ModelQuizEventConditionInput
  ): Promise<UpdateQuizEventMutation> {
    const statement = `mutation UpdateQuizEvent($input: UpdateQuizEventInput!, $condition: ModelQuizEventConditionInput) {
        updateQuizEvent(input: $input, condition: $condition) {
          __typename
          id
          caseId
          instanceId
          createdAt
          updatedAt
          userEmail
          first
          last
          answeredQuestions {
            __typename
            items {
              __typename
              id
              instanceId
              caseId
              questionsId
              createdAt
              updatedAt
              optionId
              isCorrect
              questionData {
                __typename
                questionId
                selectedOptionId
                correctAnswerId
              }
            }
            nextToken
          }
          finished
          score
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuizEventMutation>response.data.updateQuizEvent;
  }
  async DeleteQuizEvent(
    input: DeleteQuizEventInput,
    condition?: ModelQuizEventConditionInput
  ): Promise<DeleteQuizEventMutation> {
    const statement = `mutation DeleteQuizEvent($input: DeleteQuizEventInput!, $condition: ModelQuizEventConditionInput) {
        deleteQuizEvent(input: $input, condition: $condition) {
          __typename
          id
          caseId
          instanceId
          createdAt
          updatedAt
          userEmail
          first
          last
          answeredQuestions {
            __typename
            items {
              __typename
              id
              instanceId
              caseId
              questionsId
              createdAt
              updatedAt
              optionId
              isCorrect
              questionData {
                __typename
                questionId
                selectedOptionId
                correctAnswerId
              }
            }
            nextToken
          }
          finished
          score
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuizEventMutation>response.data.deleteQuizEvent;
  }
  async CreateAnsweredQuestions(
    input: CreateAnsweredQuestionsInput,
    condition?: ModelAnsweredQuestionsConditionInput
  ): Promise<CreateAnsweredQuestionsMutation> {
    const statement = `mutation CreateAnsweredQuestions($input: CreateAnsweredQuestionsInput!, $condition: ModelAnsweredQuestionsConditionInput) {
        createAnsweredQuestions(input: $input, condition: $condition) {
          __typename
          id
          instanceId
          caseId
          questionsId
          createdAt
          updatedAt
          optionId
          isCorrect
          questionData {
            __typename
            questionId
            selectedOptionId
            correctAnswerId
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAnsweredQuestionsMutation>(
      response.data.createAnsweredQuestions
    );
  }
  async UpdateAnsweredQuestions(
    input: UpdateAnsweredQuestionsInput,
    condition?: ModelAnsweredQuestionsConditionInput
  ): Promise<UpdateAnsweredQuestionsMutation> {
    const statement = `mutation UpdateAnsweredQuestions($input: UpdateAnsweredQuestionsInput!, $condition: ModelAnsweredQuestionsConditionInput) {
        updateAnsweredQuestions(input: $input, condition: $condition) {
          __typename
          id
          instanceId
          caseId
          questionsId
          createdAt
          updatedAt
          optionId
          isCorrect
          questionData {
            __typename
            questionId
            selectedOptionId
            correctAnswerId
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAnsweredQuestionsMutation>(
      response.data.updateAnsweredQuestions
    );
  }
  async DeleteAnsweredQuestions(
    input: DeleteAnsweredQuestionsInput,
    condition?: ModelAnsweredQuestionsConditionInput
  ): Promise<DeleteAnsweredQuestionsMutation> {
    const statement = `mutation DeleteAnsweredQuestions($input: DeleteAnsweredQuestionsInput!, $condition: ModelAnsweredQuestionsConditionInput) {
        deleteAnsweredQuestions(input: $input, condition: $condition) {
          __typename
          id
          instanceId
          caseId
          questionsId
          createdAt
          updatedAt
          optionId
          isCorrect
          questionData {
            __typename
            questionId
            selectedOptionId
            correctAnswerId
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAnsweredQuestionsMutation>(
      response.data.deleteAnsweredQuestions
    );
  }
  async GetQuizEvent(id: string): Promise<GetQuizEventQuery> {
    const statement = `query GetQuizEvent($id: ID!) {
        getQuizEvent(id: $id) {
          __typename
          id
          caseId
          instanceId
          createdAt
          updatedAt
          userEmail
          first
          last
          answeredQuestions {
            __typename
            items {
              __typename
              id
              instanceId
              caseId
              questionsId
              createdAt
              updatedAt
              optionId
              isCorrect
              questionData {
                __typename
                questionId
                selectedOptionId
                correctAnswerId
              }
            }
            nextToken
          }
          finished
          score
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuizEventQuery>response.data.getQuizEvent;
  }
  async ListQuizEvents(
    filter?: ModelQuizEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuizEventsQuery> {
    const statement = `query ListQuizEvents($filter: ModelQuizEventFilterInput, $limit: Int, $nextToken: String) {
        listQuizEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            caseId
            instanceId
            createdAt
            updatedAt
            userEmail
            first
            last
            answeredQuestions {
              __typename
              items {
                __typename
                id
                instanceId
                caseId
                questionsId
                createdAt
                updatedAt
                optionId
                isCorrect
              }
              nextToken
            }
            finished
            score
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuizEventsQuery>response.data.listQuizEvents;
  }
  async GetAnsweredQuestions(id: string): Promise<GetAnsweredQuestionsQuery> {
    const statement = `query GetAnsweredQuestions($id: ID!) {
        getAnsweredQuestions(id: $id) {
          __typename
          id
          instanceId
          caseId
          questionsId
          createdAt
          updatedAt
          optionId
          isCorrect
          questionData {
            __typename
            questionId
            selectedOptionId
            correctAnswerId
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAnsweredQuestionsQuery>response.data.getAnsweredQuestions;
  }
  async ListAnsweredQuestionss(
    filter?: ModelAnsweredQuestionsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAnsweredQuestionssQuery> {
    const statement = `query ListAnsweredQuestionss($filter: ModelAnsweredQuestionsFilterInput, $limit: Int, $nextToken: String) {
        listAnsweredQuestionss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            instanceId
            caseId
            questionsId
            createdAt
            updatedAt
            optionId
            isCorrect
            questionData {
              __typename
              questionId
              selectedOptionId
              correctAnswerId
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAnsweredQuestionssQuery>response.data.listAnsweredQuestionss;
  }
  async QuizEventsByCaseIdAndCreatedAt(
    caseId?: string,
    createdAt?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelQuizEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<QuizEventsByCaseIdAndCreatedAtQuery> {
    const statement = `query QuizEventsByCaseIdAndCreatedAt($caseId: String, $createdAt: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelQuizEventFilterInput, $limit: Int, $nextToken: String) {
        quizEventsByCaseIdAndCreatedAt(caseId: $caseId, createdAt: $createdAt, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            caseId
            instanceId
            createdAt
            updatedAt
            userEmail
            first
            last
            answeredQuestions {
              __typename
              items {
                __typename
                id
                instanceId
                caseId
                questionsId
                createdAt
                updatedAt
                optionId
                isCorrect
              }
              nextToken
            }
            finished
            score
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (caseId) {
      gqlAPIServiceArguments.caseId = caseId;
    }
    if (createdAt) {
      gqlAPIServiceArguments.createdAt = createdAt;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <QuizEventsByCaseIdAndCreatedAtQuery>(
      response.data.quizEventsByCaseIdAndCreatedAt
    );
  }
  async AnsweredQuestionsByCaseIdAndCreatedAt(
    caseId?: string,
    createdAt?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelAnsweredQuestionsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<AnsweredQuestionsByCaseIdAndCreatedAtQuery> {
    const statement = `query AnsweredQuestionsByCaseIdAndCreatedAt($caseId: String, $createdAt: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelAnsweredQuestionsFilterInput, $limit: Int, $nextToken: String) {
        answeredQuestionsByCaseIdAndCreatedAt(caseId: $caseId, createdAt: $createdAt, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            instanceId
            caseId
            questionsId
            createdAt
            updatedAt
            optionId
            isCorrect
            questionData {
              __typename
              questionId
              selectedOptionId
              correctAnswerId
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (caseId) {
      gqlAPIServiceArguments.caseId = caseId;
    }
    if (createdAt) {
      gqlAPIServiceArguments.createdAt = createdAt;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AnsweredQuestionsByCaseIdAndCreatedAtQuery>(
      response.data.answeredQuestionsByCaseIdAndCreatedAt
    );
  }
  OnCreateQuizEventListener: Observable<
    OnCreateQuizEventSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuizEvent {
        onCreateQuizEvent {
          __typename
          id
          caseId
          instanceId
          createdAt
          updatedAt
          userEmail
          first
          last
          answeredQuestions {
            __typename
            items {
              __typename
              id
              instanceId
              caseId
              questionsId
              createdAt
              updatedAt
              optionId
              isCorrect
              questionData {
                __typename
                questionId
                selectedOptionId
                correctAnswerId
              }
            }
            nextToken
          }
          finished
          score
        }
      }`
    )
  ) as Observable<OnCreateQuizEventSubscription>;

  OnUpdateQuizEventListener: Observable<
    OnUpdateQuizEventSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuizEvent {
        onUpdateQuizEvent {
          __typename
          id
          caseId
          instanceId
          createdAt
          updatedAt
          userEmail
          first
          last
          answeredQuestions {
            __typename
            items {
              __typename
              id
              instanceId
              caseId
              questionsId
              createdAt
              updatedAt
              optionId
              isCorrect
              questionData {
                __typename
                questionId
                selectedOptionId
                correctAnswerId
              }
            }
            nextToken
          }
          finished
          score
        }
      }`
    )
  ) as Observable<OnUpdateQuizEventSubscription>;

  OnDeleteQuizEventListener: Observable<
    OnDeleteQuizEventSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuizEvent {
        onDeleteQuizEvent {
          __typename
          id
          caseId
          instanceId
          createdAt
          updatedAt
          userEmail
          first
          last
          answeredQuestions {
            __typename
            items {
              __typename
              id
              instanceId
              caseId
              questionsId
              createdAt
              updatedAt
              optionId
              isCorrect
              questionData {
                __typename
                questionId
                selectedOptionId
                correctAnswerId
              }
            }
            nextToken
          }
          finished
          score
        }
      }`
    )
  ) as Observable<OnDeleteQuizEventSubscription>;

  OnCreateAnsweredQuestionsListener: Observable<
    OnCreateAnsweredQuestionsSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAnsweredQuestions {
        onCreateAnsweredQuestions {
          __typename
          id
          instanceId
          caseId
          questionsId
          createdAt
          updatedAt
          optionId
          isCorrect
          questionData {
            __typename
            questionId
            selectedOptionId
            correctAnswerId
          }
        }
      }`
    )
  ) as Observable<OnCreateAnsweredQuestionsSubscription>;

  OnUpdateAnsweredQuestionsListener: Observable<
    OnUpdateAnsweredQuestionsSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAnsweredQuestions {
        onUpdateAnsweredQuestions {
          __typename
          id
          instanceId
          caseId
          questionsId
          createdAt
          updatedAt
          optionId
          isCorrect
          questionData {
            __typename
            questionId
            selectedOptionId
            correctAnswerId
          }
        }
      }`
    )
  ) as Observable<OnUpdateAnsweredQuestionsSubscription>;

  OnDeleteAnsweredQuestionsListener: Observable<
    OnDeleteAnsweredQuestionsSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAnsweredQuestions {
        onDeleteAnsweredQuestions {
          __typename
          id
          instanceId
          caseId
          questionsId
          createdAt
          updatedAt
          optionId
          isCorrect
          questionData {
            __typename
            questionId
            selectedOptionId
            correctAnswerId
          }
        }
      }`
    )
  ) as Observable<OnDeleteAnsweredQuestionsSubscription>;
}
