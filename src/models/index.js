// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TodoStatus = {
  "ACTIVE": "ACTIVE",
  "COMPLETED": "COMPLETED"
};

const { Post, PostNode } = initSchema(schema);

export {
  Post,
  PostNode,
  TodoStatus
};