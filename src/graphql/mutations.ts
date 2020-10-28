/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuizEvent = /* GraphQL */ `
  mutation CreateQuizEvent(
    $input: CreateQuizEventInput!
    $condition: ModelQuizEventConditionInput
  ) {
    createQuizEvent(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateQuizEvent = /* GraphQL */ `
  mutation UpdateQuizEvent(
    $input: UpdateQuizEventInput!
    $condition: ModelQuizEventConditionInput
  ) {
    updateQuizEvent(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteQuizEvent = /* GraphQL */ `
  mutation DeleteQuizEvent(
    $input: DeleteQuizEventInput!
    $condition: ModelQuizEventConditionInput
  ) {
    deleteQuizEvent(input: $input, condition: $condition) {
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
    }
  }
`;
export const createAnsweredQuestions = /* GraphQL */ `
  mutation CreateAnsweredQuestions(
    $input: CreateAnsweredQuestionsInput!
    $condition: ModelAnsweredQuestionsConditionInput
  ) {
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
  }
`;
export const updateAnsweredQuestions = /* GraphQL */ `
  mutation UpdateAnsweredQuestions(
    $input: UpdateAnsweredQuestionsInput!
    $condition: ModelAnsweredQuestionsConditionInput
  ) {
    updateAnsweredQuestions(input: $input, condition: $condition) {
      id
      instanceId
      caseId
      questionsId
      createdAt
      updatedAt
      optionId
      isCorrect
    }
  }
`;
export const deleteAnsweredQuestions = /* GraphQL */ `
  mutation DeleteAnsweredQuestions(
    $input: DeleteAnsweredQuestionsInput!
    $condition: ModelAnsweredQuestionsConditionInput
  ) {
    deleteAnsweredQuestions(input: $input, condition: $condition) {
      id
      instanceId
      caseId
      questionsId
      createdAt
      updatedAt
      optionId
      isCorrect
    }
  }
`;
