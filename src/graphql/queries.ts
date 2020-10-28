/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuizEvent = /* GraphQL */ `
  query GetQuizEvent($id: ID!) {
    getQuizEvent(id: $id) {
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
export const listQuizEvents = /* GraphQL */ `
  query ListQuizEvents(
    $filter: ModelQuizEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        caseId
        instanceId
        createdAt
        updatedAt
        userEmail
        first
        last
        answeredQuestions {
          nextToken
        }
        finished
        score
      }
      nextToken
    }
  }
`;
export const getAnsweredQuestions = /* GraphQL */ `
  query GetAnsweredQuestions($id: ID!) {
    getAnsweredQuestions(id: $id) {
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
export const listAnsweredQuestionss = /* GraphQL */ `
  query ListAnsweredQuestionss(
    $filter: ModelAnsweredQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnsweredQuestionss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const quizEventsByCaseIdAndCreatedAt = /* GraphQL */ `
  query QuizEventsByCaseIdAndCreatedAt(
    $caseId: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelQuizEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    quizEventsByCaseIdAndCreatedAt(
      caseId: $caseId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        caseId
        instanceId
        createdAt
        updatedAt
        userEmail
        first
        last
        answeredQuestions {
          nextToken
        }
        finished
        score
      }
      nextToken
    }
  }
`;
export const answeredQuestionsByCaseIdAndCreatedAt = /* GraphQL */ `
  query AnsweredQuestionsByCaseIdAndCreatedAt(
    $caseId: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAnsweredQuestionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    answeredQuestionsByCaseIdAndCreatedAt(
      caseId: $caseId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
