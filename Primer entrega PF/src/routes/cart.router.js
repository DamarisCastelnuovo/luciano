import { Router } from 'express';

const router = Router();

const cart = [];

router.get('/', (req, res) => {

    res.send({cart})
})

router.post('/', (req, res) => {
    const user = req.body;
    cart.push(user);
    res.send({
        status: 'success',
        cart
    })
})

export default router;