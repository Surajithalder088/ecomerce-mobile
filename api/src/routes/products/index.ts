import express from "express"
import { getLists } from "../../controllers/products/index";
const router=express.Router()

router.get("/",getLists)

export default router;