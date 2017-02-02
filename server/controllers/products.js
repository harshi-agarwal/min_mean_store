var mongoose=require('mongoose');
var Product=mongoose.model('Product');
module.exports=(function(){
  return{
    addproduct:function(req,res){
      var product=new Product(req.body);
      product.save(function(err,data){
        res.json(data)
      })
    },
    index:function(req,res){
      Product.find({},function(err,data){
        res.json(data);
      })
    }
  }
})()
