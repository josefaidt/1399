import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

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