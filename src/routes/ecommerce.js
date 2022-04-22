import { Router } from 'express'
import { ecommerce } from '../controllers/ecommerce'

const router = Router()
router.get('/api/1.0/hello', (req,res)=>{
    res.json({
        message: "hello world"
    })
})
router.post('/api/1.0/initialreserve', ecommerce.initialReserve)

router.post('/api/1.0/reservepayment', ecommerce.reservePayment)

export default router