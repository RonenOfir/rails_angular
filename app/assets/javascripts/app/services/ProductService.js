function ProductService($http) {
  this.getProducts = function() {
    return $http.get('/products.json')
  }

  this.getProduct = function(id) {
    return $http.get('/products/' + id + '.json')
  }

  this.postProduct = function(data) {
    return $http.post('/products.json', data);
  }

  this.updateQuantitySold = function(data) {
    return $http.put('/products/' + data.id + '.json', data.value);
  }
}

angular
  .module('app')
  .service('ProductService', ProductService)
