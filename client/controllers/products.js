app.controller('productsController',function($scope,productsFactory,$route){
  $scope.products=[];
  $scope.addproduct=function(){
    productsFactory.addproduct($scope.newproduct)
    $scope.newproduct={};
    $route.reload();
  }
  productsFactory.index(function(data){
    $scope.products=data;
    $scope.value1=false;
    $scope.value2=true;
  })
  $scope.showmore=function(){
    var temp=$scope.value1;
    $scope.value1=$scope.value2;
    $scope.value2=temp;
  }
})
