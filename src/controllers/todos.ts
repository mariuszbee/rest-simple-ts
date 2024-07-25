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

export const getTodos: RequestHandler = (_, res) => {
  res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res) => {
  const id = req.params.id;
  const updatedText = (req.body as { text: string }).text;
  const todoIndex = TODOS.findIndex((todo) => todo.id === id);
  if (todoIndex < 0) {
    throw new Error('Todo not found');
  }
  TODOS[todoIndex] = new Todo(id, updatedText);
  res.json({ message: 'Todo updated', updatedTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res) => {
  const id = req.params.id;
  const todoIndex = TODOS.findIndex((todo) => todo.id === id);
  if (todoIndex < 0) {
    throw new Error('Todo not found');
  }
  TODOS.splice(todoIndex, 1);
  res.json({ message: 'Todo deleted' });
};
