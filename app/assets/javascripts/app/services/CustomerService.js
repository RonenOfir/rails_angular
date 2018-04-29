function CustomerService($http) {
  this.getCustomers = function() {
    return $http.get('/customers.json')
  }

  // this.getProduct = function(id) {
  //   return $http.get('/products/' + id + '.json')
  // }

  this.postCustomer = function(data) {
    return $http.post('/customers.json', data);
  }

  // this.updateQuantitySold = function(data) {
  //   return $http.put('/products/' + data.id + '.json', data.value);
  // }
}

angular
  .module('app')
  .service('CustomerService', CustomerService)
