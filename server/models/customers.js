var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var CustomerSchema=new mongoose.Schema({
  name:{type:String,
  required:[true,"name cannot be blank"]},
  orders:[{type:Schema.Types.ObjectId,ref:'Order'}]
},{timestamps:true})
mongoose.model('Customer',CustomerSchema);
