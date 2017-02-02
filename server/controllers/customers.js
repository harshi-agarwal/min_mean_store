var mongoose=require('mongoose');
var Customer=mongoose.model('Customer');
module.exports=(function(){
  return{
    addcustomer:function(req,res){
      Customer.findOne({name:req.body.name},function(err,data){
        if(data){
          res.json({status:false,error:"already exists"})

        }
        else {
          var customer=new Customer(req.body);

          customer.save(function(err,data){
            res.json(data)
          })
        }
      })

    },
    index:function(req,res){
      Customer.find({},function(err,data){
        res.json(data);
      })
    },
    delete:function(req,res){
      Customer.remove({_id:req.body._id},function(err,data){
        console.log(req.body._id);
          res.json({status:true})



          })

    },
  }
})()
