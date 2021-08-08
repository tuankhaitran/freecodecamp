var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly

  var firstAndLastArr = firstAndLast.split(" ");

  var _firstName = firstAndLastArr[0];
  var _lastName = firstAndLastArr[1];

  this.setFullName = function (firstAndLast) {
    firstAndLastArr = firstAndLast.split(" ");
    _firstName = firstAndLastArr[0];
    _lastName = firstAndLastArr[1];
  };

  this.getFirstName = function () {
    return _firstName;
  };

  this.getLastName = function () {
    return _lastName;
  };

  this.getFullName = function() {
    return _firstName + " " + _lastName;
  };

  this.setFirstName = function (first) {
    _firstName = first;
  };

  this.setLastName = function (last) {
    _lastName = last;
  };

};

var bob = new Person('Bob Ross');
bob.getFullName();
