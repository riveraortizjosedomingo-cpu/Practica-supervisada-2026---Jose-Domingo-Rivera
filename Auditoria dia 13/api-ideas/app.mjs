import express from 'express';
import ideasRouter from './routes/ideas.routes.mjs';

const app = express();
const puerto = 3000;

app.use(express.json());
app.use('/api/ideas', ideasRouter);

app.use((req, res) => {
  res.status(404).json({ data: null, error: 'Ruta no encontrada.' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ data: null, error: 'Error interno del servidor.' });
});

app.listen(puerto, () => {
  console.log(`Servidor disponible en http://localhost:${puerto}`);
});