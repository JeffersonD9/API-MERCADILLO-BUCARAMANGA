import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const getAllProducts = async (req,res) => {

    try {

    const products = await prisma.mercadillo.findMany()
    res.send(products)
        
    } catch (e) {
        console.log(e)
        
        return res.status(500).json({success: false, data: "Oh no... algo salió mal"});
        
    }

}

const getProduct = async (req,res) => {
    
    const id_productos = parseInt(req.params.id);

    try {
        
        const product = await prisma.mercadillo.findUnique({
            
            where:{

                idProductos : id_productos
            }
        })

    if(product == null){

    return res.status(400).json({success: false, data: "Registro no encontrado" });

    }

    return res.json({success: true, data: product});

    } catch (e) {
        console.log(e)
        return res.status(500).json({success: false, data: "Oh no... algo salió mal"});
    }
}


export {getProduct ,getAllProducts}