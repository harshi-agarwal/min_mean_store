var products=require('./../controllers/products.js');
var customers=require('./../controllers/customers.js');
var orders=require('./../controllers/orders.js');
module.exports=function(app){
  app.post('/product/add',function(req,res){
    products.addproduct(req,res);
  })
  app.get('/products',function(req,res){
    products.index(req,res);
  })
  app.post('/customers/add',function(req,res){
    customers.addcustomer(req,res);
  })
  app.get('/customers',function(req,res){
    customers.index(req,res);
  })
  app.get('/customers/get',function(req,res){
    customers.index(req,res);
  })
  app.post('/customer/remove',function(req,res){
    console.log("in routes")
    customers.delete(req,res);
  })
  app.get('/products/get',function(req,res){
    products.index(req,res);
  })
  app.post('/order/add',function(req,res){
    orders.create(req,res);
  })
  app.get('/orders',function(req,res){
    orders.index(req,res);
  })

}
