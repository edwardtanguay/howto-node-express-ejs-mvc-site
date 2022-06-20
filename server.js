import express from 'express';
import { siteData } from './src/models.js';
import { siteView } from './src/views.js';
import path from 'path';

const app = express();
const port = process.env.PORT || 3007;
const __dirname = path.resolve(path.dirname(''));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/index', siteData)
});

app.get('/nouns', (req, res) => {
    res.render('pages/nouns', siteData)
});

app.get('/books', (req, res) => {
    res.render('pages/books', siteData)
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
