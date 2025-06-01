import dotenv from 'dotenv';
import express from 'express';
import groceryRoutes from './routes/groceryRoutes';

if (process.env.NODE_ENV === 'docker') {
  dotenv.config({ path: '.env.docker' });
} else {
  dotenv.config();
}

const app = express();
app.use(express.json());

app.use('/api/groceries', groceryRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
