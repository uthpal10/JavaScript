function Bike(brand, model, price, details)
{
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.details = details;
}
 let b = new Bike('Bajaj', 'NS-200', 120000,
 function details()
 {
    // console.log(`Bike details are ${this.brand} ${this.model} ${this.price}`);
 });
// b.details()


// Object.values(b)