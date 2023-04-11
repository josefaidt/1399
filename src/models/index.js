// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TodoStatus = {
  "ACTIVE": "ACTIVE",
  "COMPLETED": "COMPLETED"
};

const { Todo, Todo2, Todo3 } = initSchema(schema);

export {
  Todo,
  Todo2,
  Todo3,
  TodoStatus
};