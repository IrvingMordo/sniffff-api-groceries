import express from 'express'; 
import morgan from 'morgan';
import { config } from 'dotenv';
import productsRouter  from './Routes/products.routes.js'; 


config(); 

const app=express();

//Setting
app.set('view engine', 'ejs'); 
app.set('views', './Views'); 

//midelwares
app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 
app.use(morgan('dev')); 
app.use('/api/products', productsRouter);


app.get('/index', (req, res) => {
    const data = {
        pageTitle: ' EJS View ',
        username: ' Irving_MorDO '
    };
    res.render('../src/Views/index', data);
});

app.post('/index', (req, res) => {
    const data = {
        pageTitle: ' EJS View ',
        username: ' Irving_MorDO '
    };
    res.render('../src/Views/index', data);
});


export default app; 