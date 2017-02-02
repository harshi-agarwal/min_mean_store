app.factory('productsFactory',function($http){
  var factory={};
  factory.addproduct=function(newproduct){
  $http.post('/product/add',newproduct).success(function(data){
     console.log(data);

  })
  }
  factory.index=function(cb){
    $http.get('/products').success(function(data){
      cb(data);
    })
  }

  return factory;
})
