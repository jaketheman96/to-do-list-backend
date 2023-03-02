import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import taskRouter from './routes/taskRoutes';

const PORT = process.env.PORT || 3001

const app = express();

app.use(express.json());
app.use('/task', taskRouter.taskRoutes);
app.use(ErrorHandler.handle)

app.listen(PORT, (): void => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

export default app;