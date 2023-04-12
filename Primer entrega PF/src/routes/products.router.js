import { Router } from 'express';
import ProductManager from '../../Manager/ProductManager.js';

const products = new ProductManager();

const router = Router();

router.get('/', async (req, res) => {
    const {limit} = req.query
    const mostrarProductos = await products.getProducts(limit);
    res.send(mostrarProductos);
})

router.get('/:pid', async (req, res) => {
    const id = req.params.pid;
    const mostrarProductosById = await products.getProductsById(id);
    res.send(mostrarProductosById);
})

export default router;