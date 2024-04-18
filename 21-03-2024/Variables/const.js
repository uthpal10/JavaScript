// const can't be reinitialized and re-declared --> const is block scoped

const c = 'JavaScript';

console.log(c);

const car = ['Audi', 'volkswagen', 'Toyota']

console.log(typeof(car));

console.log(car);

car [0] = 'jaguar';
car.push('Hyundai');

console.log(car);

const phone = { name:'One Plus', colour:'grey', OS:'oxygen' }

phone.model = 'Nord 2T 5g';
phone.user = 'uthpal';

console.log(phone);