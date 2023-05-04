import express from 'express';
import morgan from 'morgan';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/cartRoutes.js';

const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

app.use('/products', productsRouter);
app.use('/carts', cartsRouter);