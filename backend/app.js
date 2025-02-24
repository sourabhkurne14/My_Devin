import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import userRouters from './routes/user.routes.js';

connect();

const app = express();



app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extend: true }));

app.use('/users', userRouters);


app.get('/', (req, res) => {
    res.send('Hello World of Babli')
});

export default app;
