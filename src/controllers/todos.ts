import { RequestHandler } from 'express';
import ShortUniqueId from 'short-unique-id';

import { Todo } from '../models/todos';

const { randomUUID } = new ShortUniqueId({ length: 20 });

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(randomUUID(), text);
  TODOS.push(newTodo);
  res.status(201).json({
    message: 'Todo created',
    newTodo,
  });
};
