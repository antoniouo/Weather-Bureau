import express from 'express';
import morgan from 'morgan';
import index from './routes/indexRouter';

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/', index);

app.listen(PORT, () => {
  console.log('server start on port', PORT);
});
