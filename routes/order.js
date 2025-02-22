import express from "express"
import { getAllOrderAdmin, getAllOrders, getMyOrder, getStats, newOrdercod, newOrderOnline, updateStatus, verifyPayment } from "../controller/order.js"
import {isAuth} from "../middlewares/isAuth.js"

const router = express.Router()
router.post("/order/new/cod", isAuth, newOrdercod)
router.get("/order/all", isAuth, getAllOrders)
router.get("/order/admin/all", isAuth, getAllOrderAdmin)
router.get("/order/:id", isAuth, getMyOrder)
router.post("/order/:id", isAuth, updateStatus)
router.get("/stats", isAuth, getStats)
router.post("/order/new/online", isAuth, newOrderOnline)
router.post("/order/verify/payment", isAuth, verifyPayment)

export default router