function CustomerController($scope, customer,CustomerService) {
  var ctrl = this;
  ctrl.customer = customer.data;
  

  ctrl.addNewCustomer = function() {
    CustomerService.postCustomer($scope.product)
      .then(function(response) {
        ctrl.customers.push(response.data);
        $scope.customer = {};
        $scope.newCustomerForm.$setUntouched();
        $scope.newCustomerForm.$setPristine();
      },function(error) {
        console.log("Error occurred: " + error);
      });
  }

  ctrl.getCustomers = function() {
    var customers = [];

    CustomerService.getCustomers().then(function(response) {
      response.data.forEach(function(cust) {
          customers.push(cust)
        })
      }, function(error) {
        console.log("Error occurred: " + error);
      });

    ctrl.customers = customers;
  }

}

angular
  .module('app')
  .controller('CustomerController', CustomerController)
