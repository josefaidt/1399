/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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

export type ModelPostFilterInput = {
  postId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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

export type ModelSubscriptionPostNodeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostNodeFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostNodeFilterInput | null > | null,
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
