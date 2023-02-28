import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';

const PORT = process.env.API_PORT || 3001

const app = express();

app.use(express.json());
app.get('/', () => console.log('Get funcionando'))
app.use(ErrorHandler.handle)

app.listen(PORT, (): void => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

export default app;