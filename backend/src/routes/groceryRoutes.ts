import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// GET all grocery items
router.get('/', async (req, res) => {
  const items = await prisma.groceryItem.findMany();
  res.json(items);
});

// POST create a new grocery item
router.post('/', async (req, res) => {
  const { name, quantity } = req.body;
  const newItem = await prisma.groceryItem.create({
    data: { name, quantity },
  });
  res.status(201).json(newItem);
});

export default router;
