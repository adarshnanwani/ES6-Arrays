const Person = {
  name: '',
  age: 0,
  setAge: function (num) {
    this.age = num;
  },
  getAge: function () {
    return this.age;
  },
};

const john = Object.create(Person);
console.log(john);

john.name = 'John Doe';
john.age = 30;

console.log(john);

const Person2 = function (_name, _age) {
  this.name = _name;
  this.age = _age;
  this.showInfo = function () {
    return `${this.name} is ${this.age} years old.`;
  };
};

const jane = new Person2('Jane Doe', 24);

// Closure
const adder = function (num) {
  function add(num2) {
    return num + num2;
  }
  return add;
};

const addBy2 = adder(2);
console.log(addBy2(10));

const subtractor = function () {
  const num = 5;
  function subtract(num2) {
    return num2 - num;
  }
  return subtract;
};

const subtractBy5 = subtractor();
console.log('subtractBy5', subtractBy5(15));

// Functional Inheritance

const Employee = function () {
  this.name; // Public
  let salary; // Private
  return {
    setSalary: function (num) {
      salary = num;
    },
    getSalary: function () {
      return salary;
    },
  };
};

const kevin = new Employee();
kevin.name = 'Kevin';
console.log(kevin.name);
kevin.salary = 20;
console.log(kevin.salary);

const Manager = function () {
  let incentive = 0;
  const that = Employee();
  that.setIncentive = function (num) {
    incentive = num;
  };
  that.getIncentive = function () {
    return incentive;
  };
  that.getTotalSalary = function () {
    return that.getSalary() + incentive;
  };
  return that;
};

const michael = new Manager();
michael.setSalary(20000);
michael.setIncentive(2000);
console.log('michael.getIncentive()', michael.getIncentive());
console.log('michael.getTotalSalary()', michael.getTotalSalary());

// Prototypal Inheritance
const Employee2 = function () {
  this.name;
  this.salary;
  Employee2.prototype.setSalary = function (num) {
    salary = num;
  };
  Employee2.prototype.setName = function (str) {
    name = str;
  };
  Employee2.prototype.getName = function () {
    return name;
  };
};

const oscar = new Employee2();
