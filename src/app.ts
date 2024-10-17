import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todoRoutes';
import path from 'path'


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static('public'));

// Use routes
app.use('/', todoRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});