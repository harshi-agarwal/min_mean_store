var mongoose=require('mongoose');
var ProductSchema=new mongoose.Schema({
  name:{type:String,
  required:[true,"name cannot be blank"]},
  imgurl:{type:String},
  desc:{type:String},
  quantity:{type:Number,
  required:[true,"quantity cannot be blank"]},
},{timestamps:true})
mongoose.model('Product',ProductSchema);
