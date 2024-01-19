import {Router} from 'express'
import { getProduct, getAllProducts } from '../controllers/ControllerProductos.js'

const router = Router()

router.get('/',(req,res)=>{

    res.send("Hola")
})

router.get('/getAllProducts', getAllProducts)

router.get('/getAllProductsById/:id',getProduct)

export default router;