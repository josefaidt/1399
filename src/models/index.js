// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TodoStatus = {
  "ACTIVE": "ACTIVE",
  "COMPLETED": "COMPLETED"
};

const { Todo } = initSchema(schema);

export {
  Todo,
  TodoStatus
};