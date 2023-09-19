import mongoose from 'mongoose'
let ProductDetail=new mongoose.Schema({
    slug:{type:String},
    quality:{type:String},
    price:{type:Number}
},{timestamps:true})
export default mongoose.models.Product || mongoose.model("Product",ProductDetail);