import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api-graphql";
import {
  CreateAnsweredQuestionsInput,
  CreateAnsweredQuestionsMutation,
  CreateQuizEventInput,
  CreateQuizEventMutation,
  ModelAnsweredQuestionsConditionInput,
  UpdateAnsweredQuestionsInput,
  UpdateAnsweredQuestionsMutation,
  UpdateQuizEventInput,
  UpdateQuizEventMutation,
} from "src/API.service";

@Injectable({
  providedIn: "root",
})
export class APIQuizEventService {
  retrievalParams = {
    full: `
      id
      caseId
      instanceId
      createdAt
      updatedAt
      userEmail
      first
      last
      answeredQuestions {
        items {
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
    `,
  };

  constructor() {}

  async createQuizEvent(
    input: CreateQuizEventInput,
    condition?: any
  ): Promise<CreateQuizEventMutation> {
    const statement = `mutation CreateQuizEvent($input: CreateQuizEventInput!, $condition: ModelQuizEventConditionInput) {
        createQuizEvent(input: $input, condition: $condition) {
          ${this.retrievalParams.full}
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuizEventMutation>response.data.createQuizEvent;
  }

  async updateQuizEvent(
    input: UpdateQuizEventInput,
    condition?: any
  ): Promise<UpdateQuizEventMutation> {
    const statement = `mutation UpdateQuizEvent($input: UpdateQuizEventInput!, $condition: ModelQuizEventConditionInput) {
        updateQuizEvent(input: $input, condition: $condition) {
          ${this.retrievalParams.full}
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuizEventMutation>response.data.updateQuizEvent;
  }
  async deleteQuizEvent(
    input: { id: string },
    condition?: any
  ): Promise<{ id: string }> {
    const statement = `mutation DeleteQuizEvent($input: DeleteQuizEventInput!, $condition: ModelQuizEventConditionInput) {
        deleteQuizEvent(input: $input, condition: $condition) {
          id
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <{ id: string }>response.data.deleteQuizEvent;
  }

  async createAnsweredQuestions(
    input: CreateAnsweredQuestionsInput,
    condition?: ModelAnsweredQuestionsConditionInput
  ): Promise<CreateAnsweredQuestionsMutation> {
    const statement = `mutation CreateAnsweredQuestions($input: CreateAnsweredQuestionsInput!, $condition: ModelAnsweredQuestionsConditionInput) {
        createAnsweredQuestions(input: $input, condition: $condition) {        
          id
          instanceId
          caseId
          questionsId
          createdAt
          updatedAt
          optionId
          isCorrect
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
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

  async updateAnsweredQuestions(
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
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
}
