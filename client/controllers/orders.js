app.controller('ordersController',function($scope,ordersFactory,customersFactory,productsFactory,$route){
  $scope.customers=[];
  $scope.products=[];
  $scope.orders=[];
  ordersFactory.getcustomers(function(data){
    $scope.customers=data;
  })
  ordersFactory.getproducts(function(data){
    $scope.products=data;
  })
  $scope.create=function(){
    ordersFactory.create($scope.neworder,function(data){
      if(data.error){
        $scope.error=data.error;
        $scope.neworder={};
      }
      else{
        $scope.neworder={};
        $route.reload();

      }
  })
  }
  ordersFactory.index(function(data){
    $scope.orders=data;
    $scope.value1=false;
    $scope.value2=true;
  })
  $scope.showmore=function(){
    var temp=$scope.value1;
    $scope.value1=$scope.value2;
    $scope.value2=temp;
  }
})
