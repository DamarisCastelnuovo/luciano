import { Router } from 'express';
import ProductManager from '../../Manager/ProductManager.js';

const router = Router();

router.get('/', async (req, res) => {
    const {limit} = req.query
    const mostrarProductos = await ProductManager.getProducts(limit);
    res.send(mostrarProductos);
})

/*
router.get('/:pid', async (req, res) => {
    const id = req.params.pid;
    const mostrarProductosById = await ProductManager.getProductsById(id);
    res.send(mostrarProductosById);
})
*/
export default router;