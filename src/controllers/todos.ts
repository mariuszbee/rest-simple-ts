import { RequestHandler } from 'express';
import ShortUniqueId from 'short-unique-id';

const { randomUUID } = new ShortUniqueId({ length: 20 });

export const createTodo: RequestHandler = (req, res) => {
  const text = (req.body as { text: string }).text;
  res.status(201).json({
    message: 'Todo created',
    todo: { id: randomUUID(), text },
  });
};
