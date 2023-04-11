/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      name
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      name
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      name
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTodo2 = /* GraphQL */ `
  subscription OnCreateTodo2($filter: ModelSubscriptionTodo2FilterInput) {
    onCreateTodo2(filter: $filter) {
      name
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTodo2 = /* GraphQL */ `
  subscription OnUpdateTodo2($filter: ModelSubscriptionTodo2FilterInput) {
    onUpdateTodo2(filter: $filter) {
      name
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTodo2 = /* GraphQL */ `
  subscription OnDeleteTodo2($filter: ModelSubscriptionTodo2FilterInput) {
    onDeleteTodo2(filter: $filter) {
      name
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTodo3 = /* GraphQL */ `
  subscription OnCreateTodo3($filter: ModelSubscriptionTodo3FilterInput) {
    onCreateTodo3(filter: $filter) {
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTodo3 = /* GraphQL */ `
  subscription OnUpdateTodo3($filter: ModelSubscriptionTodo3FilterInput) {
    onUpdateTodo3(filter: $filter) {
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTodo3 = /* GraphQL */ `
  subscription OnDeleteTodo3($filter: ModelSubscriptionTodo3FilterInput) {
    onDeleteTodo3(filter: $filter) {
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      postId
      node {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postNodePostId
      }
      title
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      postId
      node {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postNodePostId
      }
      title
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      postId
      node {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postNodePostId
      }
      title
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePostNode = /* GraphQL */ `
  subscription OnCreatePostNode($filter: ModelSubscriptionPostNodeFilterInput) {
    onCreatePostNode(filter: $filter) {
      id
      post {
        postId
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postNodePostId
    }
  }
`;
export const onUpdatePostNode = /* GraphQL */ `
  subscription OnUpdatePostNode($filter: ModelSubscriptionPostNodeFilterInput) {
    onUpdatePostNode(filter: $filter) {
      id
      post {
        postId
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postNodePostId
    }
  }
`;
export const onDeletePostNode = /* GraphQL */ `
  subscription OnDeletePostNode($filter: ModelSubscriptionPostNodeFilterInput) {
    onDeletePostNode(filter: $filter) {
      id
      post {
        postId
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postNodePostId
    }
  }
`;
