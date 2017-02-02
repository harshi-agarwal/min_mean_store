app.factory('ordersFactory',function($http){
  var factory={};
  factory.getcustomers=function(cb){
    $http.get('/customers/get').success(function(data){
      cb(data);
    })
  }
  factory.getproducts=function(cb){
    $http.get('/products/get').success(function(data){
      cb(data);
    })
  }
  factory.create=function(neworder,cb){
    $http.post('/order/add',neworder).success(function(output){
      cb(output);
    })
  }
  factory.index=function(cb){
    $http.get('/orders').success(function(output){
      cb(output);
    })
  }
  return factory;
})
