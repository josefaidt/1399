import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum TodoStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED"
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostNodeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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