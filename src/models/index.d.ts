import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum TodoStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED"
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type Todo2MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type Todo3MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostNodeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTodo = {
  readonly id: string;
  readonly name: string;
  readonly status: TodoStatus | keyof typeof TodoStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly id: string;
  readonly name: string;
  readonly status: TodoStatus | keyof typeof TodoStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo, TodoMetaData>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

type EagerTodo2 = {
  readonly id: string;
  readonly name: string;
  readonly status: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo2 = {
  readonly id: string;
  readonly name: string;
  readonly status: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo2 = LazyLoading extends LazyLoadingDisabled ? EagerTodo2 : LazyTodo2

export declare const Todo2: (new (init: ModelInit<Todo2, Todo2MetaData>) => Todo2) & {
  copyOf(source: Todo2, mutator: (draft: MutableModel<Todo2, Todo2MetaData>) => MutableModel<Todo2, Todo2MetaData> | void): Todo2;
}

type EagerTodo3 = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo3 = {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo3 = LazyLoading extends LazyLoadingDisabled ? EagerTodo3 : LazyTodo3

export declare const Todo3: (new (init: ModelInit<Todo3, Todo3MetaData>) => Todo3) & {
  copyOf(source: Todo3, mutator: (draft: MutableModel<Todo3, Todo3MetaData>) => MutableModel<Todo3, Todo3MetaData> | void): Todo3;
}

type EagerPost = {
  readonly id: string;
  readonly node: PostNode;
  readonly title: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly id: string;
  readonly node: AsyncItem<PostNode>;
  readonly title: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post, PostMetaData>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

type EagerPostNode = {
  readonly id: string;
  readonly post: Post;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postNodePostId: string;
}

type LazyPostNode = {
  readonly id: string;
  readonly post: AsyncItem<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postNodePostId: string;
}

export declare type PostNode = LazyLoading extends LazyLoadingDisabled ? EagerPostNode : LazyPostNode

export declare const PostNode: (new (init: ModelInit<PostNode, PostNodeMetaData>) => PostNode) & {
  copyOf(source: PostNode, mutator: (draft: MutableModel<PostNode, PostNodeMetaData>) => MutableModel<PostNode, PostNodeMetaData> | void): PostNode;
}