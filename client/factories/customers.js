app.factory('customersFactory',function($http){
  var factory={};
  factory.addcustomer=function(newcustomer,cb){
    $http.post('/customers/add',newcustomer).success(function(data){
      cb(data);
    })
  }
  factory.index=function(cb){
    $http.get('/customers').success(function(data){
      cb(data);
    })
  }
  factory.delete=function(customer){
    $http.post('/customer/remove',customer).success(function(data){
      console.log(data);
    })
  }
  return factory;
})
