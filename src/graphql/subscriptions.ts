/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuizEvent = /* GraphQL */ `
  subscription OnCreateQuizEvent {
    onCreateQuizEvent {
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
export const onUpdateQuizEvent = /* GraphQL */ `
  subscription OnUpdateQuizEvent {
    onUpdateQuizEvent {
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
export const onDeleteQuizEvent = /* GraphQL */ `
  subscription OnDeleteQuizEvent {
    onDeleteQuizEvent {
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
export const onCreateAnsweredQuestions = /* GraphQL */ `
  subscription OnCreateAnsweredQuestions {
    onCreateAnsweredQuestions {
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
export const onUpdateAnsweredQuestions = /* GraphQL */ `
  subscription OnUpdateAnsweredQuestions {
    onUpdateAnsweredQuestions {
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
export const onDeleteAnsweredQuestions = /* GraphQL */ `
  subscription OnDeleteAnsweredQuestions {
    onDeleteAnsweredQuestions {
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
