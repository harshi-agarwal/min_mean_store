var mongoose=require('mongoose');
var Order=mongoose.model('Order');
var Customer=mongoose.model('Customer');
var Product=mongoose.model('Product');
module.exports=(function(){
  return{
    create:function(req,res){
      console.log(req.body)
      var order=new Order({_customer:req.body.customer,_product:req.body.product,quantity:req.body.quantity});
      Product.findOne({_id:req.body.product},function(err,data){
        if(data.quantity>=order.quantity)
        {
          data.quantity=(data.quantity-order.quantity);
          data.save()
              Customer.findOne({_id:req.body.customer},function(err,customer){
              customer.orders.push(order._id);
              customer.save()
              })
              order.save(function(err,data){
              res.json({status:true,data:data})
            })
        }
          else{
            res.json({status:false,error:"enough qunatity not available"})
          }
      })

    },
    index:function(req,res){
      Order.find({}).populate('_customer').populate('_product').exec(function(err,data){
        res.json(data);
      })
    }
  }
})()
