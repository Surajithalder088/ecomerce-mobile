import { Request ,Response} from "express"

export const getLists=(req :Request,res:Response)=>{
        res.send("list of products")
}

export const getProductById=(req :Request,res:Response)=>{
    res.send("a product")
}
export const createProduct=(req :Request,res:Response)=>{
    res.send("a product created")
}
export const updateProduct=(req :Request,res:Response)=>{
    res.send("a product updated")
}
export const deleteProduct=(req :Request,res:Response)=>{
    res.send("a product deleted")
}