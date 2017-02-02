app.controller('customersController',function($scope,customersFactory,$route){
  $scope.customers=[];
  $scope.addcustomer=function(cb){
    customersFactory.addcustomer($scope.newcustomer,function(data){
      if(data.error){
        $scope.error=data;
        console.log($scope.error);
      }else{
        $scope.newcustomer={};
        $route.reload();
      }
    })

  }
  customersFactory.index(function(data){
    $scope.customers= data;
    $scope.value1=false;
    $scope.value2=true;
  })
  $scope.delete=function(customer){
    customersFactory.delete(customer)
    $route.reload();
    }
    $scope.showmore=function(){
      var temp=$scope.value1;
      $scope.value1=$scope.value2;
      $scope.value2=temp;
    }
})
