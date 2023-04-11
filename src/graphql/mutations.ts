/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createTodo2 = /* GraphQL */ `
  mutation CreateTodo2(
    $input: CreateTodo2Input!
    $condition: ModelTodo2ConditionInput
  ) {
    createTodo2(input: $input, condition: $condition) {
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
export const updateTodo2 = /* GraphQL */ `
  mutation UpdateTodo2(
    $input: UpdateTodo2Input!
    $condition: ModelTodo2ConditionInput
  ) {
    updateTodo2(input: $input, condition: $condition) {
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
export const deleteTodo2 = /* GraphQL */ `
  mutation DeleteTodo2(
    $input: DeleteTodo2Input!
    $condition: ModelTodo2ConditionInput
  ) {
    deleteTodo2(input: $input, condition: $condition) {
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
export const createTodo3 = /* GraphQL */ `
  mutation CreateTodo3(
    $input: CreateTodo3Input!
    $condition: ModelTodo3ConditionInput
  ) {
    createTodo3(input: $input, condition: $condition) {
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTodo3 = /* GraphQL */ `
  mutation UpdateTodo3(
    $input: UpdateTodo3Input!
    $condition: ModelTodo3ConditionInput
  ) {
    updateTodo3(input: $input, condition: $condition) {
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTodo3 = /* GraphQL */ `
  mutation DeleteTodo3(
    $input: DeleteTodo3Input!
    $condition: ModelTodo3ConditionInput
  ) {
    deleteTodo3(input: $input, condition: $condition) {
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createPostNode = /* GraphQL */ `
  mutation CreatePostNode(
    $input: CreatePostNodeInput!
    $condition: ModelPostNodeConditionInput
  ) {
    createPostNode(input: $input, condition: $condition) {
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
export const updatePostNode = /* GraphQL */ `
  mutation UpdatePostNode(
    $input: UpdatePostNodeInput!
    $condition: ModelPostNodeConditionInput
  ) {
    updatePostNode(input: $input, condition: $condition) {
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
export const deletePostNode = /* GraphQL */ `
  mutation DeletePostNode(
    $input: DeletePostNodeInput!
    $condition: ModelPostNodeConditionInput
  ) {
    deletePostNode(input: $input, condition: $condition) {
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
