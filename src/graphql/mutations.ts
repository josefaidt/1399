/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
