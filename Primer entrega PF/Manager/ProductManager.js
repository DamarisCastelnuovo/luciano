import fs from 'fs';

const path = '../files/Productos.json';

export default class ProductManager {

    getProducts = async (limit) => {
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path, 'utf-8');
            const products = JSON.parse(data);
            if (limit) {
                if (limit > 0){
                    const productsLimit = products.splice(0, limit)
                    return productsLimit;
                }else{
                    return `El limite debe ser mayor a 0`
                }
            }else{
                return products;
            }
        }else{
            return [];
        }
    }

    getProductsById = async (id) => {
        const producto = await this.getProducts();
        const productoId = producto.filter(producto => producto.id == id);
        if(productoId){
            return productoId;
        }else{
            return `El producto con ese ID no existe`
        }
    }

    agregarProdAlCart = async (idCart, idProd) => {
        const carritos = await this.getCarritos();
        const carritosFilter = carritos.find((cart) => cart.id === idCart);
        let productosEnElCarrito = carritosFilter.products;

        const productoIndex = productosEnElCarrito.findIndex((prodIndex)=> prodIndex.id === idCart);

        if(productosEnElCarrito !== -1){
            productosEnElCarrito[productoIndex].quantity + 1;
        }else{
            let producto = {
                id: idProd,
                quantity: 1,
            }
            productosEnElCarrito.push(producto)
        }
        await fs.promises.writeFile(path, JSON.stringify(carritos, null, '/t'));
        return carritosFilter;
    }

}