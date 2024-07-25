import { Router } from 'express';

const router = Router();

router.post('/', (_, res) => {
  res.send('Create a todo');
});
router.get('/', (_, res) => {
  res.send('Get all todos');
});
router.patch('/:id', (_, res) => {
  res.send('Update a todo');
});

router.delete('/:id', (_, res) => {
  res.send('Delete a todo');
});

export default router;
