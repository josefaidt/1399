/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  name: string,
  status: TodoStatus,
  _version?: number | null,
};

export enum TodoStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}


export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type Todo = {
  __typename: "Todo",
  name: string,
  status: TodoStatus,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTodoInput = {
  name: string,
  status: TodoStatus,
  _version?: number | null,
};

export type DeleteTodoInput = {
  name: string,
  status: TodoStatus,
  _version?: number | null,
};

export type CreateTodo2Input = {
  name: string,
  status: string,
  _version?: number | null,
};

export type ModelTodo2ConditionInput = {
  and?: Array< ModelTodo2ConditionInput | null > | null,
  or?: Array< ModelTodo2ConditionInput | null > | null,
  not?: ModelTodo2ConditionInput | null,
};

export type Todo2 = {
  __typename: "Todo2",
  name: string,
  status: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTodo2Input = {
  name: string,
  status: string,
  _version?: number | null,
};

export type DeleteTodo2Input = {
  name: string,
  status: string,
  _version?: number | null,
};

export type CreateTodo3Input = {
  name: string,
  _version?: number | null,
};

export type ModelTodo3ConditionInput = {
  and?: Array< ModelTodo3ConditionInput | null > | null,
  or?: Array< ModelTodo3ConditionInput | null > | null,
  not?: ModelTodo3ConditionInput | null,
};

export type Todo3 = {
  __typename: "Todo3",
  name: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTodo3Input = {
  name: string,
  _version?: number | null,
};

export type DeleteTodo3Input = {
  name: string,
  _version?: number | null,
};

export type CreatePostInput = {
  postId: string,
  title: string,
  _version?: number | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Post = {
  __typename: "Post",
  postId: string,
  node: PostNode,
  title: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type PostNode = {
  __typename: "PostNode",
  id: string,
  post: Post,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  postNodePostId: string,
};

export type UpdatePostInput = {
  postId: string,
  title?: string | null,
  _version?: number | null,
};

export type DeletePostInput = {
  postId: string,
  _version?: number | null,
};

export type CreatePostNodeInput = {
  id?: string | null,
  _version?: number | null,
  postNodePostId: string,
};

export type ModelPostNodeConditionInput = {
  and?: Array< ModelPostNodeConditionInput | null > | null,
  or?: Array< ModelPostNodeConditionInput | null > | null,
  not?: ModelPostNodeConditionInput | null,
  postNodePostId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostNodeInput = {
  id: string,
  _version?: number | null,
  postNodePostId?: string | null,
};

export type DeletePostNodeInput = {
  id: string,
  _version?: number | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelTodoFilterInput = {
  name?: ModelStringInput | null,
  status?: ModelTodoStatusInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoStatusInput = {
  eq?: TodoStatus | null,
  ne?: TodoStatus | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTodo2FilterInput = {
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelTodo2FilterInput | null > | null,
  or?: Array< ModelTodo2FilterInput | null > | null,
  not?: ModelTodo2FilterInput | null,
};

export type ModelTodo2Connection = {
  __typename: "ModelTodo2Connection",
  items:  Array<Todo2 | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTodo3FilterInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTodo3FilterInput | null > | null,
  or?: Array< ModelTodo3FilterInput | null > | null,
  not?: ModelTodo3FilterInput | null,
};

export type ModelTodo3Connection = {
  __typename: "ModelTodo3Connection",
  items:  Array<Todo3 | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostFilterInput = {
  postId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostNodeFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelPostNodeFilterInput | null > | null,
  or?: Array< ModelPostNodeFilterInput | null > | null,
  not?: ModelPostNodeFilterInput | null,
  postNodePostId?: ModelIDInput | null,
};

export type ModelPostNodeConnection = {
  __typename: "ModelPostNodeConnection",
  items:  Array<PostNode | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionTodoFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTodo2FilterInput = {
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodo2FilterInput | null > | null,
  or?: Array< ModelSubscriptionTodo2FilterInput | null > | null,
};

export type ModelSubscriptionTodo3FilterInput = {
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodo3FilterInput | null > | null,
  or?: Array< ModelSubscriptionTodo3FilterInput | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  postId?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostNodeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostNodeFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostNodeFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    name: string,
    status: TodoStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    name: string,
    status: TodoStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    name: string,
    status: TodoStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTodo2MutationVariables = {
  input: CreateTodo2Input,
  condition?: ModelTodo2ConditionInput | null,
};

export type CreateTodo2Mutation = {
  createTodo2?:  {
    __typename: "Todo2",
    name: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTodo2MutationVariables = {
  input: UpdateTodo2Input,
  condition?: ModelTodo2ConditionInput | null,
};

export type UpdateTodo2Mutation = {
  updateTodo2?:  {
    __typename: "Todo2",
    name: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTodo2MutationVariables = {
  input: DeleteTodo2Input,
  condition?: ModelTodo2ConditionInput | null,
};

export type DeleteTodo2Mutation = {
  deleteTodo2?:  {
    __typename: "Todo2",
    name: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTodo3MutationVariables = {
  input: CreateTodo3Input,
  condition?: ModelTodo3ConditionInput | null,
};

export type CreateTodo3Mutation = {
  createTodo3?:  {
    __typename: "Todo3",
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTodo3MutationVariables = {
  input: UpdateTodo3Input,
  condition?: ModelTodo3ConditionInput | null,
};

export type UpdateTodo3Mutation = {
  updateTodo3?:  {
    __typename: "Todo3",
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTodo3MutationVariables = {
  input: DeleteTodo3Input,
  condition?: ModelTodo3ConditionInput | null,
};

export type DeleteTodo3Mutation = {
  deleteTodo3?:  {
    __typename: "Todo3",
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    postId: string,
    node:  {
      __typename: "PostNode",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      postNodePostId: string,
    },
    title: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    postId: string,
    node:  {
      __typename: "PostNode",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      postNodePostId: string,
    },
    title: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    postId: string,
    node:  {
      __typename: "PostNode",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      postNodePostId: string,
    },
    title: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePostNodeMutationVariables = {
  input: CreatePostNodeInput,
  condition?: ModelPostNodeConditionInput | null,
};

export type CreatePostNodeMutation = {
  createPostNode?:  {
    __typename: "PostNode",
    id: string,
    post:  {
      __typename: "Post",
      postId: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postNodePostId: string,
  } | null,
};

export type UpdatePostNodeMutationVariables = {
  input: UpdatePostNodeInput,
  condition?: ModelPostNodeConditionInput | null,
};

export type UpdatePostNodeMutation = {
  updatePostNode?:  {
    __typename: "PostNode",
    id: string,
    post:  {
      __typename: "Post",
      postId: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postNodePostId: string,
  } | null,
};

export type DeletePostNodeMutationVariables = {
  input: DeletePostNodeInput,
  condition?: ModelPostNodeConditionInput | null,
};

export type DeletePostNodeMutation = {
  deletePostNode?:  {
    __typename: "PostNode",
    id: string,
    post:  {
      __typename: "Post",
      postId: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postNodePostId: string,
  } | null,
};

export type GetTodoQueryVariables = {
  name: string,
  status: TodoStatus,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    name: string,
    status: TodoStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTodosQueryVariables = {
  name?: string | null,
  status?: ModelStringKeyConditionInput | null,
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      name: string,
      status: TodoStatus,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodosQuery = {
  syncTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      name: string,
      status: TodoStatus,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTodo2QueryVariables = {
  name: string,
  status: string,
};

export type GetTodo2Query = {
  getTodo2?:  {
    __typename: "Todo2",
    name: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTodo2sQueryVariables = {
  name?: string | null,
  status?: ModelStringKeyConditionInput | null,
  filter?: ModelTodo2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTodo2sQuery = {
  listTodo2s?:  {
    __typename: "ModelTodo2Connection",
    items:  Array< {
      __typename: "Todo2",
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodo2sQueryVariables = {
  filter?: ModelTodo2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodo2sQuery = {
  syncTodo2s?:  {
    __typename: "ModelTodo2Connection",
    items:  Array< {
      __typename: "Todo2",
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTodo3QueryVariables = {
  name: string,
};

export type GetTodo3Query = {
  getTodo3?:  {
    __typename: "Todo3",
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTodo3sQueryVariables = {
  name?: string | null,
  filter?: ModelTodo3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTodo3sQuery = {
  listTodo3s?:  {
    __typename: "ModelTodo3Connection",
    items:  Array< {
      __typename: "Todo3",
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodo3sQueryVariables = {
  filter?: ModelTodo3FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodo3sQuery = {
  syncTodo3s?:  {
    __typename: "ModelTodo3Connection",
    items:  Array< {
      __typename: "Todo3",
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostQueryVariables = {
  postId: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    postId: string,
    node:  {
      __typename: "PostNode",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      postNodePostId: string,
    },
    title: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPostsQueryVariables = {
  postId?: string | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      postId: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      postId: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostNodeQueryVariables = {
  id: string,
};

export type GetPostNodeQuery = {
  getPostNode?:  {
    __typename: "PostNode",
    id: string,
    post:  {
      __typename: "Post",
      postId: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postNodePostId: string,
  } | null,
};

export type ListPostNodesQueryVariables = {
  filter?: ModelPostNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostNodesQuery = {
  listPostNodes?:  {
    __typename: "ModelPostNodeConnection",
    items:  Array< {
      __typename: "PostNode",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      postNodePostId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostNodesQueryVariables = {
  filter?: ModelPostNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostNodesQuery = {
  syncPostNodes?:  {
    __typename: "ModelPostNodeConnection",
    items:  Array< {
      __typename: "PostNode",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      postNodePostId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    name: string,
    status: TodoStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    name: string,
    status: TodoStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    name: string,
    status: TodoStatus,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTodo2SubscriptionVariables = {
  filter?: ModelSubscriptionTodo2FilterInput | null,
};

export type OnCreateTodo2Subscription = {
  onCreateTodo2?:  {
    __typename: "Todo2",
    name: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTodo2SubscriptionVariables = {
  filter?: ModelSubscriptionTodo2FilterInput | null,
};

export type OnUpdateTodo2Subscription = {
  onUpdateTodo2?:  {
    __typename: "Todo2",
    name: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTodo2SubscriptionVariables = {
  filter?: ModelSubscriptionTodo2FilterInput | null,
};

export type OnDeleteTodo2Subscription = {
  onDeleteTodo2?:  {
    __typename: "Todo2",
    name: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTodo3SubscriptionVariables = {
  filter?: ModelSubscriptionTodo3FilterInput | null,
};

export type OnCreateTodo3Subscription = {
  onCreateTodo3?:  {
    __typename: "Todo3",
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTodo3SubscriptionVariables = {
  filter?: ModelSubscriptionTodo3FilterInput | null,
};

export type OnUpdateTodo3Subscription = {
  onUpdateTodo3?:  {
    __typename: "Todo3",
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTodo3SubscriptionVariables = {
  filter?: ModelSubscriptionTodo3FilterInput | null,
};

export type OnDeleteTodo3Subscription = {
  onDeleteTodo3?:  {
    __typename: "Todo3",
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    postId: string,
    node:  {
      __typename: "PostNode",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      postNodePostId: string,
    },
    title: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    postId: string,
    node:  {
      __typename: "PostNode",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      postNodePostId: string,
    },
    title: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    postId: string,
    node:  {
      __typename: "PostNode",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      postNodePostId: string,
    },
    title: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePostNodeSubscriptionVariables = {
  filter?: ModelSubscriptionPostNodeFilterInput | null,
};

export type OnCreatePostNodeSubscription = {
  onCreatePostNode?:  {
    __typename: "PostNode",
    id: string,
    post:  {
      __typename: "Post",
      postId: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postNodePostId: string,
  } | null,
};

export type OnUpdatePostNodeSubscriptionVariables = {
  filter?: ModelSubscriptionPostNodeFilterInput | null,
};

export type OnUpdatePostNodeSubscription = {
  onUpdatePostNode?:  {
    __typename: "PostNode",
    id: string,
    post:  {
      __typename: "Post",
      postId: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postNodePostId: string,
  } | null,
};

export type OnDeletePostNodeSubscriptionVariables = {
  filter?: ModelSubscriptionPostNodeFilterInput | null,
};

export type OnDeletePostNodeSubscription = {
  onDeletePostNode?:  {
    __typename: "PostNode",
    id: string,
    post:  {
      __typename: "Post",
      postId: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    postNodePostId: string,
  } | null,
};
